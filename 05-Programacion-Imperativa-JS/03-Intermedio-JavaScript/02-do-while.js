// Bucle: do-while
/* 
El bucle do-while es similar al bucle while, pero con una diferencia importante: la condición se evalúa después de ejecutar las instrucciones, 
lo que significa que las instrucciones se ejecutan al menos una vez.
*/

import prompt from 'prompt-sync';
const input = prompt({ sigint: true });

// ciclo while
/* let i = 10;
while (i <= 5) {

  console.log(`Valor de i en el ciclo while: ${i}`);
  i++;
} */

// ciclo do-while
/* let j = 10;
do {

  console.log(`Valor de j en el ciclo do-while: ${j}`);
  j++;

} while (j <= 5); */


// ADIVINA EL NÚMERO SECRETO

let secretNumber = 8;
let userNumber;
let attempts = 0;
let maxAttempts = 3;

console.log("Adivina el número secreto entre 0 y 10");
console.log(`Tienes ${maxAttempts} intentos`);
do {

  userNumber = parseInt(input("Ingresa un número: "));

  if (userNumber < secretNumber) {
    console.log("El número secreto es mayor");
    console.log(`Te quedan ${(maxAttempts - attempts - 1)} intentos`);
  } else if (userNumber > secretNumber) {
    console.log("El número secreto es menor");
    console.log(`Te quedan ${(maxAttempts - attempts - 1)} intentos`);
  } else {
    console.log("¡Felicidades! Adivinaste el número secreto");
  }

  attempts++;
} while (userNumber !== secretNumber && attempts < maxAttempts);

if (attempts === maxAttempts && userNumber !== secretNumber) {
  console.log(`Alcanzaste el número máximo de intentos, el número secreto era: ${secretNumber}`);
}
