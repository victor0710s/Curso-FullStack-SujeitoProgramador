function megaSena(qnt) {
  let numeros = []; // Lista de numeros de 1 a 60
  let sorteados = []; // Lista que recebera os numeros sorteados

  if (qnt <= 9 && qnt >= 6) { // trata o erro de escolha invalida
    for (let i = 1; i <= 60; i ++) { // "imita" o 'in range' do python para que i receba cada valor de 1 ate 60 
      numeros.push(i); // insere cada valor de i dentro da lista de numeros (1 -> 60)
    }

    let j = 0;
    while (j != qnt) {
      let numero = Math.floor(Math.random() * numeros.length); // retorna um indice aleatorio referente a um valor presente na lista numeros
      if (!sorteados.includes(numeros[numero])) { // verifica se o numero nao está presente na lista de sorteados
        sorteados.push(numeros[numero]); // se nao estiver, inclui o numero na lista
        j++; // incrementa ate que j tenha o mesmo valor de qnt e consequentemente o length da lista de sorteados
      }
    }
    console.log(sorteados); // imprime a lista de sorteados

  } else {
    return console.log(numeros + "Numero invalido, escolha de 6 até 9");
  }
}

megaSena(9);