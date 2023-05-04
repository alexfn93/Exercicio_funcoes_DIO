const valorProduto = 100;


function aplicarDesconto(desconto) {
  if (desconto === 1) {                         
    console.log(valorProduto - valorProduto * 0.1); // retorna 90
  } else if (desconto === 2) {
    console.log(valorProduto - valorProduto * 0.15); // retorna 85
  } else if (desconto === 3) {
    console.log(valorProduto); // retorna 100
  } else if (desconto === 4){
    console.log(valorProduto + valorProduto * 0.1); // retorna 110
  } else {
    console.log('Digite uma forma de pagamento valida, por favor!');
  }
}

aplicarDesconto(6);
  