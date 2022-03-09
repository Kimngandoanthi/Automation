const { test, expect } = require('@playwright/test');
test('basic test', async ({ page }) => {
  await page.goto('https://green-school-portal.web.app/login');
  await page.fill('input[id=username]', 'product.test+renseikai@manabie.com');
  await page.fill('input[id=password]', 'Manabie123');
  await page.keyboard.press('Enter');
  await page.pause(); 
  await page.click ('text=Students (V1)');
  await page.waitForSelector('button');
  await page.click('button:has-text("Add")');
  await page.fill('input[data-testid=FormStudentInfo__inputName]', 'ngan autotest3');
  await page.fill('input[data-testid=FormStudentInfo__inputEmail]', 'kimngan.doan+autotest3@manabie.com');
  await page.click('id=EnrollmentStatusAutocompleteHF__autocomplete');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.click('id=GradeAutocompleteHF__autocomplete');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.click('button:has-text("Add") >> nth = 1')  
  await page.fill('input[data-testid=TextFieldHF__input]', 'ngan parent');
  await page.click('id=mui-component-select-relationship');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await page.fill('input[data-testid=TextFieldHF__input] >> nth = 1', 'kimngan.doan+parentauto3@manabie.com');
  await page.click('button:has-text("Add") >> nth = 3');  
  await page.click('data-testid=FooterDialogConfirm__buttonSave');  
  await page.click('data-testid=DialogStudentAccountInfoFooter__buttonClose');
  await page.fill('input[aria-invalid=false]', 'ngan autotest3');
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 5000));  
  //   const result = await page.$$('h3');
//   const title = await result[0];
//   const title1 = await result[1];
//   const title2 = await result[2];
//   let resultTest = false;
//   if (title.includes('Manabie') && title1.includes('Manabie') && title2.includes('Manabie')) {
//     resultTest = true;
//   }
//   await expect(resultTest);
//   console.log (resultTest);
  // const element = await page.waitForSelector('h3');
  // const title = await element.innerText();
  // await new Promise(r => setTimeout(r, 5000));
});
