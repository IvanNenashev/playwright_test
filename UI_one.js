const { chromium, firefox} = require('playwright');

(async() => {
    for (const browserType of [firefox, chromium]) {
const browser = await browserType.launch({
headless: false });
const page = await browser.newPage();
await page.goto('https://alfa.gemsdev.ru');
await page.screenshot({
    path: 'screenshot$.png',
});
await browser.close();
console.log ('success' + browserType.name());
    }
})();
