// Concatenación & Interpolación
let nombre = "Miguel Angel";
let apellido = "Miranda";

/* 
  Concatenación:
    Union de dos o más cadenas de texto en una sola cadena, usando el operador "+".
*/
console.log(nombre + " " + apellido); // Miguel Angel Miranda
console.log("Hola, mi nombre es " + nombre + " " + apellido); // Hola, mi nombre es Miguel Angel Miranda

/* 
  Interpolación:
    Permite insertar valores de variables o expresiones dentro de una cadena de texto, la cual debe ser expresanda con ´´ (comillas invertidas), y usando la sintaxis "${}".
*/
console.log(`Hola, mi nombre es ${nombre} ${apellido}`); // Hola, mi nombre es Miguel Angel Miranda