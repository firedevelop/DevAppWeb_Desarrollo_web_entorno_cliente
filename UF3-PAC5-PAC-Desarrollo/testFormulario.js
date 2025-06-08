const puppeteer = require('puppeteer');

async function testFormulario() {
  const browser = await puppeteer.launch({ headless: false }); // Para ver el navegador
  const page = await browser.newPage();

  // Ruta si usas Windows command:

  await page.goto('http://127.0.0.1:5501/UF3-PAC5-PAC-Desarrollo/piedraPapelTijera.html');

  // Función para esperar un poco (útil para observar los resultados)
  const delay = ms => new Promise(res => setTimeout(res, ms));

  // --- Casos de prueba ---

  console.log('--- Test 1: Validación de nombre (vacío) ---');
  await page.click('button:nth-child(1)'); // Clic en el botón "Jugar"
  await delay(500);
  const nombreClaseVacio = await page.$eval('input[name="nombre"]', input => input.classList.contains('fondoRojo'));
  console.log('  Nombre vacío - Fondo rojo:', nombreClaseVacio);

  console.log('\n--- Test 2: Validación de nombre (menos de 4 caracteres) ---');
  await page.type('input[name="nombre"]', 'abc');
  await page.click('button:nth-child(1)');
  await delay(500);
  const nombreClaseCorto = await page.$eval('input[name="nombre"]', input => input.classList.contains('fondoRojo'));
  console.log('  Nombre corto - Fondo rojo:', nombreClaseCorto);
  await page.evaluate(() => document.querySelector('input[name="nombre"]').value = ''); // Limpiar el campo

  console.log('\n--- Test 3: Validación de nombre (primer caracter numérico) ---');
  await page.type('input[name="nombre"]', '1nombre');
  await page.click('button:nth-child(1)');
  await delay(500);
  const nombreClaseNumero = await page.$eval('input[name="nombre"]', input => input.classList.contains('fondoRojo'));
  console.log('  Nombre con número al inicio - Fondo rojo:', nombreClaseNumero);
  await page.evaluate(() => document.querySelector('input[name="nombre"]').value = ''); // Limpiar el campo

  console.log('\n--- Test 4: Validación de partidas (vacío) ---');
  await page.click('button:nth-child(1)');
  await delay(500);
  const partidasClaseVacio = await page.$eval('input[name="partidas"]', input => input.classList.contains('fondoRojo'));
  console.log('  Partidas vacío - Fondo rojo:', partidasClaseVacio);

  console.log('\n--- Test 5: Validación de partidas (cero) ---');
  await page.type('input[name="partidas"]', '0');
  await page.click('button:nth-child(1)');
  await delay(500);
  const partidasClaseCero = await page.$eval('input[name="partidas"]', input => input.classList.contains('fondoRojo'));
  console.log('  Partidas cero - Fondo rojo:', partidasClaseCero);
  await page.evaluate(() => document.querySelector('input[name="partidas"]').value = ''); // Limpiar el campo

  console.log('\n--- Test 6: Juego básico (nombre válido, partidas válidas, jugar una partida) ---');
  await page.type('input[name="nombre"]', 'TestUser');
  await page.type('input[name="partidas"]', '1');
  await page.click('button:nth-child(1)'); // Clic en "Jugar"
  await delay(500);
  const nombreDisabled = await page.$eval('input[name="nombre"]', input => input.disabled);
  const partidasDisabled = await page.$eval('input[name="partidas"]', input => input.disabled);
  const totalPartidasTexto = await page.$eval('#total', el => el.textContent);
  console.log('  Nombre deshabilitado:', nombreDisabled);
  console.log('  Partidas deshabilitado:', partidasDisabled);
  console.log('  Total de partidas:', totalPartidasTexto);

  await page.click('#jugador img:nth-child(1)'); // Selecciona Piedra
  await page.click('button:nth-child(2)'); // Clic en "¡YA!"
  await delay(1000);
  const partidasJugadasTexto = await page.$eval('#actual', el => el.textContent);
  console.log('  Partidas jugadas:', partidasJugadasTexto);

  console.log('\n--- Test 7: Botón Reset ---');
  await page.click('button:nth-child(3)'); // Clic en "RESET"
  await delay(500);
  const nombreEnabledReset = await page.$eval('input[name="nombre"]', input => !input.disabled);
  const partidasEnabledReset = await page.$eval('input[name="partidas"]', input => !input.disabled);
  const nombreValorReset = await page.$eval('input[name="nombre"]', input => input.value);
  const partidasValorReset = await page.$eval('input[name="partidas"]', input => input.value);
  const actualReset = await page.$eval('#actual', el => el.textContent);
  const totalReset = await page.$eval('#total', el => el.textContent);
  const historialReset = await page.$$eval('#historial li', lis => lis.map(li => li.textContent).includes('★ Nueva partida'));
  const maquinaReset = await page.$eval('#maquina img', img => img.src.includes('defecto.png'));

  console.log('  Nombre habilitado:', nombreEnabledReset);
  console.log('  Partidas habilitado:', partidasEnabledReset);
  console.log('  Valor nombre:', nombreValorReset);
  console.log('  Valor partidas:', partidasValorReset);
  console.log('  Partidas actual:', actualReset);
  console.log('  Total partidas:', totalReset);
  console.log('  Historial reset:', historialReset);
  console.log('  Imagen máquina reset:', maquinaReset);

  // Puedes añadir más casos de prueba para cubrir todas las funcionalidades
  // como jugar varias partidas, probar diferentes selecciones, etc.

  await browser.close();
}

testFormulario();