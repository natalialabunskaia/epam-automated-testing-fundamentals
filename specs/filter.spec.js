describe('Filter tests', () => {
  beforeEach(async () => {
    await browser.url('/');
  });

  it('Verify that a user can filter products by category', async () => {
    const categories = await $$(
      '//section[@id="categorymenu"]'
      + '//ul[contains(@class, "categorymenu")]/li/a[not(text()="Home")]',
    );

    const categoryNames = await categories
      .map(async (category) => (await category.getProperty('textContent')).trim());

    const validateCategory = async (categoryName) => {
      const categoryElem = await $(
        '//section[@id="categorymenu"]'
        + '//ul[contains(@class, "categorymenu")]'
        + `/li/a[contains(text(), "${categoryName}")]`,
      );

      await categoryElem.click();

      const categoryPageTitle = await $('.heading1 > .maintext');

      await expect(categoryPageTitle).toBeDisplayed();
      await expect(categoryPageTitle).toHaveText(categoryName, {
        ignoreCase: true,
      });
    };

    for (const categoryName of categoryNames) {
      await validateCategory(categoryName);
    }
  });
});
