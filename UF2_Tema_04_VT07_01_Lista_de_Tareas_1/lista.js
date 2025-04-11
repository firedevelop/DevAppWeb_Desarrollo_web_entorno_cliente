class Tarea {
    constructor(id, descripcion, fechaVencimiento) {
        this.id = id;
        this.descripcion = descripcion;
        this.completada = false;
        this.fechaVencimiento = fechaVencimiento;
    }
}

const listaDeTareas = [
    new Tarea(1, "Hacer la compra", new Date()),
    new Tarea(2, "Estudiar para el examen", new Date()),
    new Tarea(3, "Llamar al médico", new Date()),
];

function mostrarTareas() {
    const listaDeTareasElement = document.getElementById("tareas-lista");
    listaDeTareasElement.innerHTML = ''; // Limpia la lista antes de mostrar las tareas nuevamente
    const hoy = new Date().setHours(0, 0, 0, 0); // Fecha actual a la medianoche

    for (let i = 0; i < listaDeTareas.length; i++) {
        const tarea = listaDeTareas[i];
        const tareaElement = document.createElement("li");

        if (!isNaN(tarea.fechaVencimiento)) {
            const fechaVencimiento = new Date(tarea.fechaVencimiento).setHours(0, 0, 0, 0); // Fecha de vencimiento a la medianoche
            const diferenciaEnMilisegundos = fechaVencimiento - hoy;
            const diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)); // Diferencia en días
            let color = '';
            if (diferenciaEnDias <= 0) {
                color = 'red';
            } else if (diferenciaEnDias <= 3) {
                color = 'orange';
            } else if (diferenciaEnDias <= 7) {
                color = 'yellow';
            }

            tareaElement.innerHTML = `
                <span>Tarea ${tarea.id}: ${tarea.descripcion} (Completada: ${tarea.completada ? 'Sí' : 'No'}) Fecha de vencimiento: ${tarea.fechaVencimiento.toLocaleDateString()}</span>
                <div>
                    <button onclick="marcarTareaComoCompletada(${tarea.id})">Marcar como completada</button>
                    <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
                </div>`;
            tareaElement.style.backgroundColor = color;
            listaDeTareasElement.appendChild(tareaElement);
        } else {
            console.error("Fecha de vencimiento inválida para la tarea: ", tarea);
        }
    }
}

function agregarTarea() {
    var descripcion = document.getElementById('descripcion-tarea').value;
    var fechaVencimientoInput = document.getElementById('fecha-vencimiento').value;
    var fechaVencimiento = new Date(fechaVencimientoInput);
    var id = listaDeTareas.length + 1;
    const nuevaTarea = new Tarea(id, descripcion, fechaVencimiento);
    listaDeTareas.push(nuevaTarea);
    mostrarTareas();
}

function marcarTareaComoCompletada(id) {
    const tarea = listaDeTareas.find((t) => t.id === id);
    if (tarea) {
        tarea.completada = true;
        mostrarTareas();
    }
}

function eliminarTarea(id) {
    const index = listaDeTareas.findIndex((t) => t.id === id);
    if (index !== -1) {
        const confirmacion = confirm("¿Seguro que deseas eliminar esta tarea?");
        if (confirmacion) {
            listaDeTareas.splice(index, 1);
            mostrarTareas();
        }
    }
}

function mostrarTareasCompletadas() {
    const listaDeTareasElement = document.getElementById("tareas-lista");
    listaDeTareasElement.innerHTML = '';
    const hoy = new Date().setHours(0, 0, 0, 0); // Fecha actual a la medianoche
    const tareasCompletadas = listaDeTareas.filter(tarea => tarea.completada);
    for (let i = 0; i < tareasCompletadas.length; i++) {
        const tarea = tareasCompletadas[i];
        const tareaElement = document.createElement("li");

        if (!isNaN(tarea.fechaVencimiento)) {
            const fechaVencimiento = new Date(tarea.fechaVencimiento).setHours(0, 0, 0, 0); // Fecha de vencimiento a la medianoche
            const diferenciaEnMilisegundos = fechaVencimiento - hoy;
            const diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)); // Diferencia en días
            let color = '';
            if (diferenciaEnDias <= 0) {
                color = 'red';
            } else if (diferenciaEnDias <= 3) {
                color = 'orange';
            } else if (diferenciaEnDias <= 7) {
                color = 'yellow';
            }

            tareaElement.innerHTML = `
                <span>Tarea ${tarea.id}: ${tarea.descripcion} (Completada: ${tarea.completada ? 'Sí' : 'No'}) Fecha de vencimiento: ${tarea.fechaVencimiento.toLocaleDateString()}</span>
                <div>
                    <button onclick="marcarTareaComoCompletada(${tarea.id})">Marcar como completada</button>
                    <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
                </div>`;
            tareaElement.style.backgroundColor = color;
            listaDeTareasElement.appendChild(tareaElement);
        } else {
            console.error("Fecha de vencimiento inválida para la tarea: ", tarea);
        }
    }
}

function mostrarTareasNoCompletadas() {
    const listaDeTareasElement = document.getElementById("tareas-lista");
    listaDeTareasElement.innerHTML = '';
    const hoy = new Date().setHours(0, 0, 0, 0); // Fecha actual a la medianoche
    const tareasPendientes = listaDeTareas.filter(tarea => !tarea.completada);
    for (let i = 0; i < tareasPendientes.length; i++) {
        const tarea = tareasPendientes[i];
        const tareaElement = document.createElement("li");
        if (!isNaN(tarea.fechaVencimiento)) {
            const fechaVencimiento = new Date(tarea.fechaVencimiento).setHours(0, 0, 0, 0); // Fecha de vencimiento a la medianoche
            const diferenciaEnMilisegundos = fechaVencimiento - hoy;
            const diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)); // Diferencia en días
            let color = '';
            if (diferenciaEnDias <= 0) {
                color = 'red';
            } else if (diferenciaEnDias <= 3) {
                color = 'orange';
            } else if (diferenciaEnDias <= 7) {
                color = 'yellow';
            }

            tareaElement.innerHTML = `
                <span>Tarea ${tarea.id}: ${tarea.descripcion} (Completada: ${tarea.completada ? 'Sí' : 'No'}) Fecha de vencimiento: ${tarea.fechaVencimiento.toLocaleDateString()}</span>
                <div>
                    <button onclick="marcarTareaComoCompletada(${tarea.id})">Marcar como completada</button>
                    <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
                </div>`;
            tareaElement.style.backgroundColor = color;
            listaDeTareasElement.appendChild(tareaElement);
        } else {
            console.error("Fecha de vencimiento inválida para la tarea: ", tarea);
        }
    }
}


// Initial display of tasks when the page loads
mostrarTareas();