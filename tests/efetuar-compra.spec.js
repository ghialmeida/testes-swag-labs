import { test, expect } from '@playwright/test';

test('Efetuar compra', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = page.locator('.login_credentials h4');
    await expect(title).toHaveText('Accepted usernames are:');
    await page.fill('input[placeholder="Username"]', 'standard_user');
    await page.fill('input[placeholder^=Password]', 'secret_sauce');
    await page.click('text=Login');
    await page.click('button[id="add-to-cart-sauce-labs-backpack"]');
    await page.click('div[id="shopping_cart_container"]');
    await page.click('text=Checkout');
    await page.fill('input[placeholder="First Name"]', 'Alyfer');
    await page.fill('input[placeholder="Last Name"]', 'Ambrozini');
    await page.fill('input[placeholder="Zip/Postal Code"]', '18430000');
    await page.click('text=Continue');
    await page.click('text=Finish');
    
    const msgCompra = page.locator('.complete-header')
    await expect(msgCompra).toHaveText(
        'THANK YOU FOR YOUR ORDER'
        )
});