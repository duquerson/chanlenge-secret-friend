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
