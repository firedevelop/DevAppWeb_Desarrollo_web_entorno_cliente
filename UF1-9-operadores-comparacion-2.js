function ejecuta() {
    var a = "10"; // a es String
    var b = 10;   // b es Number (entero)
    var c = 10.0; // c es Number (flotante, pero mismo valor numérico que b)

    console.log("Compruebo si 10 es igual a 10.0");
    // Output: Compruebo si 10 es igual a 10.0
    if (b == c) { // Number 10 == Number 10.0 (True)
        console.log("Son iguales");
        // Output: Son iguales
    } else {
        console.log("Son distintos");
        // Este bloque no se ejecuta
    }

    console.log("Enteros y Float son de tipo Number");
    // Output: Enteros y Float son de tipo Number
    if (b === c) { // Number 10 === Number 10.0 (True, ambos son tipo Number y mismo valor)
        console.log("Son iguales y del mismo tipo");
        // Output: Son iguales y del mismo tipo
    } else {
        console.log("Son iguales pero de otro tipo");
        // Este bloque no se ejecuta
    }

    console.log("Un bucle que añade a \"a\" un \"0\" por cada valor que tenga \"b\"");
    // Output: Un bucle que añade a "a" un "0" por cada valor que tenga "b"
    // 'a' es un string. El bucle se ejecutará mientras b > 0.
    // 'b' empieza en 10 y decrementa.
    while (b > 0) {
        a = a + "0"; // Concatenación de string
        b = b - 1;
        console.log(a);
        // Iteración 1 (b era 10, ahora es 9): Output: 100
        // Iteración 2 (b era 9, ahora es 8): Output: 1000
        // Iteración 3 (b era 8, ahora es 7): Output: 10000
        // Iteración 4 (b era 7, ahora es 6): Output: 100000
        // Iteración 5 (b era 6, ahora es 5): Output: 1000000
        // Iteración 6 (b era 5, ahora es 4): Output: 10000000
        // Iteración 7 (b era 4, ahora es 3): Output: 100000000
        // Iteración 8 (b era 3, ahora es 2): Output: 1000000000
        // Iteración 9 (b era 2, ahora es 1): Output: 10000000000
        // Iteración 10 (b era 1, ahora es 0): Output: 100000000000
    }

    console.log("Un switch nos permite controlar diferentes condiciones");
    // Output: Un switch nos permite controlar diferentes condiciones
    // 'c' es 10.0 (Number)
    switch (c) {
        case 10: // Coincide con 10.0
            console.log("Vale 10"); // Sin el break, entra en el siguiente caso
            // Output: Vale 10
        case 9:
            console.log("Vale 9");
            // Output: Vale 9
            break; // El break nos saca del switch
        case 8:
            console.log("Vale 8");
            // Este case no se ejecuta porque el anterior tuvo break
            break;
        default: // Para cualquier otro caso
            console.log("Es otra cosa");
            // Este default no se ejecuta
    }
}

ejecuta(); // Llamamos a la función para que se ejecute