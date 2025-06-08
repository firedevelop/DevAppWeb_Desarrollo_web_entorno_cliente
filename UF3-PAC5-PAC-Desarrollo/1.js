// Este array no se puede modificar
var posibilidades = ["piedra", "papel", "tijera"];

// VARIABLES GLOGBALES DOM REFERENCIAS
let inputNombre = document.querySelector('input[name="nombre"]');
let inputPartidas = document.querySelector('input[name="partidas"]');

let buttonJugar = document.querySelectorAll('button')[0];
let buttonYA = document.querySelectorAll('button')[1];
let buttonReset = document.querySelectorAll('button')[2];

let imagesJugador = document.querySelectorAll('#jugador img');
let imageMaquina = document.querySelector('#maquina img');

// marcas lógicas para iniciar
let nombreJugador = '';
let partidaIniciada = false;
let seleccionPorDefecto = 0, partidasJugadas = 0, totalPartidas = 0; 

let idActual = document.getElementById('actual');
let idTotal = document.getElementById('total');
let idHistorial = document.getElementById('historial');

// MOSTRAR IMAGENES POR DEFECTO Y MARCAR LA SELECCIONADA
imagesJugador.forEach((img, index) => { // recorre cada img junto con su índice (index 0, 1, 2)
	img.src = `img/${posibilidades[index]}Jugador.png`; // nombre imagen + texto Jugador.png de la carpeta img
});

// BOTON JUGAR Y VALIDACION DEL FORMULARIO
buttonJugar.addEventListener('click', () => {
	nombreJugador = inputNombre.value.trim(); // elimina campos en blanco
	totalPartidas = parseInt(inputPartidas.value); // convierte numero a integer. Ejemplo 3.3 = 3

//  Validaciones. let genera valor boolean
	let validacionNombre = nombreJugador.length > 3 && isNaN(nombreJugador.charAt(0)); // validamos que sea >3 caracteres y que el primer caracter charAt(0) NO sea un numero
	let validacionPartidas = !isNaN(totalPartidas) && totalPartidas > 0; 

	inputNombre.classList.toggle('fondoRojo', !validacionNombre); // cambia color rojo sino valida
	inputPartidas.classList.toggle('fondoRojo', !validacionPartidas);

	if (validacionNombre && validacionPartidas) { // si validacion es OK los desabilita para que no se puedan volver a usar hasta fin partida
		inputNombre.disabled = inputPartidas.disabled = true;
		idTotal.textContent = totalPartidas;
		partidaIniciada = true; // true permitirá usar el evento YA
	}
});

// AÑADIR UN EVENTO CLICK A CADA IMAGEN
imagesJugador.forEach((img, index) => { 						// Recorre las 3 imágenes del jugador (piedra, papel, tijera) una por una para ponerles un evento.
	img.addEventListener('click', () => { 						// Evento al hacer clic
		if (inputNombre.disabled && inputPartidas.disabled) { 	// Solo permite elegir opción con inputs desactivados
			seleccionPorDefecto = index; 						// Guarda la opción del Jugador 0=piedra, 1=papel, 2=tijera
			imagesJugador.forEach((img2, i) => {				// Recorre nuevamente las 3 imágenes para actualizar su estado visual.
				img2.className = (i === index) ? 'seleccionado' : 'noSeleccionado'; // aplica CSS
				img2.src = `img/${posibilidades[i]}Jugador.png`;  // asegura imagenes correctas
			});
		}
	});
});

// Evento ¡YA!
buttonYA.addEventListener('click', () => {
	if (!partidaIniciada || seleccionPorDefecto === -1 || partidasJugadas >= totalPartidas) return; // no se ha pulsado YA || No ha elegido 0=piedra, 1=papel, 2=tijera || todas partidas terminadas

	let seleccionMaquina = Math.floor(Math.random() * posibilidades.length);    // floor(0.47(entre 0 y 1)) * 3) = floor(1.41) = 1 (papel)
	imageMaquina.src = `img/${posibilidades[seleccionMaquina]}Ordenador.png`;   // img/[1]Ordenador.png = img/papelOrdenador.png

	let resultadoPartida = '';
    // Sólo hace falta mostrar las 3 combinaciones posibles en las que un Jugador ganaría
    if (
        (seleccionPorDefecto === 0 && seleccionMaquina === 2) || // piedra gana a tijera
        (seleccionPorDefecto === 1 && seleccionMaquina === 0) || // papel gana a piedra
        (seleccionPorDefecto === 2 && seleccionMaquina === 1)    // tijera gana a papel
        ){
            resultadoPartida = `😀 Gana ${nombreJugador}`;
        }
	else if (seleccionPorDefecto === seleccionMaquina) {
		resultadoPartida = '🌀 Empate';
	} 
    else {
		resultadoPartida = '🤖 Gana la máquina';
	}

	let li = document.createElement('li');
	li.textContent = resultadoPartida;
	idHistorial.appendChild(li);

	idActual.textContent = ++partidasJugadas;
});

// RESETEA PARTIDA Y COMIENZA NUEVA
buttonReset.addEventListener('click', () => {
	inputPartidas.disabled = inputNombre.disabled = false;
	inputPartidas.value = 0;

	idActual.textContent = idTotal.textContent = 0;

	partidasJugadas = totalPartidas = seleccionPorDefecto = 0;
	partidaIniciada = false;

	imagesJugador.forEach((img, index) => {
		img.src = `img/${posibilidades[index]}Jugador.png`;
		img.className = (index === 0) ? 'seleccionado' : 'noSeleccionado';
	});

	imageMaquina.src = 'img/defecto.png';

	let li = document.createElement('li');
	li.textContent = '★ Nueva partida';
	idHistorial.appendChild(li);
});
