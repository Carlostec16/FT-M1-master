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
   if (n < 0) return null;
   if (n === 0) return n;
   if (n === 1) return n;
   return nFibonacci(n - 1) + nFibonacci(n - 2);
   
}

// EJERCICIO 3
function Queue() { //Queue 
   this.queue = [];
}
Queue.prototype.enqueue = function(element) { //enqueue agrega datos
   this.queue.push(element); // push mete un elemento al final del array
};
Queue.prototype.dequeue = function() {
   return this.queue.shift(); //shift remueve el primer elemento
};
Queue.prototype.size = function() {
   return this.queue.length;
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
