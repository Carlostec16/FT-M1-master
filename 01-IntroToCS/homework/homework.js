'use strict';

function BinarioADecimal(num) {
   var resultadoDecimal = 0;
   var inver = num.split("");
   let longi = inver.length
   for (let i = 0; i < inver.length; i++) {
      resultadoDecimal = resultadoDecimal + (inver[i] * (2 ** (--longi)));     
   }
   return resultadoDecimal
}

function DecimalABinario(num) {
   var resultadoBinario = [];
   var proceso = num;
   while (proceso > 0) {
      let div = Math.floor(proceso / 2);
      let residuo = parseInt(proceso%2);
      resultadoBinario.push(residuo);
      proceso = div
   }
   return (resultadoBinario.reverse().join(''))
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
