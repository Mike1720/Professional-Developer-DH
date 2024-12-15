// *Calculadora de Índice de Masa Corporal (IMC):
/*
  Crea una función que calcule el IMC utilizando los parámetros de peso y altura.
  Usa operadores aritméticos y condicionales para evaluar diferentes rangos de IMC (bajo peso, peso normal, sobrepeso, etc.).
*/

export const calculateIMC = (height, weight) => {
  let imc = weight / (height ** 2)
  imc = Math.round(imc * 100) / 100;
  let bodyComposition = "";

  if (imc > 30) {
    bodyComposition = "Obesidad";
  } else if (imc >= 25) {
    bodyComposition = "Sobrepeso";
  } else if (imc >= 18.5) {
    bodyComposition = "Normal";
  } else {
    bodyComposition = "Bajo peso";
  }

  return "Tu IMC es " + imc + " y tu composición corporal es " + bodyComposition;
}
