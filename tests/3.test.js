const puppeteer = require("puppeteer");
const expect = require("chai").expect;

describe('Testeo Nro3', () => {
    it('Validando textos, creando afirmaciones con expect', async function(){
        this.timeout(10000)
        const browser = await puppeteer.launch({
            headless: false, 
            slowMo: 10
        });
        const page = await browser.newPage();
        await page.goto('https://example.com');
        const text = await page.$eval('h1', element => element.textContent) //El primer argumento es el selector, luego un callback en el que especificamos lo que queremos devolver (el textContent)
        const count = await page.$$eval('p', element => element.length)//El metodo $$eval devuelve multiples elementos
        // console.log('Texto del h1: ', text);
        // console.log('Numero de parrafos: ', count)
        expect(text).to.be.a('string', 'Example Domain');
        expect(count).to.be.equal(2)
        browser.close()
    })
    it('Keyboard Press', async function () {
        this.timeout(30000);
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 40
        })
        const page = await browser.newPage();
        await page.goto('http://zero.webappsecurity.com/index.html');
        const input = '#searchTerm';
        await page.waitForSelector(input);
        await page.type(input, "Holaa")
        await page.keyboard.press('Enter'); //Presionamos enter
        browser.close();
    })
    it('XPath', async function () {
        this.timeout(10000)
        const browser = await puppeteer.launch({
            headless: false, 
            slowMo: 10
        });
        const page = await browser.newPage();
        await page.goto('https://example.com');
        const xpath = '/html/body/div/h1'
        await page.waitForXPath(xpath)
        let nodoTitulo = await page.$x(xpath);
        console.log(await page.evaluate(el => el.textContent, nodoTitulo[0]))
        await page.waitForTimeout(3000);
        await browser.close()
    })
})