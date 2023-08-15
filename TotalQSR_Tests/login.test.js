const { test, expect } = require('@playwright/test');

test('Login into TotalQSR', async ({ page }) => {
await page.goto('https://dev.totalqsr.com/#/company/dashboard:1');
await page.goto('https://totalqsrdev.us.auth0.com/u/login?state=hKFo2SBQM1g4cEV2ZjlXLVhpNHMxakR0d0EtTDNqVEZsTC14X6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFVNdGhrRGVOdVVkcS03ZHBLanZOS2MxejlGckhhNEhMo2NpZNkgajJKT3RZbGlPTjE4eTcyQ0x4RVRrSnJYZE5GMEo2ZGM');
await page.getByLabel('Username or email address').click();
await page.getByLabel('Username or email address').fill('khodun.yaroslav.qa@gmail.com');
await page.getByLabel('Password').click();
await page.getByLabel('Password').fill('password');
await page.getByRole('button', { name: 'Continue', exact: true }).click();

});

