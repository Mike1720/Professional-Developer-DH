// Variables y tipos de datos en JavaScript
/* 
  ¿Qué es una variable?
  Es un espacio en memoria que se reserva para almacenar un distintos datos.
*/

// Declaración de variables
/* 
  Reglas para declarar variables:
  - Nombre descriptivo.
  - No pueden tener espacios.
  - usar camelCase, snake_case, Screeming_Case o PascalCase.
  - Usar Screeming Case para constantes.
  - No pueden empezar con números.
  - No pueden tener guiones.
  - No pueden tener caracteres especiales.
  - No pueden ser palabras reservadas.
  - No pueden tener acentos.
*/

let numero; // Declaración de una variable

numero = 10; // Inicialización de una variable
console.log(numero); // Mostrar/imprimir el valor de la variable en la consola output: 10

// Enteros (Integer)
let edad = 25;
console.log(edad); // output: 25

// Flotantes (Float)
let precio = 25.5;
console.log(precio); // output: 25.5

// Cadenas de texto (String)
let nombre = "Juan";
console.log(nombre); // output: Juan

// Booleanos (Boolean) true o false
let verdadero = true;
let falso = false;
console.log(verdadero); // output: true
console.log(falso); // output: false

/* 
  Null vs Undefined
  - Null: indica explícitamente que una variable no tiene valor.
  - Undefined: significa que la variable no ha sido inicializada.
*/

// Undefined
let sinValor;
console.log(sinValor); // output: undefined

// Null
let nulo = null;
console.log(nulo); // output: null