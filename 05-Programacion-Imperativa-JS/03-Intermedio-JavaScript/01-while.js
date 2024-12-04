import  prompt  from "prompt-sync";
const input = prompt({sigint: true});

// Bucle: while

/* 
  El bucle while nos permite ejecutar un bloque de código mientras una condición sea verdadera.
  La condición se evalúa antes de ejecutar el bloque de código.
  El bucle while se utiliza cuando no se sabe cuántas veces se va a repetir el bloque de código.
*/

// Ejemplo 1 Mostrar los números del 1 al 10 por consola
{
  // Contador. Debe ser inicializado antes del bucle
  // let i = 1;

  //    Condición que en algún momento será falsa
  // while (i <= 5) {
  //   // Bloque de código
  //   console.log(`Valor actual del contador: ${i}`);

  //   // Incremento del contador
  //   i++;

  //   console.log(`Incremento del contador: ${i}`);
  // }
}



// Ejemplo 2
let control = "si";
let nota;
let sumatoriaNotas = 0;
let cantidadNotas = 0;

console.log("Bienvenido al sistema de registro de notas");

while ( control === "si"){
  console.log("Ingresa una nota a sumar");
  nota = parseInt(input("Nota: "));

  sumatoriaNotas += nota;
  cantidadNotas++;

  control = input("¿Desea ingresar otra nota? si/no: ");
}

let promedio = sumatoriaNotas / cantidadNotas;
console.log(`El promedio de las notas ingresadas es: ${promedio.toFixed(2)}`);
