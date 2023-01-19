import { test, expect } from '@playwright/test';

test('Acesso bloqueado', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = page.locator('.login_credentials h4');
    await expect(title).toHaveText('Accepted usernames are:');
    await page.fill('input[placeholder="Username"]', 'locked_out_user');
    await page.fill('input[placeholder^=Password]', 'secret_sauce');
    await page.click('text=Login');

    const modalMessage = page.locator('.error-message-container')
    await expect(modalMessage).toHaveText(
        'Epic sadface: Sorry, this user has been locked out.'
        )
});