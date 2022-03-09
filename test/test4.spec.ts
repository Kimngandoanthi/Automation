import { test, expect } from '@playwright/test';
test('Login to github', async ({ context }) => {
    // Create new context
    const page = await context.newPage();

    // Go to github login page
    await page.goto('https://github.com/login/');

    // Login to github
    await page.fill('input[id="login_field"]', 'threelungpark@gmail.com')
    await page.fill('input[id="password"]', 'Huutrung@123')
    await page.waitForTimeout(500)
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000)

    // // Save signed-in state to 'storageState.json'.
    // await page.context().storageState({ path: 'storageState.json' });
});
// test('Reuse Authentication', async ({ browser }) => {
//     // Re-call login authentication
//     const context = await browser.newContext({ storageState: 'storageState.json' })
//     const page = await context.newPage()
//     // Check profile page to see authentication is correct
//     await page.goto('https://github.com/trungkhin710/')
//     await page.waitForTimeout(5000)
// })