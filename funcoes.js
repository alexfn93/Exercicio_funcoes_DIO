
function sayMyName(name) {
  console.log('Your name is: ' + name);
}

function quadrado(valor) {
  return valor * valor;
}

function incrementoJuros(valor, percentualJuros) {
   const valorDeAcrescimo = (percentualJuros / 100) * valor;
   return valor + valorDeAcrescimo;
}



sayMyName('Alex');
sayMyName('Fernandes');

incrementoJuros();

console.log(quadrado(10) + quadrado(10));

console.log(incrementoJuros(100, 10));
console.log(incrementoJuros(100, 15));


