const puppeteer = require("puppeteer")

describe('Prueba con puppeteer', () => {
    it('Tendria que habirir el navegador', async function (){
        this.timeout(20000)
        const browser = await puppeteer.launch({
            headless: false, 
            slowMo: 500
        });
        const page = await browser.newPage();
        await page.goto('https://example.com/');
        await page.waitForTimeout(2000) //Con esto le ponemos pausa al test
        const titulo = 'h1';
        await page.waitForSelector(titulo);
        await page.reload() //Esto es para recargar la pagina
        await page.waitForTimeout(3000)
        await page.waitForSelector(titulo)
        browser.close();
    });
    it('Veriricar el parrafo', async function (){
        this.timeout(10000)
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 500
        });
        const page = await browser.newPage();
        await page.goto('https://example.com/');
        const parrafo = '/html/body/div/p[1]';
        await page.waitForXPath(parrafo);
        browser.close();
    });
    it('Cambiar de pestañas', async function () {
        this.timeout(30000)
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 500
        });
        const page = await browser.newPage();
        await page.goto('https://example.com/');
        const titulo = 'h1';
        await page.waitForSelector(titulo);
        await page.goto('https://www.google.com/')
        await page.waitForSelector('.lnXdpd') //Clase de img de google
        await page.goBack()
        await page.waitForSelector(titulo);
        await page.goForward();
        await page.waitForSelector('.lnXdpd') //Clase de img de google
        browser.close()
    })
})