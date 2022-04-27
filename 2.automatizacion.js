const puppeteer = require('puppeteer')

let prueba = async() => {
    const browser = await puppeteer.launch(); //No se muestra ninguna ventana y las interacciones son automaticas
    const page = await browser.newPage(); //Abrimos un tab
    await page.goto('https://www.w3schools.com/')
    const input = '#search2'; //Capturamos el input del buscador
    await page.waitForSelector(input); //Le indicamos  que espere a que este disponible el elemento
    await page.type(input, "Javascript"); // Simulamos lo que escribiriamos en la pagina.
    await page.keyboard.press('Enter'); //Presionamos enter en la pagina
    const result = '#main h1'; //Capturamos por id y el elemento (h1) que necesitamos.
    await page.waitForSelector(result);//Espera a que figure el h1 en la pagina
    const first = await page.$(result); ////Esto nos da una referencia al nodo detro de puppeteer
    console.log(await page.evaluate(el => el.textContent, first)); //Evaluamos con respecto a la pagina web (dev tools), le pasamos que queremos evaluar este pedazo de codigo sobre el nodo title y esto nos da el contenido del texto de este elemento.
    await browser.close(); //Cerramos el navegador.
}
prueba();