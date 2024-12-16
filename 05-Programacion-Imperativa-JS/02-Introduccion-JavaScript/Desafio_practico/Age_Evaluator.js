// *Evaluador de Rango de Edad:
/*
  Escribe una función que determine en qué categoría de edad se encuentra una persona.
  Utiliza las estructuras que consideres necesarias para clasificar a las personas en rangos como
  niño, adolescente, adulto joven, adulto, etc., según su edad.
*/

export const ageEvaluator = (age) => {
  let message = "";
  if (age > 80) {
    message = "Adulto de la tercera edad";
  } else if (age > 60) {
    message = "Adulto mayor";
  } else if (age > 40) {
    message = "Adulto de mediana edad";
  } else if (age > 20) {
    message = "Adulto joven";
  } else if (age > 12) {
    message = "Adolescente";
  } else if (age > 5) {
    message = "Niño";
  } else {
    message = "Bebé";
  }
  return message;
}