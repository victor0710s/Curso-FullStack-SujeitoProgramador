//* Criando Objetos

// let pessoa = {
//   nome: "Victor",
//   idade: 22,
//   altura: 1.74,
//   cargo: "Programador Web",
// };

// console.log(pessoa);

//* Acessando propriedades do objeto
// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa.altura);
// console.log(pessoa.cargo);

let usuarios = [
  {nome: "Victor", cargo: "Programador", status: "Ativo"}, // 0
  {nome: "Ana", cargo: "Designer", status: "Inativo"}, // 1
  {nome: "Júlia", cargo: "Gerente de Projetos", status: "Ativo"}, // 2
  {nome: "Pedro", cargo: "Assistente", status: "Inativo"}, // 3
]

console.log(usuarios);

// Acessando as propriedades do objeto dentro do array
console.log(usuarios[0].nome);
console.log(usuarios[1].cargo);