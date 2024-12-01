// Parametros en funciones
/* Los parámetros son los valores que se le pasan a una función para que esta pueda ejecutar su código. */

// Declaración de la función
function suma() {
  let resultado = 4 + 5;
  console.log(`El resultado de la suma es: ${resultado}`);
}
// Llamada a la función
suma(); // Output: El resultado de la suma es: 9

// Declaración de la función con parámetros
function suma2(a = 0, b = 0) {
  let resultado = a + b;
  console.log(`El resultado de la suma es: ${resultado}`);
}

// Llamada a la función con argumentos
suma2(5, 5); // Output: El resultado de la suma es: 10
suma2(10 + 25); // Output: El resultado de la suma es: 35
suma2(10); // Output: El resultado de la suma es: 10
suma2() // Output: El resultado de la suma es: 0