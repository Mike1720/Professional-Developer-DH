// *Unir dos arrays
/* 
  Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo. 
  La función debe devolver el nuevo array.Para esto, averiguar qué hace el método .concat()
*/

/**
 * 
 * @param {Array} arr1 Main array
 * @param {Array} arr2 Array to join
 * @returns New array with arr1 and arr2
 */
export const unirArrays = (arr1,arr2) => {
  return arr1.concat(arr2);
}