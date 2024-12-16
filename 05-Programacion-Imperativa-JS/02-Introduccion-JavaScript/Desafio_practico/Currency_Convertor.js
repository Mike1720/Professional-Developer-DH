// *Conversor de Monedas:
/*
  Crea una función que convierta una cantidad de dinero de una moneda a otra.
  Usa variables para almacenar tasas de cambio y condicionales para manejar diferentes tipos de monedas.
*/


export const currencyConverter = (amount, currency, newCurrency) => {

  if (currency === newCurrency) return amount;

  let newAmount = 0;
  switch (newCurrency) {
    case "MXN":
      switch (currency) {
        case "USD":
          newAmount = amount * 20.12;
          break;
        case "EUR":
          newAmount = amount * 24.12;
          break;
      }
      break;

    case "USD":
      switch (currency) {
        case "MXN":
          newAmount = amount / 20.12;
          break;
        case "EUR":
          newAmount = amount * 1.05;
          break;
      }
      break;

    case "EUR":
      switch (currency) {
        case "MXN":
          newAmount = amount / 24.12;
          break;
        case "USD":
          newAmount = amount * 1.05;
          break;
      }
      break;
  }
  return Math.round(newAmount * 100) / 100;
}


// {
//   let amount = 100;
//   let currency = "USD";
//   let newCurrency = "MXN";
//   let rate = 20.235;

//   if (currency === "USD" && newCurrency === "MXN") {
//     return amount * rate;
//   } else if (currency === "MXN" && newCurrency === "USD") {
//     return amount / rate;
//   } else {
//     return "No se puede realizar la conversión";
//   }
// }

