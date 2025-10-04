/*
​1) Verificador de Número Negativo, Positivo ou Zero: Escreva uma função que recebe um número como parâmetro e verifica se é negativo, 
positivo ou igual a zero. A função deve retornar uma string indicando o resultado.
*/
function numeroNPZ(numero) {
  if (parseFloat(numero) > 0) {
    return console.log("O numero é positivo");
  } else if (parseFloat(numero) == 0) {
    return console.log("O numero é igual a zero");
  } else {
    return console.log("O numero é negativo")
  }
}

// numeroNPZ(2);

/*
2) Desafio da Verificação de Elemento em um Array: Crie uma função que deve esperar receber 2 parâmetros, 
primeiro deve ser um array de números e o segundo parâmetro é um numero que deseja 
conferir se esse numero existe dentro do array e com isso você deve mostrar o resultado se esse numero que colocou existe 
dentro do seu array de números. 
*/

function contem(lista, value) {
  return console.log(lista.includes(value));
}

let lista = [1, 3, 4, 2, 7];
// contem(lista, 6);

/*
3) Com base no array abaixo o desafio como você pode percorrer e encontrar o produto com Preço Igual a R$20 
e o resultado deve mostrar apenas o produto que tem o preço igual a R$20:
*/

const products = [
  { name: 'Maça', price: 2.5 },
  { name: 'Coca cola', price: 8 },
  { name: 'Guarana', price: 5 },
  { name: 'Chocolate', price: 20 }
];

let produto = products.find((item) => item.price == 20);
let baratos = products.filter((item) => item.price < 8);

console.log(produto ? produto.name : "produto não encontrado");
console.log(baratos);

