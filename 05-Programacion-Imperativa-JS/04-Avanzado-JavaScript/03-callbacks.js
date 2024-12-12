// Callbacks
/* 
  Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de un proceso asíncrono.
*/

// Ejemplo de callback
// Función que recorre un array y ejecuta una función callback por cada elemento
/**
 * 
 * @param {Array} array 
 * @param {Function} cb 
 */
function procesarArray(array, cb) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let result = cb(array[i]);
    if (result) {
      newArray.push(result);
    }
  }
  return newArray;
}

// Función callback que devuelve el elemento multiplicado por 2
/**
 * 
 * @param {Number} element 
 * @returns element multiplicado por 2
 */
function multiplicadoPorDos(element) {
  return element * 2;
}

// Función callback que devuelve el elemento si es par
/**
 * 
 * @param {Number} element 
 * @returns element si es par
 */
function esPar(element) {
  if (element % 2 === 0) {
    return element;
  }
}

// Función callback que muetra por consola el elemento
function mostrarPorConsola(element) {
  console.log(element);
}


let arr = [1, 2, 3, 4, 5];

let resultMultiplicacion = procesarArray(arr, multiplicadoPorDos);
let resultPar = procesarArray(arr, esPar);


console.log(resultMultiplicacion); // [2, 4, 6, 8, 10]
console.log(resultPar); // [2, 4]

procesarArray(arr, mostrarPorConsola);
