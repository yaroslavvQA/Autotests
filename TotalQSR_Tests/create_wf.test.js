const { test, expect } = require('@playwright/test');

test('Create Workflow', async ({ page }) => {

await page.goto('https://totalqsrdev.us.auth0.com/u/login?state=hKFo2SBQM1g4cEV2ZjlXLVhpNHMxakR0d0EtTDNqVEZsTC14X6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFVNdGhrRGVOdVVkcS03ZHBLanZOS2MxejlGckhhNEhMo2NpZNkgajJKT3RZbGlPTjE4eTcyQ0x4RVRrSnJYZE5GMEo2ZGM');
await page.getByLabel('Username or email address').click();
await page.getByLabel('Username or email address').fill('khodun.yaroslav.qa@gmail.com');
await page.getByLabel('Password').click();
await page.getByLabel('Password').fill('password');
await page.getByRole('button', { name: 'Continue', exact: true }).click();
await page.getByRole('banner').getByRole('button').first().click();
await page.getByRole('button', { name: 'PROCESS' }).click();
await page.getByRole('tab', { name: 'Library', exact: true }).click();
await page.locator('.MuiDrawer-root > .MuiBackdrop-root').click();
await page.getByRole('button', { name: 'Add Template' }).click();
await page.getByLabel('Name your template').fill('Test_Template_Autotest_1');
await page.getByRole('button', { name: 'Proceed' }).click();
await page.getByRole('link', { name: 'Test_Template_Autotest_1' }).click();
await page.getByRole('listitem').getByRole('textbox').click();
await page.getByRole('listitem').getByRole('textbox').fill('Autoyask_1');
await page.getByRole('listitem').getByRole('textbox').press('ArrowLeft');
await page.getByRole('listitem').getByRole('textbox').press('ArrowLeft');
await page.getByRole('listitem').getByRole('textbox').press('ArrowLeft');
await page.getByRole('listitem').getByRole('textbox').press('ArrowLeft');
await page.getByRole('listitem').getByRole('textbox').press('ArrowLeft');
await page.getByRole('listitem').getByRole('textbox').fill('Autotask_1');
await page.locator('div:nth-child(4) > button').first().click();
await page.getByRole('textbox').nth(2).click();
await page.getByRole('textbox').nth(2).fill('Autotask_2');
await page.locator('.react-page-cell-insert-new').click();
await page.getByText('Embed Website').click();
await page.waitForLoadState(); // Ожидание завершения загрузки после клика

await page.getByRole('button', { name: 'Publish' }).click();
await page.waitForLoadState(); // Ожидание завершения загрузки после клика

await page.getByRole('button', { name: 'Save' }).click();
await page.waitForLoadState(); // Ожидание завершения загрузки после клика

await page.getByRole('button', { name: 'History' }).click();
await page.waitForLoadState(); // Ожидание завершения загрузки после клика

await page.getByRole('button', { name: 'Test_Template_Autotest_1 v1.0' }).click();
await page.waitForLoadState(); // Ожидание завершения загрузки после клика

await page.getByRole('link', { name: 'Run New Workflow' }).click();
await page.waitForLoadState(); // Ожидание завершения загрузки после клика
await page.locator('div').filter({ hasText: /^Employees$/ }).getByRole('checkbox').check();
await page.getByLabel('Open').click();
await page.getByRole('option', { name: 'Berlington 1 Store Manager' }).getByRole('checkbox').check();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Create workflow' }).click();
await page.waitForLoadState(); // Ожидание завершения загрузки после клика
});