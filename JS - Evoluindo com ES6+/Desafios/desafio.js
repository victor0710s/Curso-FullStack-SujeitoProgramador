/*
​Crie uma lista de produtos

1. A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado.
  Exiba essa lista no console quando abrir o index.html.
2. Mostre no console quantos produtos tem nessa lista.
3. Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
4. Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse 
  produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso 
  não exista mostre uma mensagem avisão que o produto não foi encontrado.
5. Remova o segundo item da sua lista.

*/


//parte 1
let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];

//parte 2
console.log("A lista tem " + produtos.length + " produtos.");

//parte 3
produtos.splice(2, 1);
console.log(produtos);

//parte 4
let busca = produtos.find((item) => item === "Computador") // Se não encontrar retorna undefined "falsy" === false

if (busca) {
  console.log(`O produto ${busca} existe.`);
} else {
  console.log(`O produto não foi encontrado.`);
}

//parte 5
produtos.splice(1, 1);
console.log(produtos)

console.log("=======================================")
/*
Crie uma lista de apenas numeros 1,3,5,7,0,9​

1.Ordene essa lista do menor para o maior.
2. Retire o primeiro numero desta lista.
3. Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]
*/

//parte 1 
let numeros = [1, 3, 5, 7, 0, 9];
console.log(numeros.sort());

//parte 2
numeros.shift();
console.log(numeros);

//parte 3
numeros.reverse();
console.log(numeros);

/*
Crie uma string que contenha o dia de hoje, exemplo: let hoje = '20/07/2019';

1.Separe essa data em variaveis dia onde contenha apenas o dia, mes onde contenha apenas o mes, e ano onde contenha apenas o ano.
*/

//parte 1
let dataAtual = '03/10/2025';
let [dia, mes, ano] = dataAtual.split('/')
console.log(dia); 
console.log(mes);
console.log(ano);