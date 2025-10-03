// operador Spread

// let primeiros = [1, 2, 3];

// let numeros = [...primeiros, 4, 5, 6]; // desempacota o que está em primeiros e insere dentro de numeros
// console.log(numeros);

// let pessoa = {
//   nome: "Victor",
//   sobrenome: "Silva",
//   empresa: "VS Tech LTDA",
//   cargo: "Desenvolvedor FullStack"
// }

// let novaPessoa = {
//   ...pessoa,
//   status: "Ativo",
//   cidade: "Campo Grande"
// }

// console.log(novaPessoa);

function novoUsuario(info) {
  let data = {
    ...info,
    status: "Ativo",
    inicio: "20/10/2024",
    codigo: "1212123"
  }
  console.log(data);
}

novoUsuario({nome: "Victor", sobrenome: "Silva", cargo: "Desenvolvedor FullStack"})