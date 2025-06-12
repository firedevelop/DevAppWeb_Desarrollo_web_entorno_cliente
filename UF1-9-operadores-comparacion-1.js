function ejecuta() {
    var a = "20"; // a es un String
    var b = 20.0; // b es un Number

    console.log("Condicionales: ");
    // Output: Condicionales:
    if (a == b) { // Compara valor (con coerción de tipo), "20" se convierte a 20
        console.log("Son iguales");
        // Output: Son iguales
    }

    if (a === b) { // Compara valor Y tipo (sin coerción)
        console.log("Son iguales y del mismo tipo");
        // Este bloque no se ejecuta
    } else {
        console.log("Son iguales pero de otro tipo");
        // Output: Son iguales pero de otro tipo
    }

    console.log("Operaciones del mismo tipo:");
    // Output: Operaciones del mismo tipo:
    var suma = a + 2; // String "20" + Number 2 => String "202" (concatenación)
    console.log(suma);
    // Output: 202
    var suma = b + "patitos"; // Number 20 + String "patitos" => String "20patitos" (concatenación)
    console.log(suma);
    // Output: 20patitos

    console.log("Operaciones de distinto tipo:");
    // Output: Operaciones de distinto tipo:
    console.log(a + b); // String "20" + Number 20 => String "2020" (concatenación)
    // Output: 2020

    console.log("Comienzo del bucle:");
    // Output: Comienzo del bucle:
    // 'a' es un string, por lo que '+' con 'i' (number) resultará en concatenación de strings
    for (var i = 0; i < 10; i++) {
        a = a + i;
        console.log(a);
        // i=0, a="200" -> Output: 200
        // i=1, a="2001" -> Output: 2001
        // i=2, a="20012" -> Output: 20012
        // i=3, a="200123" -> Output: 200123
        // i=4, a="2001234" -> Output: 2001234
        // i=5, a="20012345" -> Output: 20012345
        // i=6, a="200123456" -> Output: 200123456
        // i=7, a="2001234567" -> Output: 2001234567
        // i=8, a="20012345678" -> Output: 20012345678
        // i=9, a="200123456789" -> Output: 200123456789
    }
}

ejecuta(); // Llamamos a la función para que se ejecute