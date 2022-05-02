const puppeteer = require("puppeteer")

describe('Test inputs', () => {
    it('Manipulando inputs', async function(){
        this.timeout(20000)
        const browser = await puppeteer.launch({
            headless: false, 
            slowMo: 10
        });
        const page = await browser.newPage();
        await page.goto('https://devexpress.github.io/testcafe/example/');
        const input1 = '#developer-name'
        await page.waitForSelector(input1);
        await page.type(input1, "Tomas Fernandez", {delay: 200}); //El delay sirve para escribir mas lento en el input
        await page.waitForTimeout(2000);
        const button = '#tried-test-cafe';
        await page.waitForSelector(button, {clickCount: 5});
        await page.click(button);
        await page.waitForTimeout(2000);
        browser.close();
    })
})