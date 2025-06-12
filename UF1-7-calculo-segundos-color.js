// Mostramos la fecha actual
var fechaActual = new Date(Date.now()); // 1. Creamos un objeto 'Date' con la fecha y hora actuales.
                                        //    Date.now() devuelve los milisegundos desde el 1 de enero de 1970 UTC.
                                        //    new Date(...) convierte esos milisegundos en un objeto de fecha legible.

// 2. Seleccionamos el <span> con id="fecha" y cambiamos su contenido HTML.
document.getElementById('fecha').innerHTML =
    fechaActual.getDate() + " de " + // Obtiene el día del mes (ej: 28)
    fechaActual.toLocaleDateString('es-ES', { month: 'long' }) + " de " + // Obtiene el nombre completo del mes en español (ej: "julio")
    fechaActual.getFullYear(); // Obtiene el año con cuatro dígitos (ej: 2023)


// Mostramos el segundo actual
var segundoActual = fechaActual.getSeconds(); // 3. Obtenemos los segundos actuales (0-59) del objeto 'fechaActual'.

// 4. Seleccionamos el <span> con id="segundos" y mostramos los segundos.
document.getElementById('segundos').innerHTML = segundoActual;


// Utilizamos Math para multiplicar el segundo actual por PI y redondear el valor.
var resultado = Math.round(segundoActual * Math.PI); // 5. Multiplicamos 'segundoActual' por el valor de PI (aprox. 3.14159)
                                                     //    y luego redondeamos el resultado al entero más cercano con Math.round().

// 6. Seleccionamos el <span> con id="resultado" y mostramos el número calculado.
document.getElementById('resultado').innerHTML = resultado;


// Variable que cambiará el color de fondo
var color; // 7. Declaramos una variable 'color'. Su valor se definirá en la función 'parOImpar'.


// La función cambia el valor de la variable 'color' dependiendo de su paridad y devuelve un texto.
function parOImpar(valor) { // 8. Definimos una función llamada 'parOImpar' que recibe un 'valor' numérico.
    if (valor % 2 === 0) { // 9. Comprobamos si el 'valor' es par (el resto de la división por 2 es 0).
        color = "red";      // 10. Si es par, asignamos "red" a la variable 'color' (la que está fuera de la función).
        return "par";       // 11. Y la función devuelve la cadena de texto "par".
    } else {                // 12. Si no es par (es impar).
        color = "blue";     // 13. Asignamos "blue" a la variable 'color'.
        return "impar";     // 14. Y la función devuelve la cadena de texto "impar".
    }
}


// Mostramos el texto de la paridad y cambiamos el color de fondo.
// 15. Llamamos a la función 'parOImpar' con el 'resultado' calculado antes.
//     El texto que devuelve la función ("par" o "impar") se muestra en el <span> con id="paridad".
document.getElementById('paridad').innerHTML = parOImpar(resultado);

// 16. Cambiamos el color de fondo del <body>.
//     document.getElementsByTagName('body') devuelve una colección de todos los elementos <body> (normalmente solo hay uno).
//     [0] accede al primer (y único) elemento <body>.
//     .style.backgroundColor permite cambiar la propiedad CSS 'background-color'.
//     Se usa el valor de la variable 'color', que fue asignado dentro de la función 'parOImpar' ("red" o "blue").
document.getElementsByTagName('body')[0].style.backgroundColor = color;