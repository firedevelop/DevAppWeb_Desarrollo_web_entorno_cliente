//instanceof es un operador en JavaScript que se usa para verificar si un objeto es una instancia de una determinada clase o constructor. SINTAXIS: obj instanceof Constructor

class Animal {}
class Dog extends Animal {}

const dog = new Dog();

console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true
console.log(dog instanceof Array);  // false
console.log("hello" instanceof String); // false
console.log(new String("hello") instanceof String); // true

