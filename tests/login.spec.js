import { test, expect } from '@playwright/test';

test('Deve logar com sucesso', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = page.locator('.login_credentials h4');
    await expect(title).toHaveText('Accepted usernames are:');
    await page.fill('input[placeholder="Username"]', 'standard_user');
    await page.fill('input[placeholder^="Password"]', 'secret_sauce');
    await page.click('input[id=login-button]');
    const products = page.locator('span[class=title]');
    await expect(products).toHaveText('Products');
    
});