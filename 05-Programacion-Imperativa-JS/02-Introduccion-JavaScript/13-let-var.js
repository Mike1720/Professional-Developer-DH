// let vs var
/* 
  Var:
    Ámbito/Scope de var:
      Las declaraciones con "var" tienen un ambito global o un ambito de función/local.
      El ámbito es global cuando una variable var se declara fuera de una función. 
        Esto significa que cualquier variable declarada con var fuera de una función es visible en todo el script.
      El ámbito es de función/local cuando una variable var se declara dentro de una función.
        Esto significa que solo esta disponible dentro de la función.
    Hoisting de var:
      Las declaraciones de variables var son elevadas al inicio de su contexto de ejecución.
      Esto significa que puede usar la variable antes de declararla, pero su valor será undefined.
    Re-declaración:
      Las variables var pueden ser re-declaradas.
      Si bien, es posible re-declarar una variable var a conciencia, puede ser una fuente de errores
        cuando se declara una variable var más de una vez sin darse cuenta.
*/

{
  // Scope
  {
    // Scope global para este bloque de código
    var y = "Soy variable global";

    function ejemplo1() {
      if (true) {
        // Scope de función/local
        var x = 5;
      }
      console.log(y); // Output: Soy variable global

      console.log(x); // Output: 5
    }

    ejemplo1();

    // console.log(x); // Output: ReferenceError: x is not defined No puede acceder a la variable x
  };

  // Hoisting
  {
    console.log(saludo); // Output: undefined No hay error
    var saludo = "Hola mundo";
  }

  // Re-declaración
  {
    var y = "Primer declaración de variable";
    console.log(y); // Output: Primer declaración de variable
    // Re-declaración de variable
    var y = "Re-declaración de variable";
    console.log(y); // Output: Re-declaración de variable No hay error
  }
};

/* 
  Let:
    Scope de let:
      Las declaraciones con "let" tienen un ambito de bloque.
      Las variables let solo están disponibles dentro del bloque en el que se declaran.
      El ámbito de bloque es el área de código encerrada entre llaves {}.
    Hoisting de let:
      Al igual que var, let también se eleva al inicio de su contexto de ejecución, aunque a diferencia de var, no se inicializarán con undefined.
      Esto significa que no puede usar la variable let antes de declararla, dando como resultado un ReferenceError.
    Re-declaración:
      Las variables let no pueden ser re-declaradas.
      Si intenta re-declarar una variable let en el mismo ámbito, se generará un SyntaxError.
*/

{
  // Scope
  {
    let x = 5;
    console.log(x); // Output: 5

    function ejemplo2() {
      if (true) {
        let x = 17;
        let z = 23;
        console.log(x); // Output: 17
      }
      // console.log(z); // Output: ReferenceError: z is not defined No puede acceder a la variable z declarada dentro del bloque if
      console.log(x); // Output: 5 No puede acceder a la variable x declarada dentro del bloque if
    }

    ejemplo2();
  }

  // Hoisting
  {
    // console.log(hola); // Output: ReferenceError: Cannot access 'hola' before initialization
    let hola = "Hola mundo";
  }

  // Re-declaración
  {
    let declaracion = "Primer declaración de variable";
    console.log(declaracion); // Output: Primer declaración de variable
    // Re-declaración de variable
    // let declaracion = "Re-declaración de variable"; // SyntaxError: Identifier 'declaracion' has already been declared
  }
}