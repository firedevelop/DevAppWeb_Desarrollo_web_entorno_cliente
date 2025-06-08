// Ejemplos de uso de parseInt y parseFloat
parseInt("42")         // 42
parseInt("42.7")       // 42 (ignora lo decimal)
parseInt("100px")      // 100 (extrae el número del principio)
parseInt("abc123")     // NaN (no empieza por número)
parseFloat("3.14")      // 3.14
parseFloat("3.14abc")   // 3.14
parseFloat("123")       // 123
parseFloat("abc3.14")   // NaN

// Typeof es un operador que devuelve una cadena (string) indicando el tipo de dato de una variable o valor.
typeof 42               // "number"
typeof "hola"           // "string"
typeof true             // "boolean"
typeof undefined        // "undefined"
typeof null             // "object"       👈 curioso, es un bug histórico
typeof {}               // "object"
typeof []               // "object"       👈 los arrays también son objetos
typeof function() {}    // "function"
typeof NaN              // "number"       👈 NaN es "Not a Number", pero su tipo es "number"
typeof(Math)            // "object"       👈 Math es un objeto, no una función

// COMPRACIONES ENTRE null Y undefined
var a;
var b = null;
/* CASE 1: Comparación con == (igualdad débil)
    En este caso, null == undefined → true según las reglas de coerción en JavaScript. 
*/
console.log(b == a);   // true

/* CASE 2: Comparación con === (igualdad estricta)
    === no convierte nada, compara tanto el tipo como el valor.
    typeof null → "object"
    typeof undefined → "undefined"
 */
console.log(b === a);  // false
