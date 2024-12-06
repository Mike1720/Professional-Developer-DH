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

// --------------------------------------------
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

// --------------------------------------------
// Métodos de arrays
let colores = ['rojo', 'verde', 'azul'];


// .push(items)
/* 
  Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
  items: Elementos que se agregarán al final del array.
*/
colores.push("amarillo"); // retorna 4
console.log(colores); // Output: ['rojo', 'verde', 'azul', 'amarillo']
colores.push("naranja", "violeta"); // retorna 6
console.log(colores); // Output: ['rojo', 'verde', 'azul', 'amarillo', 'naranja', 'violeta']


// .pop()
/* 
  Elimina el último elemento de un array y lo devuelve.
  Si el array está vacío, .pop() devuelve undefined.
*/
let ultimoColorEliminado = colores.pop();
console.log(ultimoColorEliminado); // Output: violeta
console.log(colores); // Output: ['rojo', 'verde', 'azul', 'amarillo', 'naranja']


// .shift()
/* 
  Elimina el primer elemento de un array y lo devuelve.
  Si el array está vacío, .shift() devuelve undefined.
*/
let Nombres = ['Juan', 'Pedro', 'María', 'Ana', 'Luis'];
let primerNombreEliminado = Nombres.shift();
console.log(primerNombreEliminado); // Output: Juan
console.log(Nombres); // Output: ['Pedro', 'María', 'Ana', 'Luis']


// .unshift(items)
/* 
  Agrega uno o más elementos al inicio de un array y devuelve la nueva longitud del array.
  items: Elementos que se agregarán al inicio del array.
*/
let marcas = ['Toyota', 'Nissan', 'Chevrolet'];
marcas.unshift('Ford'); // retorna 4
console.log(marcas); // Output: ['Ford', 'Toyota', 'Nissan', 'Chevrolet']
marcas.unshift('Honda', 'Mazda'); // retorna 6
console.log(marcas); // Output: ['Honda', 'Mazda', 'Ford', 'Toyota', 'Nissan', 'Chevrolet']


// .join(separator)
/* 
  Une todos los elementos de un array en una cadena de texto.
  Si no se especifica un separador, se usará una coma.
*/
let dias = ["Lunes", "Martes", "Miércoles"];
let diasUnidos = dias.join(); // retorna "Lunes,Martes,Miércoles"
console.log(diasUnidos); // Output: Lunes,Martes,Miércoles
let diasUnidosConGuion = dias.join('-'); // retorna "Lunes-Martes-Miércoles"
console.log(diasUnidosConGuion); // Output: Lunes-Martes-Miércoles
let diasUnidosConEspacio = dias.join(' '); // retorna "Lunes Martes Miércoles"
console.log(diasUnidosConEspacio); // Output: Lunes Martes Miércoles


// .indexOf(searchElement, fromIndex)
/* 
  Retorna el indice de la primer ocurrencia de un elemento en un array.
  Si el elemento no se encuentra en el array, devuelve -1.
  searchElement: Elemento a buscar en el array.
  fromIndex: Índice a partir del cual se comienza a buscar el elemento.
*/
//               0         1       2        3
let frutas = ['manzana', 'pera', 'uva', 'naranja'];
let searchedFruit1 = frutas.indexOf("pera"); // retorna 1
let searchedFruit2 = frutas.indexOf("uva", 2); // retorna 2
let notFound1 = frutas.indexOf("sandía"); // retorna -1
let notFound2 = frutas.indexOf("naran", 3); // retorna -1


// .lastIndexOf(searchElement, fromIndex)
/* 
  Retorna el indice de la última ocurrencia de un elemento en un array.
  Si el elemento no se encuentra en el array, devuelve -1.
  searchElement: Elemento a buscar en el array.
  fromIndex: Índice a partir del cual se comienza a buscar el elemento empezando desde el final del array.
*/

//                 0            1                  2                 3            4            5
let clubs = ['Barcelona', 'Real Madrid', 'Atlético de Madrid', 'Real Madrid', 'Sevilla', 'Real Madrid'];
let searchedClub1 = clubs.lastIndexOf("Real Madrid", 2); // retorna 1
let searchedClub2 = clubs.lastIndexOf("Real Madrid"); // retorna 5
let clubNotFound1 = clubs.lastIndexOf("Valencia"); // retorna -1


// .includes(searchElement, fromIndex)
/* 
  Determina si un array incluye un determinado elemento, devuelve true o false.
  searchElement: Elemento a buscar en el array.
  fromIndex: Índice a partir del cual se comienza a buscar el elemento.
*/

//                0          1      2        3         4        5        6
let frutas2 = ['manzana', 'pera', 'uva', 'naranja', 'sandía', 'kiwi', 'mango'];
let hasApple = frutas2.includes("manzana", 0); // retorna true
let hasOrange = frutas2.includes("naranja", 4); // retorna false
let hasWatermelon = frutas2.includes("sandía"); // retorna true
let hasBanana = frutas2.includes("banana"); // retorna false
