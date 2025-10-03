// Desconstruindo arrays e objetos

let pessoa = {
  nome: "Victor",
  sobrenome: "Silva",
  empresa: "VS Tech LTDA",
  cargo: "Desenvolvedor FullStack"
}

// let nome = "nomeAleatorio";

// const { nome:nomeObj, sobrenome, cargo, empresa } = pessoa; // Como se criasse uma variavel para cada propiedade do objeto

// console.log(nomeObj);
// console.log(sobrenome);
// console.log(empresa);
// console.log(cargo);

let nomes = ["Victor", "Lucas", "Matheus"]

// let {0:nome1, 1:nome2} = nomes;

// console.log(nome1, nome2)

let [nome1, nome2, nome3] = nomes;

console.log(nome1, nome2, nome3)