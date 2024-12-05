// Arrays
/* 
  Colección ordenada de elementos, lo que quiere decir que, se pueden almacenar diferentes tipos de datos en una sola variable.
*/

// Intro a arrays

// Crear un array
let edades = [24, 37, 18, 59, 7];
let nombres = ['Juan', 'Pedro', 'María', 'Ana', 'Luis'];
let booleanos = [true, false, false, true];
let mix = [24, 'Juan', true];

// Acceder a un elemento de un array
console.log(edades[0]); // Output: 24
console.log(nombres[2]); // Output: María
console.log(booleanos[3]); // Output: true

// Recorrer un array
for (let i = 0; i < edades.length; i++) {
  console.log(edades[i]);
}

// Algoritmos clasicos con arrays

let numeros = [10, 20, 30, 40, 50];

// Modificar cada elemento de un array
for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 2;
  console.log(numeros[i]); // Output: 20, 40, 60, 80, 100
}

numeros[3] = 100;
console.log(numeros); // Output: [20, 40, 60, 100, 100]

// Agregar elementos a un array
let notas = [8, 4, 10, 6];
notas[notas.length] = 9;
console.log(notas); // Output: [8, 4, 10, 6, 9]

// Extraer elementos de un array a una variable
let names = ["Pedro", "Adriana", "Fabian"];
let nombreSeleccionado = names[0];
console.log(nombreSeleccionado); // Output: Pedro
// Destructuring
let [name1, name2, name3] = names;
console.log(name1); // Output: Pedro

// Extraer todos los elementos de un array
let acumulador = 0;
for (let i = 0; i < numeros.length; i++) {
  acumulador += numeros[i];
}
console.log(acumulador); // Output: 320
let promedio = acumulador / numeros.length;
console.log(promedio); // Output: 64

// Encontrar el mayor y menor elemento de un array
let nums = [10, 48, 7, 52, 19];
let maxNum = nums[0];
let minNum = nums[0];

for (let i = 0; i < nums.length; i++) {

  if (nums[i] < minNum) {
    minNum = nums[i];
  }

  if (nums[i] > maxNum) {
    maxNum = nums[i];
  }

}
console.log(maxNum); // Output: 52
console.log(minNum); // Output: 7