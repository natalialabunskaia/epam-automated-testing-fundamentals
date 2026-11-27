describe('login tests', () => {
  beforeEach(async () => {
    await browser.url('/');
  });

  it('Verify that a user can log in with valid credentials', async () => {
    const loginOrRegisterButton = await $(
      '//ul[contains(@class, "main_menu")]/li/a[text()="Login or register"]',
    );

    await loginOrRegisterButton.click();

    await expect(browser).toHaveUrl(
      'https://automationteststore.com/index.php?rt=account/login',
    );
    const accountPageTitle = await $('.heading1 > .maintext');
    await expect(accountPageTitle).toBeDisplayed();
    await expect(accountPageTitle).toHaveText('ACCOUNT LOGIN');

    const loginNameInput = await $('//input[@name="loginname"]');
    const passwordNameInput = await $('//input[@name="password"]');
    const loginButton = await $(
      '//form[contains(@id,"loginFrm" )]//button[@title="Login"]',
    );
    await loginNameInput.setValue(process.env.LOGIN_NAME);
    await passwordNameInput.setValue(process.env.PASSWORD);
    await loginButton.click();

    await expect(browser).toHaveUrl(
      'https://automationteststore.com/index.php?rt=account/account',
    );
    const myAccountPageTitle = await $('.heading1 > .maintext');

    await expect(myAccountPageTitle).toBeDisplayed();
    await expect(myAccountPageTitle).toHaveText('MY ACCOUNT');

    const userName = await $('.subtext');
    await expect(userName).toHaveText('Natalia');
  });
});
