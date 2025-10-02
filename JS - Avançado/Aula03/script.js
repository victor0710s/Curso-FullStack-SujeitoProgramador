// Temporizadores

//* setInterval -> Executa uma função repetidamente, em um intervalo de tempo definido.

function acao() {
  document.write("Executando.... <br>");
}

// setInterval(acao, 1000); // Executa a função acao a cada 1000 milissegundos (1 segundo).

//! Funcao anônima
// var timer = setInterval(() => { // Arrow function
//   document.write("Executando!!! <br>");
// }, 1000);

// clearInterval(timer); // Para a execução do setInterval após ser iniciado.

//* setTimeout -> Executa uma função uma única vez, após um intervalo de tempo definido.
// setTimeout(acao, 3000); // Executa a função acao após 3000 milissegundos (3 segundos).

//! Funcao anônima
setTimeout(() => {
  document.write("Executando com setTimeout!!! <br>");
}, 3000);