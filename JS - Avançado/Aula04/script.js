/* 
Diferença entre var, let e const

var -> escopo global ou de função
let -> escopo de bloco
const -> escopo de bloco e valor constante

*/

//! Exemplo com var
// var nome = "Victor";
// console.log(nome);

// if (nome === "Victor") {
//   var curso = "Programador Web";
//   console.log(curso);
// }

// console.log(curso); // Funciona, pois var é acessível em todo o codigo

//! Exemplo com let
// var nome = "Victor";
// console.log(nome);

// if (nome === "Victor") {
//   let cargo = "CEO - VS Techlogies";
//   console.log(cargo);
// }

// console.log(cargo); // Erro, pois let é acessível apenas no bloco onde foi declarado

// let bonus = true;

// if (bonus) {
//   let salario = 4000 + 600;
//   console.log(salario);
// }

// if (bonus) {
//   var salario = 4000 + 600;
//   console.log(salario);
// }

// console.log(salario); // Erro, pois let é acessível apenas no bloco onde foi declarado

//! Exemplo com const
const cargo = "Programador Web";
console.log(cargo);
// cargo = "CEO - VS Techlogies"; // Erro, pois const não pode ser reatribuída

