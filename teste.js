
function escrevaNome(nome) {
    return nome ;
}



function verificarIdade(idade) {
   if(idade < 18) {
    console.log(escrevaNome('Alex') + ' você é menor de idade e não pode dirigir!')
   } else {
    console.log(escrevaNome('Alex') + ', parabéns! Você é maior de idade e já pode dirigir!')
   }
}

verificarIdade(18);