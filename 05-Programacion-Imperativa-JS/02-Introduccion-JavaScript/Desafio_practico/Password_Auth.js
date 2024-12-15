// Validador de contraseña:
/*
  Crea una variable llamada ‘contraseña’ donde guardes un valor específico.
  Luego, crea una función que reciba por parámetro un dato y utilizando operadores lógicos y condicionales,
  verifica si dicho parámetro coincide con la variable llamada ‘contraseña’.
  La función deberá mostrar por consola si la contraseña recibida es válida o no.
*/

let contraseñaAlmacenada = "Mtk12asf3d$";

export const validatePassword = (password) => {
  let mensaje = !password
    ? "Ingresa una contraseña"
    : password === contraseñaAlmacenada
      ? "Contraseña válida"
      : "Contraseña inválida";

  return mensaje;
};