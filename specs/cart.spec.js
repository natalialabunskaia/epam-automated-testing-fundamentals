describe('cart tests', () => {
  beforeEach(async () => {
    await browser.url('/');
  });

  it('Verify that a user can add a product to the cart', async () => {
    const productListFeatured = await $$(
      '//section[@id="featured"]//div[contains(@class,"col-md")]',
    );

    const productElem = productListFeatured[0];
    const productName = await productElem
      .$('.//a[@class="prdocutname"]')
      .getAttribute('title');
    const productAddToCartBtn = await productElem.$(
      './/a[@class="productcart"]',
    );
    await productAddToCartBtn.click();

    const goToCartBtn = await $(
      '//ul[contains(@class, "topcart")]//a[@class="dropdown-toggle"]',
    );

    await goToCartBtn.click();

    const shoppingCartTitle = await $('.heading1 > .maintext');
    await expect(shoppingCartTitle).toBeDisplayed();
    await expect(shoppingCartTitle).toHaveText('Shopping Cart', {
      ignoreCase: true,
    });

    const cartProduct = await $(
      `//div[contains(@class, "cart-info")]//a[text()="${productName}"]`,
    );

    await expect(cartProduct).toBeDisplayed();
  });
});
