//* Desafio práctico
import { unirArrays } from "./Concat_Array.js";
import { eliminarPrimerElemento } from "./Eliminar_Primer_Elemento.js";
import { transformarTexto } from "./Transformar_Texto.js";
import { mostrarPropiedades, persona } from "./Manipulacion_Objetos.js";

// Concatenar arrays
let result1 = unirArrays([1, 2, 3], [4, 5, 6]); // Expected output: [1,2,3,4,5,6]
let result2 = unirArrays(["a", "b", "c"], ["d", "e", "f"]); // Expected output: ["a","b","c","d","e","f"]

// Eliminar primer elemento
let result3 = eliminarPrimerElemento([1, 2, 3]); // Expected output: 1
let result4 = eliminarPrimerElemento(["a", "b", "c"]); // Expected output: "a"

// Transformar texto
let result5 = transformarTexto("Hola Mundo"); // Expected output: "HOLA MUNDO" "hola mundo"
let result6 = transformarTexto("Curso de JavaScript"); // Expected output: "CURSO DE JAVASCRIPT" "curso de javascript"

// Manipulación de objetos
mostrarPropiedades(); // Expected output: Miguel 25 Programador
persona.ocupacion = "Desarrollador";
persona.habilidad = "JavaScript";
mostrarPropiedades(); // Expected output: Miguel 25 Desarrollador JavaScript

persona.ubicacion = {
  codigoPostal: 12345,
  ciudad: "Ciudad de México",
  calle: "Av. Insurgentes Sur",
  numero: 123
}

console.log(persona);
