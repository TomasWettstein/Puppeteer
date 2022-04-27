const puppeteer = require('puppeteer')

let prueba = async() => {
    const browser = await puppeteer.launch(); //No se muestra ninguna ventana y las interacciones son automaticas
    const page = await browser.newPage(); //Abrimos un tab
    await page.goto('https://example.com')
    const title = await page.$('h1'); //Esto nos da una referencia al nodo detro de puppeteer
    console.log(await page.evaluate(el => el.textContent, title)); //Evaluamos con respecto a la pagina web (dev tools), le pasamos que queremos evaluar este pedazo de codigo sobre el nodo title y esto nos da el contenido del texto de este elemento.
    await browser.close();
}

prueba();