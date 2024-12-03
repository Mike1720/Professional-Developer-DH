// Estructura de control Switch
/* 
  Switch es una estructura de control de flujo de datos que permite evaluar una expresión y compararla con diferentes valores.
  Si la expresión coincide con alguno de los valores, se ejecuta el bloque de código correspondiente.
  Si no coincide con ninguno de los valores, se ejecuta el bloque de código por defecto.
*/

// Diferencias entre Switch y If
/* 
  La principal diferencia entre Switch y If es que Switch compara la expresión con valores específicos,
  mientras que If compara la expresión con condiciones.
*/

let diaSemana = 3;
let mensaje = "";

// Estructura if
{
  if (diaSemana === 1) {
    mensaje = "Lunes";
  } else if (diaSemana === 2) {
    mensaje = "Martes";
  } else if (diaSemana === 3) {
    mensaje = "Miércoles";
  } else if (diaSemana === 4) {
    mensaje = "Jueves";
  } else if (diaSemana === 5) {
    mensaje = "Viernes";
  } else if (diaSemana === 6) {
    mensaje = "Sábado";
  } else if (diaSemana === 7) {
    mensaje = "Domingo";
  } else {
    mensaje = "Día no válido";
  }
  console.log(mensaje); // Output: Miércoles
}

// Estructura switch
{
  diaSemana = 6
  switch (diaSemana) {
    case 1:
      mensaje = "Lunes";
      break;
    case 2:
      mensaje = "Martes";
      break;
    case 3:
      mensaje = "Miércoles";
      break;
    case 4:
      mensaje = "Jueves";
      break;
    case 5:
      mensaje = "Viernes";
      break;
    case 6:
      mensaje = "Sábado";
      break;
    case 7:
      mensaje = "Domingo";
      break;
    default:
      mensaje = "Día no válido";
  }

  /* 
    La estructura Switch es más legible y fácil de entender que la estructura If cuando se tienen muchas condiciones.
    Además, Switch es más eficiente que If cuando se tienen muchas condiciones, ya que no necesita evaluar todas las condiciones.
    Switch hace uso de la sentencia break para salir del bloque de código una vez que se ha encontrado una coincidencia.
    En caso de omitir la sentencia break, se ejecutarán todos los bloques de código que se encuentren debajo del bloque que coincide.
  */

  console.log(mensaje); // Output: Sábado
}

let fruta = "pera";
let mensajeFruta = "";

switch (fruta) {
  case "manzana":
    mensajeFruta = "La manzana es una fruta muy rica";
    break;
  case "platano":
    mensajeFruta = "El platano es una fruta muy rica";
    break
  case "uva":
    mensajeFruta = "La uva es una fruta muy rica";
    break;
  default:
    mensajeFruta = "Fruta no encontrada";
    break;
}

console.log(mensajeFruta); // Output: Fruta no encontrada