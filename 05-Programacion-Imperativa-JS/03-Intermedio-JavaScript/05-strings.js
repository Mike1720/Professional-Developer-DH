// Métodos de strings
/* 
  Los strings son un tipo de dato primitivo en JavaScript, y tienen una serie de métodos que podemos utilizar para manipularlos, 
  asi como los arrays.
*/

// Strings y accesos unicos
let saludo = "Hola Mundo";
let letra = saludo[0];
console.log(letra); // H

// .length property
/* 
  Retorna la longitud de un string. La longitud de un string es la cantidad de caracteres que contiene.
*/

// i         0123456789012345
// length    1234567890123456
let serie = "The Walking Dead";
let longitud = serie.length;
console.log(longitud); // 16

let arrayNombres = ["Juan", "Pedro", "Maria"];
// longitud del array
let longitudArray = arrayNombres.length;
console.log(longitudArray); // 3
// longitud del primer nombre del array
let longitudNombreArray = arrayNombres[0].length;
console.log(longitudNombreArray); // 4

// .indexOf(searchValue, fromIndex)
/* 
  Retorna el índice de la primera ocurrencia de una subcadena en un string, o -1 si no se encuentra.
  searchValue: subcadena a buscar.
  fromIndex: índice a partir del cual se inicia la búsqueda en la cadena principal. Si se omite, la búsqueda se realiza desde el principio.
*/

// length    12345678901234567890123456
// i         01234567890123456789012345
let frase = "¡Hola! Estamos programando";
let indice1 = frase.indexOf("Estamos");
let indice2 = frase.indexOf("a");
let indice3 = frase.indexOf("a", 5);
let wrongIndex = frase.indexOf("z");

console.log(indice1); // 7
console.log(indice2); // 4
console.log(indice3); // 10
console.log(wrongIndex); // -1

// .slice(start, end)
/* 
  Retorna una sección de un string, especificando el índice de inicio y el índice de fin.
  start: índice de comienzo de la porción especificada de la cadena.
  end: índice de fin de la cadena. La subcadena incluye los caracteres hasta el caracter indicado por el final, pero sin incluirlo,
    si se omite, se incluyen todos los caracteres desde el inicio hasta el final de la cadena.
*/

// length     123456789012345678
// i          012345678901234567
let frase2 = "Hola! ¿Cómo estás?";
let subString1 = frase2.slice(0, 5); // Hola!
let subString2 = frase2.slice(6, 11); // ¿Cómo -> Se puede considerar como desde indice 6 hasta indice 11-1 (10)
let subString3 = frase2.slice(12); // estás? -> Se puede considerar como desde indice 12 hasta el final de la cadena
let subString4 = frase2.slice(-6); // estás? -> Se puede considerar como desde el final de la cadena -6 posiciones hasta el final de la cadena
let subString5
subString5 = frase2.slice(-5, -2); // stá
subString5 = frase2.slice(frase2.length - 5, frase2.length - 2); // stá

// .trim()
/* 
  Elimina los espacios en blanco al principio y al final de un string.
*/
let nombreCompleto = "   Juan Perez   ";
let nombreCompletoTrim = nombreCompleto.trim();
console.log(nombreCompletoTrim); // Juan Perez

// .split(separator, limit)
/* 
  Separa una cadena de caracteres en subcadenas usando un separador especificado y devuelve un array con las subcadenas.
  separator: cadena que identifica el carácter o caracteres a usar para separar la cadena.
    Si se omite, la cadena completa se convierte en un solo elemento del array.
  limit: número entero que especifica el número de divisiones a realizar. Si se omite, se devuelven todas las divisiones.
*/

let saludo2 = "Hola, cómo estás?";
let palabras1 = saludo2.split(" ", 1);
let palabras2 = saludo2.split(" ");
let palabras3 = saludo2.split(", ",);

console.log(palabras1); // ["Hola,"]
console.log(palabras2); // ["Hola,", "cómo", "estás?"]
console.log(palabras3); // ["Hola", "cómo estás?"]

// .replace(searchValue, replaceValue)
/* 
  Reemplaza texto en una cadena, usando una expresión regular (RegExp) o una cadena.
  searchValue: Una cadena o una expresión regular a buscar.
  replaceValue: Cadena que contiene el texto a reemplazar.
    Cuando searchValue es una RegExp, todas las coincidencias se reemplazan si se usa la bandera global.
    De otra manera, solo se reemplaza la primera coincidencia.
*/

let frase3 = "Me encanta Java Java Java";
let fraseNueva
fraseNueva = frase3.replace("Java", "JavaScript");
console.log(fraseNueva); // Me encanta JavaScript Java Java

let newRegExp = new RegExp("Java", "g");
fraseNueva = frase3.replace(newRegExp, "JavaScript");
console.log(fraseNueva); // Me encanta JavaScript JavaScript JavaScript