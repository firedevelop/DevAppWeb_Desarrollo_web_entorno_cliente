class Estudiante {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
        this.asignaturas = [];
    }

    get correoElectronico() {
        return this.correo + "@ilernaonline.com";
    }

    muestraAsignaturas() {
        return this.asignaturas;
    }

    matricular(asignatura) {
        this.asignaturas.push(asignatura);
        return "Lista de asignaturas: " + this.asignaturas;
    }

    aprobar(asignatura) {
        var posicion = this.asignaturas.indexOf(asignatura);
        this.asignaturas.splice(posicion, 1);
        return "Lista de asignaturas: " + this.asignaturas;
    }

    limpiarAsignaturas() {
        this.asignaturas = [];
        return "Se han vaciado las asignaturas";
    }
}

var t = new Estudiante("tamara", "pruebaejercicio@ilerna.com");
console.log(t);
console.log(t.nombre);
console.log(t.correoElectronico);
console.log(t.matricular("Cliente"));
console.log(t.muestraAsignaturas());
console.log(t.matricular("Servidor"));
console.log(t.aprobar("Cliente"));
console.log(t.muestraAsignaturas());
console.log(t.limpiarAsignaturas());
console.log(t.muestraAsignaturas());