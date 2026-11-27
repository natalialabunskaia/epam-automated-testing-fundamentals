describe('', () => {
  beforeEach(async () => {
    await browser.url('/');
  });

  it('Verify that a user can change the currency on the product page', async () => {
    const productListFeatured = await $$(
      '//section[@id="featured"]//div[contains(@class,"col-md")]',
    );

    const productElem = productListFeatured[0];
    await productElem.click();
    const defaultCurrencySign = '$';
    const productPriceElem = await $('.productfilneprice');
    const productPriceDefaultCurrency = await productPriceElem.getText();
    await expect(
      productPriceDefaultCurrency.includes(defaultCurrencySign),
    ).toBe(true);

    const currencyDropdown = await $('.language .dropdown-toggle');
    await currencyDropdown.moveTo();

    const euroOption = await $('//a[contains(@href, "currency=EUR")]');
    await euroOption.waitForClickable();
    await euroOption.click();

    const euroCurrencySign = '€';
    const productPriceEuroCurrency = await productPriceElem.getText();
    await expect(productPriceEuroCurrency.includes(euroCurrencySign)).toBe(
      true,
    );

    await currencyDropdown.moveTo();

    const poundOption = await $('//a[contains(@href, "currency=GBP")]');
    await poundOption.waitForClickable();
    await poundOption.click();

    const poundCurrencySign = '£';
    const productPricePoundCurrency = await productPriceElem.getText();
    await expect(productPricePoundCurrency.includes(poundCurrencySign)).toBe(
      true,
    );
  });
});
