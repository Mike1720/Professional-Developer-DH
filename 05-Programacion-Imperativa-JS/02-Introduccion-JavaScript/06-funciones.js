// Funciones
/* Las funciones son bloques de código que se pueden reutilizar en cualquier parte de nuestro programa. */

// Instruccion a realizar (saludar 4 veces)
console.log('Hola mundo');

// 1er paso: Declaración o definición de una funcion
/* 
  function nombreFuncion(parametro1, parametro2, ..., parametroN) {
    Instrucciones a realizar
  }
  *function -> palabra reservada para definir una funcion
  *nombreFuncion -> nombre descriptivo de la función
  *parametro1, parametro2, ..., parametroN -> parametros que recibe la funcion
  *Instrucciones a realizar -> bloque de código que se ejecutará al llamar la función
*/

function saludar() {
  console.log('Hola mundo');
  console.log('Hola mundo');
  console.log('Hola mundo');
  console.log('Hola mundo');
}

// 2do paso: Llamada a la funcion
saludar(); // Hola mundo x4 veces por consola
saludar();