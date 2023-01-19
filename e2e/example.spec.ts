// import { test, expect } from '@playwright/test';

// test('página inicial tem Playwright no título e link de introdução com link para a página de introdução', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Espere um título "para conter" uma substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // criar um localizador
//   const getStarted = page.locator('text=Get Started');

//   // Espere que um atributo "seja estritamente igual" ao valor.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Clique no link de introdução.
//   await getStarted.click();

//   // Espera que o URL contenha introdução.
//   await expect(page).toHaveURL(/.*intro/);
// });
