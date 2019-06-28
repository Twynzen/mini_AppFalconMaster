(function(){

//Variables las obtenemos del html con el id
var lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");
//Funciones
var agregarTarea = function(){

  var tarea = tareaInput.value,
  nuevaTarea = document.createElement("li"),
  enlace = document.createElement("a")
  contenido = document.createTextNode(tarea);

  if(tarea === ""){
    tareaInput.setAttribute("placeholder","Agrega una tarea valida");
    tareaInput.className = "error";
    return false;
  }
  //agregamos contenido al enlace
  enlace.appendChild(contenido);
  //le establcemos un atributo href
  enlace.setAttribute("href", "#");
  //Agregamos el enlace (a) a la nueva tarea (li)
  nuevaTarea.appendChild(enlace);
  lista.appendChild(nuevaTarea);

  tareaInput.value = "";

  for (var i = 0; i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener("click", function(){
      this.parentNode.removeChild(this);
    });
  }


  console.log("Agregar tarea");

};
var comprobarInput = function(){
  tareaInput.className = "";
  tareaInput.setAttribute("placeholder", "Agrega tu tarea");

  console.log("Comprobar input");

};
var eliminarTarea = function(){

  this.parentNode.removeChild(this);

  console.log("Eliminar tarea");

};


//Agregamos los eventos
btnNuevaTarea.addEventListener("click", agregarTarea); //agrega tareaInput


tareaInput.addEventListener("click", comprobarInput);//comprobar input



for (var i = 0; i <= lista.children.length -1; i++) {//Borrando elementos de la lista
  //lista.children.length : 1 se llama la clase lista, 2 los hijos esta clase mencionada 3 lengthdeterminas los elementos li que son

  lista.children[i].addEventListener("click", eliminarTarea);

}

}());
