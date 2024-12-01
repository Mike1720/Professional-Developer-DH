// Operadores lógicos
// Nos permiten combinar valores booleanos y su resultado también es un valor booleano

// VARIABLES
let nota1 = 7;
let nota2 = 9;
let resultado;

// Operador AND (&&)
// Devuelve true si ambos operandos son verdaderos y false en cualquier otro caso
resultado = nota1 >= 6 && nota2 >= 6;
console.log(resultado); // true

nota2 = 5;
resultado = nota1 >= 6 && nota2 >= 6;
console.log(resultado); // false

// Operador OR (||)
// Devuelve true si AL MENOS UNO de los operandos es verdadero
//               true         false
resultado = nota1 >= 6 || nota2 >= 6;
console.log(resultado); // true

//              false         false
resultado = nota1 >= 9 || nota2 >= 6;
console.log(resultado); // false

// Operador NOT (!)
// Devuelve true si el operando es falso y false si el operando es verdadero
//         false * true = false
resultado = !(nota1 >= 6);