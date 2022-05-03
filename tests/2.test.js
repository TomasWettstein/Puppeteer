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
    it('Manipulando elementos', async function (){
        this.timeout(30000);
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 30
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
        const select = '#preferred-interface';
        await page.waitForSelector(select);
        await page.select(select, 'JavaScript API'); //Con el metodo select podemos seleccionar una opcion del selector en especifico.
        await page.waitForTimeout(4000);
        const textArea = '#comments';
        const mensaje = 'Hola, buenas tardes!'
        await page.waitForSelector(textArea);
        await page.type(textArea, mensaje);
        const btn = '#submit-button';
        await page.click(btn);
        await page.waitForTimeout(1000)
        const resultado = await page.$('.result-content h1')
        console.log(await page.evaluate(el => el.textContent, resultado));
        await page.waitForTimeout(2000)
        browser.close();
    })
})