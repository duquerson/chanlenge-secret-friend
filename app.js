// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
"use strict";
let friends = [];
//funcion para obtener un elemento por su id
const getElement = (id) => document.getElementById(id);

//funcion para validar el input
const inputValide = (input) => {
  //uso de una libreria externa para evitar ataques xss
  let cleanInput = DOMPurify.sanitize(input).trim();
  if (!cleanInput) alert("Debes ingresar un nombre");
  return cleanInput;
};

//funcion para limpiar y renderizar elementos de la lista

const clearAndRenderList = (listName, friends) => {
  //obtenemos el id de la lista
  const list = getElement(listName);
  //limpiamos la lista
  list.innerHTML = "";
  //recorremos el arreglo de items
  if (friends.length > 0) {
    friends.forEach((friend) => {
      let li = document.createElement("li");
      li.textContent = friend;
      //agregamos el elemento li a la lista
      list.append(li);
    });
  }
};
