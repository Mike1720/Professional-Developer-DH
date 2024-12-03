// Operador ternario
// El operador ternario es una forma abreviada de escribir una estructura condicional if-else.

// if-else vs operador ternario
let numero = 10;

// if-else
if (numero > 0) {
  console.log('El número es positivo IE');
} else {
  console.log('El número es negativo IE');
}

// Operador ternario
(numero > 0) ? console.log("El numero es positivo OT") : console.log("El numero es negativo OT");


// Asignación de valor
let edad;
let mensaje;

edad = 15;
if (edad >= 18) {
  mensaje = "Es mayor de edad";
} else {
  mensaje = "Es menor de edad";
}
console.log(mensaje); // Output: Es menor de edad

edad = 20;
mensaje = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(mensaje); // Output: Es mayor de edad


// Mas de una instrucción
let EDAD;
let MENSAJE;
let CATEGORIA;

EDAD = 20;
if (EDAD >= 18) {
  MENSAJE = "Es mayor de edad";
  CATEGORIA = "Adulto";
  console.log("Felicidades, eres mayor de edad"); // Output: Felicidades, eres mayor de edad
} else {
  MENSAJE = "Es menor de edad";
  CATEGORIA = "Menor";
  console.log("Felicidades, eres menor de edad");
}

console.log(MENSAJE); // Output: Es mayor de edad
console.log(CATEGORIA); // Output: Adulto

EDAD = 15;
(EDAD >= 18)
  ? (
    MENSAJE = "ERES MAYOR DE EDAD",
    CATEGORIA = "ADULTO",
    console.log("Felicidades, eres mayor")
  )
  : (
    MENSAJE = "ERES MENOR DE EDAD", // Output: FELICIDADES ERES MENOR DE EDAD
    CATEGORIA = "MENOR",
    console.log("Felicidades, eres menor")
  )

console.log(MENSAJE); // Output: ERES MENOR DE EDAD
console.log(CATEGORIA); // Output: MENOR