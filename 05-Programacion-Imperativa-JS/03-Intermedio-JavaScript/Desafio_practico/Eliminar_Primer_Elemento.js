// *Eliminar primer elemento:
/* 
  Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro y elimine el primer elemento. 
  La función debe devolver el elemento eliminado.
*/

/**
 * 
 * @param {Array} arr Arreglo del cual se eliminará el primer elemento
 * @returns El primer elemento eliminado
 */
export const eliminarPrimerElemento = (arr) => {
  let elementoEliminado = arr.shift();
  return elementoEliminado;
}