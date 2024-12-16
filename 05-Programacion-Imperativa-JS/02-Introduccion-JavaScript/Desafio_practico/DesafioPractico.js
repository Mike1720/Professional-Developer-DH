// Desafio práctico
import { validatePassword } from "./Password_Auth.js";
import { calculateIMC } from "./IMC_Calculator.js";
import { ageEvaluator } from "./Age_Evaluator.js";
import { currencyConverter } from "./Currency_Convertor.js";
import { customMessages } from "./Custom_Messages.js";

// Validar contraseña
let result1 = validatePassword("assaknke");
let result2 = validatePassword("Mtk12asf3d$");
let result3 = validatePassword();

console.log(result1); // Contraseña inválida
console.log(result2); // Contraseña válida
console.log(result3); // Ingresa una contraseña

// Calcular IMC
let imcResult1 = calculateIMC(1.75, 70);
let imcResult2 = calculateIMC(1.75, 85);
let imcResult3 = calculateIMC(1.75, 100);
let imcResult4 = calculateIMC(1.75, 50);

console.log(imcResult1); // Tu IMC es 22.86 y tu composición corporal es Normal
console.log(imcResult2); // Tu IMC es 27.76 y tu composición corporal es Sobrepeso
console.log(imcResult3); // Tu IMC es 32.65 y tu composición corporal es Obesidad
console.log(imcResult4); // Tu IMC es 16.33 y tu composición corporal es Bajo peso

// Evaluar rango de edad
let ageResult1 = ageEvaluator(1);
let ageResult2 = ageEvaluator(6);
let ageResult3 = ageEvaluator(13);
let ageResult4 = ageEvaluator(25);
let ageResult5 = ageEvaluator(45);
let ageResult6 = ageEvaluator(65);
let ageResult7 = ageEvaluator(85);

console.log(ageResult1); // Bebé
console.log(ageResult2); // Niño
console.log(ageResult3); // Adolescente
console.log(ageResult4); // Adulto joven
console.log(ageResult5); // Adulto de mediana edad
console.log(ageResult6); // Adulto mayor
console.log(ageResult7); // Adulto de la tercera edad

// Conversor de monedas
let currencyResult1 = currencyConverter(100, "MXN", "MXN"); // Expected output: 100
let currencyResult2 = currencyConverter(100, "USD", "MXN"); // Expected output: 2012
let currencyResult3 = currencyConverter(100, "USD", "EUR"); // Expected output: 105
let currencyResult4 = currencyConverter(100, "MXN", "USD"); // Expected output: 4.96
let currencyResult5 = currencyConverter(100, "MXN", "EUR"); // Expected output: 4.15
let currencyResult6 = currencyConverter(100, "EUR", "USD"); // Expected output: 105
let currencyResult7 = currencyConverter(100, "EUR", "MXN"); // Expected output: 2412

console.log(currencyResult1);
console.log(currencyResult2);
console.log(currencyResult3);
console.log(currencyResult4);
console.log(currencyResult5);
console.log(currencyResult6);
console.log(currencyResult7);

// Mensajes personalizados
let message1 = customMessages("John", "morning");
let message2 = customMessages("Jane", "afternoon");

console.log(message1); // Good morning, John!
console.log(message2); // Good afternoon, Jane!