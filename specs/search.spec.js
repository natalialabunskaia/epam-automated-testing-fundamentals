describe('', () => {
  beforeEach(async () => {
    await browser.url('/');
  });

  it('Verify that a user can search for a product by its name', async () => {
    const productListFeatured = await $$(
      '//section[@id="featured"]//div[contains(@class,"col-md")]',
    );

    const productElem = productListFeatured[0];
    const productName = await productElem
      .$('.//a[@class="prdocutname"]')
      .getAttribute('title');

    const searchField = await $('//div[contains(@class, "search-bar")]//input');
    await searchField.addValue(productName);
    const searchBtn = await $('.button-in-search');
    await searchBtn.click();

    const productTitle = await $('.productname > .bgnone');

    await expect(productTitle).toBeDisplayed();
    await expect(productTitle).toHaveText(productName);
  });
});
