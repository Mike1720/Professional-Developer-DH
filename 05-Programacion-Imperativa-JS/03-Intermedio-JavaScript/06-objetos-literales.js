// Objetos literales
/* 
  Un objeto literal es una colección de pares de clave-valor separados por comas y encerrados entre llaves {}.
  Los valores pueden ser de cualquier tipo, por ejemplo, números, cadenas, booleanos, funciones, arreglos e incluso otros objetos literales.
*/

// Creación de un objeto literal
let persona = {
  nombre: "Miguel",
  apellido: "Miranda",
  edad: 25,
  coloresFavoritos: ["azul", "verde", "rojo"],
  saludar: function () {
    return (`Hola, cómo estás? Soy ${this.nombre}`);
  }
}

// Acceder a las propiedades de un objeto
console.log(persona.nombre); // Miguel
console.log(persona.coloresFavoritos); // [ 'azul', 'verde', 'rojo' ]
console.log(persona.coloresFavoritos[0]); // azul

// Agregar propiedades a un objeto
persona.deporteFavorito = "fútbol";
console.log(persona);
/* 
  {
    nombre: 'Miguel',
    apellido: 'Miranda',
    edad: 25,
    coloresFavoritos: [ 'azul', 'verde', 'rojo' ],
    deporteFavorito: 'fútbol',
    saludar: [Function: saludar]
  }
*/

// Modificar propiedades de un objeto
// persona.edad = 26;
// console.log(persona);
/* 
  {
    nombre: 'Miguel',
    apellido: 'Miranda',
    edad: 26,
    coloresFavoritos: [ 'azul', 'verde', 'rojo' ],
    deporteFavorito: 'fútbol',
    saludar: [Function: saludar]
  }
*/

// Eliminar propiedades de un objeto
// delete persona.deporteFavorito;
// console.log(persona);
/*
  {
    nombre: 'Miguel',
    apellido: 'Miranda',
    edad: 25,
    coloresFavoritos: [ 'azul', 'verde', 'rojo' ],
    saludar: [Function: saludar]
  }
*/

// Acceder a un método de un objeto

let accion
accion = persona.saludar();
console.log(accion); // Hola, cómo estás? Soy Miguel

persona.nombre = "Juan";
accion = persona.saludar();
console.log(accion); // Hola, cómo estás? Soy Juan

// Desestructuración de objetos
let { nombre, edad } = persona;
console.log(nombre); // Juan
console.log(edad); // 25