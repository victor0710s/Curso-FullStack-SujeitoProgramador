// Operador REST

// function convidados(...nomes) {
//   console.log("Sejam bem vindos!")
//   console.log(nomes)
// }

// convidados("Victor", "Matheus", "Lucas")

function sorteador(...numeros){
  console.log(numeros);

  const numeroGerado = Math.floor(Math.random() * numeros.length);
  console.log("Numero sorteado foi: "  + numeros[numeroGerado]);
}

sorteador(1, 4, 2, 5, 123, 525)