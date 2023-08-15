const { test, expect } = require('@playwright/test');

test('Run & Complete WF', async ({ page }) => {

await page.goto('https://totalqsrdev.us.auth0.com/u/login?state=hKFo2SBnemRtbzNjX2tETjFnLUVhMEhOc1c0NmN2X0tDOFkxZaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHVvUWxQSzZ2SGVCUmZ2XzB2ZkYtUDh2amphOFdiZUdpo2NpZNkgajJKT3RZbGlPTjE4eTcyQ0x4RVRrSnJYZE5GMEo2ZGM');
await page.getByLabel('Username or email address').click();
await page.getByLabel('Username or email address').fill('khodun.yaroslav.qa@gmail.com');
await page.getByLabel('Username or email address').press('Tab');
await page.getByLabel('Password').fill('password');
await page.getByRole('button', { name: 'Continue', exact: true }).click();
await page.goto('https://dev.totalqsr.com/#/process/library/806a0bc6-a924-4f5a-ace7-e9f95a52b85c/');
await page.getByRole('button', { name: 'History' }).click();
await page.getByRole('button', { name: 'Autotest_WF_Complete v1.0 Version | 14 Aug, 08:48' }).click();
await page.getByRole('link', { name: 'Run New Workflow' }).click();
await page.locator('div').filter({ hasText: /^Employees$/ }).getByRole('checkbox').check();
await page.getByLabel('Open').click();
await page.getByRole('option', { name: 'Berlington 1 Store Manager' }).getByRole('checkbox').check();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Create workflow' }).click();
await page.getByRole('row', { name: 'Yaroslav Khodun' }).getByRole('button').nth(1).click();
await page.getByRole('link', { name: 'User [0/1] Jason Washington' }).click();
await page.getByRole('button', { name: 'Complete Workflow' }).click();
await page.goto('https://dev.totalqsr.com/#/process/workflows');

});

// npx playwright test complete_wf.test.js