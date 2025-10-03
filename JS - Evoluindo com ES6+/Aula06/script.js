// Arrow functions ou funcoes anonimas
/*
  () => {}
  () -> local por onde a funcao recebe os argumentos/parametros
  => -> responsavel pelo prefixo "arrow"
  {} -> delimita o bloco logico da funcao
*/ 

function somar(a, b) {
  let total = a + b
  return console.log(total)
}

somar(10, 20)

let subtrair = (a, b) => {
  let total = a - b;
  console.log(total);
}

subtrair(30, 20)

let numeros = [1, 2, 3, 4]

numeros.map((numero) => {
  console.log(numero);
})