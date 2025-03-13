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

//funcion para listar amigos

const listaAmigos = () => {
  //obtenemos la lista de amigos
  let lista = getElement("listaAmigos");
  //limpiamos la lista
  lista.innerHTML = "";
  //recorro el arreglo de amigos
  friends.forEach((friend) => {
    //creamos un elemento li para cada amigo
    let li = document.createElement("li");
    //le agregamos el nombre del amigo
    li.textContent = friend;
    //lo agregamos a la lista
    lista.appendChild(li);
  });
};

//funcion para agregar un amigo a la lista
const agregarAmigo = () => {
  //obtenemos el input
  const inputElement = getElement("amigo");
  //validamos el input
  let input = inputValide(inputElement.value);
  if (!input) return;
  //recorremos el arreglo de amigos
  friends.push(input);
  inputElement.value = "";
  clearAndRenderList("listaAmigos", friends);
};
