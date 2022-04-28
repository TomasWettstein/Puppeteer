const puppeteer = require('puppeteer')

const url = 'https://www.google.com.ar/maps'; //Declaro variable con url de googleMaps
(async () => {
    // Lanzamos un nuevo navegador.
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 70
    }); // Con esta funcion configuramos para que se vea el navegador y le configuramos la velocidad
    const page = await browser.newPage(); //Abrimos nueva pestaña
   
    // Vamos a la URL.
    await page.goto(url); // Se abre googleMaps
    const btnComoLlegar = '#hArJGc'; // Id de boton "como llegar"
    await page.waitForSelector(btnComoLlegar); //Esperamos
    await page.click(btnComoLlegar);//Le hacemos click
    const inPartida = '.tactile-searchbox-input'; //Obtenemos por clase el input de punto de partida
    await page.waitForSelector(inPartida); //Esperamos
    await page.type(inPartida, "Edison 1191, B1640HQW Martínez, Provincia de Buenos Aires");//En el input de punto de partida ingresamos la dirección
    const inDestino = '#sb_ifc52 input';//Capturamos por id el input de "Destino"
    await page.waitForSelector(inDestino); //Esperamos
    await page.type(inDestino, "Rastreador Fournier 1926, villa adelina")//Escribimos en el input de destino la direccion que necesitamos llegar
    await page.keyboard.press('Enter');//Presionamos enter para realizar la busqueda
    const primeraOpcion = '//*[@id="section-directions-trip-0"]/div[1]/div[1]';//Obtenemos por xpath la primera opción
    await page.waitForXPath(primeraOpcion); //Esperamos al xpath
    let nodo = await page.$x(primeraOpcion); //Obtenemos el nodo del xpath
    await nodo[0].click(); //Le hacemos click, se pone [0] por que esto devuelve una matriz
    const texto = '.TGDfee h1 span'; //Obtenemos el texto por clase navegamos entre elementos hasta encontrar el span que buscamos
    await page.waitForSelector(texto);//Esperamos
    let nodoTexto = await page.$(texto); //Obtenemos el nodo
    console.log(await page.evaluate(el => el.textContent, nodoTexto)); //Imprimos en consola el texto que necesitamos
    // Cerramos la página y el navegador.
    await page.close();//Cerramos la pestaña
    await browser.close(); //Cerramos el navegador
  })();