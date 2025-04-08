class Poligono {
  constructor(ancho, alto) {  // [En blanco 1]
    this.alto = alto;
    this.ancho = ancho;
  }
 
  get area() {
    return this.calcArea();  // [En blanco 3]
  }
 
  calcArea() {
    return this.alto * this.ancho;
  }
}
 
const cuadrado = new Poligono(10, 10);  // [En blanco 4]
console.log(cuadrado.area);  // [En blanco 5]
