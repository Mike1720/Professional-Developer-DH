// Operadores de comparación
// Variables
let resultado;

// Mayor que (>)
resultado = 100 > 20; // El numero 100 si es mayor que 20
console.log(resultado); // true

// Menor que (<)
resultado = 100 < 20; // El numero 100 no es menor que 20
console.log(resultado); // false

// Mayor o igual que (>=)
resultado = 104 >= 100; // El numero 104 es mayor que 100 pero no es igual (se cumple una parte de la condición)
console.log(resultado); // true
resultado = 100 >= 100; // El numero 100 es igual a 100
console.log(resultado); // true
resultado = 100 >= 104; // El numero 100 no es mayor ni igual a 104
console.log(resultado); // false

// Menor o igual que (<=)
resultado = 95 <= 100; // El numero 95 es menor que 100 pero no es igual (se cumple una parte de la condición)
console.log(resultado); // true
resultado = 100 <= 100; // El numero 100 es igual a 100
console.log(resultado); // true
resultado = 100 <= 95; // El numero 100 no es menor ni igual a 95
console.log(resultado); // false

// Igual que (==)
// La igualdad compara el valor sin importar el tipo de dato
resultado = 100 == 100; // El numero 100 es igual a 100
console.log(resultado); // true
resultado = 100 == 100.0; // El numero 100 es igual a 100.0
console.log(resultado); // true
resultado = 100 == "100"; // El numero 100 es igual a "100"
console.log(resultado); // true
resultado = 100 == "100.0"; // El numero 100 equivale lo mismo a "100.0"
console.log(resultado); // true
resultado = 100 == 100.1; // El numero 100 no es igual a 100.1
console.log(resultado); // false

// Igualdad estricta (===)
// La igualdad estricta compara el valor y el tipo de dato
resultado = 100 === 100; // El numero 100 es exactamente igual a 100
console.log(resultado); // true
resultado = 100 === 100.0; // El numero 100 es exactamente igual a 100.0
console.log(resultado); // true
resultado = 100 === "100"; // El numero 100 no es igual a "100"
console.log(resultado); // false
resultado = 100 === "100.0"; // El numero 100 no es igual a "100.0"
console.log(resultado); // false
resultado = 100 === 100.1; // El numero 100 no es igual a 100.1
console.log(resultado); // false

// Diferente que (!=)
resultado = 100 != 100; // El numero 100 no es diferente a 100
console.log(resultado); // false
resultado = 100 != 100.0; // El numero 100 no es diferente a 100.0
console.log(resultado); // false
resultado = 100 != "100"; // El numero 100 es diferente a "100"
console.log(resultado); // false
resultado = 100 != "100.0"; // El numero 100 es diferente a "100.0"
console.log(resultado); // false
resultado = 100 != 100.1; // El numero 100 si es diferente a 100.1
console.log(resultado); // true

// Diferente estricto (!==)
resultado = 100 !== 100; // El numero 100 no es diferente a 100
console.log(resultado); // false
resultado = 100 !== 100.0; // El numero 100 no es diferente a 100.0
console.log(resultado); // false
resultado = 100 !== "100"; // El numero 100 si es diferente a "100"
console.log(resultado); // true
resultado = 100 !== "100.0"; // El numero 100 si es diferente a "100.0"
console.log(resultado); // true
resultado = 100 !== 100.1; // El numero 100 si es diferente a 100.1
console.log(resultado); // true