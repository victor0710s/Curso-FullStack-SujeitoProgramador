// Arrays, listas
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva"); // Adiciona um item no final da lista
console.log(lista);
lista.pop(); // Remove o último item da lista
console.log(lista);
console.log(lista.length); // Mostra o tamanho da lista
console.log(lista.reverse()); // Inverte a ordem da lista
console.log(lista.toString()); // Converte a lista para string
console.log(lista.join(" - ")); // Converte a lista para string, separando os itens com o que for colocado entre aspas
console.log(lista[0]); // Mostra o item da posição 0 da lista
console.log(lista.indexOf("morango")); // Mostra a posição do item na lista, se não encontrar retorna -1
lista[2] = "morango"; // Altera o item da posição 3 da lista
console.log(lista);
lista.shift(); // Remove o primeiro item da lista
console.log(lista);
lista.unshift("banana"); // Adiciona um item no início da lista
console.log(lista);
lista.push("abacaxi", "melancia"); // Adiciona mais de um item no final da lista
console.log(lista);
console.log(lista.slice(1, 3)); // Mostra os itens da lista do índice 1 ao 2 (o 3 não é incluído)