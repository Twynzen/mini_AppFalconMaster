(function(){

//Variables las obtenemos del html con el id
var lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");
//Funciones
var agregarTarea = function(){

  alert("Agregar tarea");

};
var comprobarInput = function(){

  alert("Comprobar input");

};
var eliminarTarea = function(){

  alert("Eliminar tarea");

};


//Agregamos los eventos
btnNuevaTarea.addEventListener("click", agregarTarea); //agrega tareaInput


tareaInput.addEventListener("click", comprobarInput);//comprobar input



for (var i = 0; i <= lista.children.length -1; i++) {//Borrando elementos de la lista
  //lista.children.length : 1 se llama la clase lista, 2 los hijos esta clase mencionada 3 lengthdeterminas los elementos li que son

  lista.children[i].addEventListener("click", eliminarTarea);

}

}());
