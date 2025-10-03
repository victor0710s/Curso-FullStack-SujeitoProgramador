//! Operacoes em um array PT1

//* map => percorre toda um array

// let lista = ["Victor", "Matheus", "Lucas"];

// lista.map((item, index) => {
//   console.log(`Passando pelo item: ${item} - Sua posicao é ${index}`);
// })

//* reduce => busca reduzir um array
// let numeros = [1, 2, 3, 4];

// let total = numeros.reduce((acumulador, numero, indice, original) => {
//   console.log(`${acumulador} - total até o momento`)
//   console.log(`${numero} - valor atual`);
  // console.log(`${indice} - indice atual`);
  // console.log(`${original} - array original`);
//   console.log('-------------------------------')

//   return acumulador += numero;
// })
// console.log(total)

//! Operacoes em um array PT2

//* find => busca algo no array
// let listagem = [1, 2, "victor", 3, "lucas"];

// let busca = listagem.find((item) => {
//   // condição
//   if (item === "victor") {
//     return console.log("Item encontrado");
//   }
  
// })

// console.log(busca);

//* filter

let palavras = ["victor", "ana", "Joao", "Jose", "Itatiaiuçu"]

let resultado = palavras.filter((item) => {
  return item.length <= 4; // Retorna tudo que encontrar de acordo com a condicao
})

console.log(resultado);