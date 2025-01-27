// *Manipulación de objetos: 
/*
  Crea un objeto llamado ‘persona’ que contenga como propiedades: nombre, edad y ocupación. 
  Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para ver sus valores. 
  Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’. 
  Llama nuevamente a la función creada para visualizar el cambio efectuado.
*/

export let persona = {
  nombre: "Miguel",
  edad: 25,
  ocupacion: "Programador",
}

export function mostrarPropiedades() {
  console.log(persona.nombre);
  console.log(persona.edad);
  console.log(persona.ocupacion);
}
