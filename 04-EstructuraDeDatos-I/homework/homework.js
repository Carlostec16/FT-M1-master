'use strict';

// EJERCICIO 1
function nFactorial(n) {
   // 4¡ = 4 * 3 * 2 * 1
   if (n < 0) {return 0}; // si es negativo manda 0
   if (n === 0) {return 1}; // si es 0 el factorial es 1
   if (n === 1) {return 1}; // si es 1 el factorial es 1
   return n * nFactorial(n-1) // se ejecuta el factorial
}

// EJERCICIO 2
function nFibonacci(n) {
   // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
   return n <= 1 ? n : nFibonacci(n - 1) + nFibonacci(n - 2);
   
}

// EJERCICIO 3
function Queue() {}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
