// Scope & Retornos

// Scope
/* 
  El scope o alcance de una variable es el contexto en el cual la variable existe, y solo se puede acceder
  a ella o modificarla dentro de este contexto. En JavaScript, el alcance de una variable se define por la 
  ubicación de la declaración de la variable.
  El acceso a una variable puede ser de fuera hacia adentro, pero no de adentro hacia afuera.
*/
let variableGlobal = "Soy una variable global"; // -> Variable global

function funcion() {
  let variableLocal = "Soy una variable local"; // -> Variable local
  console.log(variableLocal); // -> Accede a la variable local
  console.log(variableGlobal); // -> Accede a la variable global
}

funcion();

console.log(variableGlobal); // Soy una variable global -> Accede a la variable global
// console.log(variableLocal); // Error: variableLocal is not defined -> No puede acceder a la variable local

// ********************************************

// Retornos
/* 
  El retorno de una función es el valor que devuelve la función al ser llamada. 
  Para retornar un valor, se utiliza la palabra reservada return.
  Toda instrucción que se encuentre después de un return no se ejecutará.
*/
function imprimirSuma(a = 0, b = 0, c = 0) {
  let resultado = a + b + c;
  console.log(resultado); // 6 -> Imprime el resultado de la suma por consola
}

imprimirSuma(1, 2, 3); // Output: 6

function suma(a = 0, b = 0, c = 0) {
  return a + b + c; // -> Retorna el resultado de la suma
}

function promedio() {
  let resultadoSuma = suma(1, 2, 3); // 6 -> Asigna el resultado de la suma a la variable resultado
  let resultadoPromedio = resultadoSuma / 3;
  return resultadoPromedio;
}

let promedioFinal = promedio();
console.log(promedioFinal); // 2 -> Imprime el resultado del promedio por consola