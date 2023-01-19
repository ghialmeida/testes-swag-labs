import { test, expect } from '@playwright/test';

test('Nao deve logar', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = page.locator('.login_credentials h4');
    await expect(title).toHaveText('Accepted usernames are:');
    await page.fill('input[placeholder="Username"]', 'standard_user');
    await page.fill('input[placeholder^=Password]', 'xxxxxxxx');
    await page.click('text=Login');

    const msgErro = page.locator('.error-message-container')
    await expect(msgErro).toHaveText(
        'Epic sadface: Username and password do not match any user in this service'
        )
});