// Switch = Estrutura de Decisão
// Utilizado para comparar valores diferentes
// Cada valor é chamado de case (caso)
// O valor que for igual ao valor da variável, o código dentro do case será executado
// O break serve para sair do switch, ou seja, não executar os próximos cases
// O default é executado quando nenhum case é igual ao valor da variável

function pedir() {
  var valor = prompt("Digite um valor de 1 a 4");

  switch (Number(valor)) {
    case 1:
      alert("Você pediu um suco");
      break;
    case 2:
      alert("Você pediu uma agua gelada");
      break;
    case 3:
      alert("Você pediu um sorvete");
      break;
    case 4:
      alert("Você chamou o garçom");
      break;
    default:
      alert("Escolha uma opção válida de 1 a 4");
      break;
  }
}

//! Condicionais e comparação
// var valor = 30;

// if (valor == 30) {
//   console.log("O valor é igual a 30");
// } else {
//   console.log("O valor é diferente de 30");
// }

// var valor2 = "30";

// if (valor2 === 30) {
//   console.log("O valor é igual a 30 e do mesmo tipo");
// } else {
//   console.log("O valor é diferente de 30 ou de tipos diferentes");
// }

//! Condicionais e comparação pt2
// var nome = "João";
// var userOnline = true;

// if (nome === "Lucas") {
//   console.log("O nome é Lucas");
// } 

// if (userOnline === true) {
//   console.log("O usuário está online");
// } else {
//   console.log("O usuário está offline");
// }

//! Operadores ternários
var num = 10;

num === 10 ? console.log("O número é 10") : console.log("O número não é 10"); // if -> ? : else -> :