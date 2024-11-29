// Operadores aritméticos
/* 
  Estos operadores son los que se utilizan para realizar operaciones matemáticas.
  Solo se pueden utilizar con números enteros y números reales.
*/

// Variables
let resultado;
let numero = 10;

// Resta
{
  resultado = 10 - 5;
  console.log(`El resultado es: ${resultado}`); // El resultado es: 5
}

// Multiplicación
{
  resultado = 10 * numero;
  console.log(`El resultado es: ${resultado}`); // El resultado es: 100
}

// División (Cociente)
{
  resultado = 100 / 2;
  console.log(`El resultado es: ${resultado}`); // El resultado es: 50
}

// Suma
{
  // Suma
  resultado = 10 + 10;
  console.log(`El resultado es: ${resultado}`); // El resultado es: 20

  // Concatenación
  resultado = 20 + 10 + "10";
  console.log(`El resultado es: ${resultado}`); // El resultado es: 3010
}

// Módulo (Residuo de la división)
{
  resultado = 10 % 3;
  console.log(`El resultado es: ${resultado}`); // El resultado es: 1

  resultado = 10 % 2;
  console.log(`El resultado es: ${resultado}`); // El resultado es: 0
}