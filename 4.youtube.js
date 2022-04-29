const puppeteer = require('puppeteer')

const url = 'https://www.youtube.com/'; //Declaro variable con url de googleMaps
(async () => {
  // Lanzamos un nuevo navegador.
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 70,
    args: [
      '--window-size=1500,720 '
    ]
  }); // Con esta funcion configuramos para que se vea el navegador, le configuramos la velocidad y en que tamaño se va a abrir la pantalla del navegador
  const page = await browser.newPage();
  await page.setViewport({ width: 1499, height: 720 });
  await page.goto(url);
  const buscador = '#search-input input';
  await page.waitForSelector(buscador);
  await page.type(buscador, "Pink Floyd The Wall");
  await page.keyboard.press('Enter');
  const primerVideo = '//*[@id="overlay-text"]';
  await page.waitForXPath(primerVideo);
  let nodo = await page.$x(primerVideo);
  await nodo[0].click();
  const titulo = '//*[@id="container"]/h1';
  await page.waitForXPath(titulo);
  let nodoTitulo = await page.$x(titulo);
  console.log("Estas escuchando: ", await page.evaluate(el => el.textContent, nodoTitulo[0]))
  setTimeout(() => {
    browser.close()
  }, 10000);
})();




