import { test, expect } from '@playwright/test';

test('Open BO staging homepage', async ({ context }) => {
    // Create new context
    const page = await context.newPage();
    
    // Go to BO login page
    await page.goto('https://green-school-portal.web.app/login');
    await page.pause();
    // await page.waitForTimeout(5000)
    // Login to BO 
    await page.fill('input[placeholder="Enter email"]', 'product.test+renseikai@manabie.com')
    await page.fill('input[placeholder="Enter password"]', 'Manabie123')
    
    await page.keyboard.press('Enter')
    
    
    
    // Go to Student Management page after login successfully
    // let value = await page.$$('h6.MuiTypography-root.MuiTypography-h6');
    
    let value = await page.waitForSelector('[aria-label="title"]');
    const valueString = await value.innerText();
    console.log(valueString);
    await expect(valueString).toContain('Student Management');
});