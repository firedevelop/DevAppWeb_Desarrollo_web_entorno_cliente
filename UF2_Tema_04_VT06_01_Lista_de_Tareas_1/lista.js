 class Tarea {
  constructor(id, descripcion) {
    this.id = id;
    this.descripcion = descripcion;
    this.completada = false;
  }
 }

const listaDeTareas = [
  new Tarea(1, "Hacer la compra"),
  new Tarea(2, "Estudiar para el examen"),
  new Tarea(3, "Llamar al médico"),
];


 function mostrarTareas() {
  const listaDeTareasElement = document.getElementById("tareas-lista");
  listaDeTareasElement.innerHTML = ''; // Limpia la lista antes de mostrar las tareas nuevamente

	for (let i = 0; i < listaDeTareas.length; i++) {
	  const tarea = listaDeTareas[i];
	  const tareaElement = document.createElement("li");
	  tareaElement.innerHTML = 
		'Tarea ' + tarea.id + ': ' + tarea.descripcion + ' (Completada: ' + tarea.completada + ') ' +
		'<button onclick="marcarTareaComoCompletada(' + tarea.id + ')">Marcar como completada</button>' +
		'<button onclick="eliminarTarea(' + tarea.id + ')">Eliminar</button>';
	//agrega un nodo hijo a un elemento padre en el DOM.
	  listaDeTareasElement.appendChild(tareaElement);
	}
 }


 function agregarTarea() {
	var descripcion = document.getElementById('descripcion-tarea').value;
	var id = listaDeTareas.length + 1;
	const nuevaTarea = new Tarea(id, descripcion);
	listaDeTareas.push(nuevaTarea);
	mostrarTareas();
 }

 function marcarTareaComoCompletada(id) {
	 //devuelve el primer elemento de un array que cumple con una condición. Si no encuentra ninguno, devuelve undefined.
	const tarea = listaDeTareas.find((t) => t.id === id);
	if (tarea) {
		tarea.completada = true;
	}
	mostrarTareas();
 }

 function eliminarTarea(id) {
	 //devuelve el índice del primer elemento en un array que cumple con una condición dada. Si no encuentra ninguno, devuelve -1.
	const index = listaDeTareas.findIndex((t) => t.id === id);
	if (index !== -1) {
		//eliminar una tarea específica de la lista.
		//index: es la posición del elemento que queremos eliminar.
		//1: indica que solo se eliminará un elemento en esa posición.
		listaDeTareas.splice(index, 1); 
	}
	mostrarTareas();
 }
