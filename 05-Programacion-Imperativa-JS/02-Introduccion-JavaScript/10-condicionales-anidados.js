// Condicionales anidados

/* 
  Indicar si un dia es caluroso, si la temperatura es mayor a 25 grados o el clima es soleado.
*/

let clima = "";
let temperatura = 0;

// And (&&) Las 2 condiciones deben ser verdaderas
// Condiciones anidadas
{
  clima = "soleado";
  temperatura = 25;

  if (clima === "soleado" && temperatura >= 25) { // true && true
    console.log("El dia es caluroso");
  } else {
    console.log("El dia no es caluroso");
  }

  // Otra forma de hacerlo #No recomendada
  if (clima === "soleado") { // true
    if (temperatura >= 25) { // true
      console.log("El dia es caluroso");
    } else {
      console.log("El dia no es caluroso");
    }
  } else {
    console.log("El dia no es caluroso");
  }
  /* 
    Interpretacion:
    Si clima es "soleado", avanzará a evaluar si la temperatura es mayor o igual a 25 grados, 
      si es verdadero se imprimirá "El dia es caluroso", de lo contrario será "El dia no es caluroso".
    Si el clima es diferente de "soleado", el mensaje será "El dia no es caluroso".
  */
}

// Or (||) Al menos una de las condiciones debe ser verdadera
// Condiciones multiples
{
  clima = "nublado";
  temperatura = 26;

  if (clima === "soleado" || temperatura >= 25) {
    console.log("El dia es caluroso");
  } else {
    console.log("El dia no es caluroso");
  }

  // Otra forma #No recomendada
  if (clima === "soleado") { // false
    console.log("El dia es caluroso");
  } else if (temperatura >= 25) { // true
    console.log("El dia es caluroso");
  } else {
    console.log("El dia no es caluroso");
  }

  /* 
    Interpretacion:
    Si clima es "soleado", se imprimirá "El dia es caluroso", de lo contrario se evaluará si la temperatura es mayor o igual a 25 grados, 
    si es verdadero se imprimirá "El dia es caluroso", de lo contrario será "El dia no es caluroso".
  */
}

// Calcular la calificación de un alumno
let puntuacion = 95;

/* 
  En este caso no es ncesario utilizar rangos de valores, ya que se evaluará si la puntuación es mayor o igual 
  a un valor específico, comenzando por el valor más alto.
*/
if (puntuacion >= 90) {
  console.log("A");
} else if (puntuacion >= 80) {
  console.log("B");
} else if (puntuacion >= 70) {
  console.log("C");
} else {
  console.log("D");
}

/* 
  En este caso si es necesario evaluar rangos de valores, ya que la evaluación comienza desde el valor más bajo, lo que provoca un problema
  en el programa.
  Por ejemplo, si un alumno tiene una puntuacion de 70, el programa imprimirá "Promedio 6" y no "Promedio 7", lo cual es incorrecto.
*/
if (puntuacion >= 60 && puntuacion < 70) {
  console.log("Promedio 6");
} else if (puntuacion >= 70 && puntuacion < 80) {
  console.log("Promedio 7");
} else if (puntuacion >= 80 && puntuacion < 90) {
  console.log("Promedio 8");
} else if (puntuacion >= 90 && puntuacion < 100) {
  console.log("Promedio 9");
} else if (puntuacion === 100) {
  console.log("Promedio 10");
} else {
  console.log("Promedio reprobatorio");
}

// Buena practica VALIDAR los datos antes de realizar la evaluación
let nota = 8;

if (nota >= 0 && nota <= 10){ // Validar la nota
  if (nota >= 7 && nota <= 10){
    console.log("Aprobado");
  } else {
    console.log("Reprobado");
  }
  
} else{ // Manejo de errores
  console.log("La nota no es válida");
}