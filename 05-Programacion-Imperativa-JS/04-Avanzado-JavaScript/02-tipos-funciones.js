// Tipos de funciones

// Funciones declarativas (Function declaration)
/* 
  Pueden ser llamadas antes de que la función sea declarada, esto se debe a que el interprete de JavaScript
  lee todo el código y luego ejecuta las funciones. (Hoisting)
*/
{

  let resultado2 = suma(1, 2);
  console.log(resultado2); // Output: 3

  function suma(a, b) {
    return a + b;
  }

  let resultado1 = suma(10, 251);
  console.log(resultado1); // Output: 261
}

// Funciones de expresión (Function expression)
/* 
  Son aquellas que se asignan a una variable o se utilizan como parte de una expresión, por lo que no pueden ser llamadas 
  antes de ser declaradas.
*/
{

  // let resultado2 = resta(1, 2); // Cannot access 'resta' before initialization

  const resta = function (a, b) {
    return a - b;
  }

  let resultado1 = resta(10, 2);
  console.log(resultado1); // Output: 8
}

// Funciones flecha (Arrow functions)
/* 
  Son una forma más corta de escribir funciones, no tienen su propio contexto this, arguments, super o new.target.
  No pueden ser llamadas antes de ser declaradas.
*/
{
  const multiplicar = (a, b) => a * b;
  const dividir = (a, b) => {
    if (b === 0) {
      return 'No se puede dividir por 0';
    }
    return a / b;
  }

  let resultado1 = multiplicar(10, 2);
  let resultado2 = dividir(10, 2);
  console.log(resultado1); // Output: 20
  console.log(resultado2); // Output: 5
}
{
  let objeto = {
    nombre: 'Juan',
    saludar: function () {
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }
  }
  objeto.saludar(); // Output: Hola, mi nombre es Juan
  objeto.nombre = 'Pedro';
  objeto.saludar(); // Output: Hola, mi nombre es Pedro

  // let objeto2 = {
  //   nombre: 'Juan',
  //   saludar: () => {
  //     console.log(`Hola, mi nombre es ${this.nombre}`);
  //   }
  // }
  // objeto2.saludar(); // Error: Cannot read properties of undefined (reading 'nombre')

}