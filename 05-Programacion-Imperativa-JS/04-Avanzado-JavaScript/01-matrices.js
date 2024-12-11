// Matrices
// Introducción a las matrices en JavaScript
/*
  En JavaScript, las matrices son objetos que nos permiten almacenar varios valores en una sola variable.
  Cada elemento de una matriz tiene un número de índice y podemos acceder a ellos por ese número.
  No existe un tipo de datos especial para las matrices, pero podemos trabajar con ellas como si fueran objetos tipo array.
*/

// ---Crear una matriz
// Opción 1
let matriz1 = [
  // Columna
  // 0  1  2
  [1, 2, 3], // Fila 1
  [4, 5, 6], // Fila 2
  [7, 8, 9]  // Fila 3
];

// Opción 2
let matriz2 = [];

let fila1 = ["a", "b", "c"];
let fila2 = ["d", "e", "f"];

matriz2[0] = fila1;
matriz2[1] = fila2;

// ---Visualizar una matriz
console.table(matriz1);
// console.table(matriz2);

// ---Acceder a un elemento de la matriz
//                [Fila][Columna] 
console.log(matriz1[1][1]); // 5

// ---Modificar un elemento de la matriz
matriz1[0][1] = 15;
console.table(matriz1);

// ---Recorrer una columna de la matriz
for (let i = 0; i < matriz1.length; i++) {
  console.log(matriz1[i][0]); // Output: 1, 4, 7
}

// ---Recorrer una fila de la matriz
for (let i = 0; i < matriz1.length; i++) {
  console.log(matriz1[0][i]); // Output: 1, 15, 3
}

// Recorrer matrices
let matriz3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matriz3.length; i++) { // Recorrer filas
  // Los valores de i van desde 0 hasta 2
  // En la primera iteración i = 0, lo que se encuentra en la posición 0 es [1, 2, 3]
  // En la segunda iteración i = 1, lo que se encuentra en la posición 1 es [4, 5, 6]
  // En la tercera iteración i = 2, lo que se encuentra en la posición 2 es [7, 8, 9]

  for (let j = 0; j < matriz3[i].length; j++) { // Recorrer columnas
    // Los valores de j van desde 0 hasta 2
    // En la primera iteración de i, lo que se encuentra en la posición 0 es 1, 2, 3, estos siendo los valores de j
    // En la segunda iteración de i, lo que se encuentra en la posición 1 es 4, 5, 6, estos siendo los valores de j
    // En la tercera iteración de i, lo que se encuentra en la posición 2 es 7, 8, 9, estos siendo los valores de j
    console.log(matriz3[i][j]); // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9
  }
}

let matriz4 = [
  [1, 2, 3],
  [4, 5, 6]
]

for (let i = 0; i < matriz4.length; i++) {
  for (let j = 0; j < matriz4[i].length; j++) {
    console.log(matriz4[i][j]); // Output: 1, 2, 3, 4, 5, 6
  }
}

// Filtrado de matrices
let matriz5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matriz5.length; i++) {
  for (let j = 0; j < matriz5.length; j++) {
    if (matriz5[i][j] % 2 === 0) {
      console.log(matriz5[i][j]); // Output: 2, 4, 6, 8
    }
  }
}