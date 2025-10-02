// Template Strings

let nome = "João";
let sobrenome = "Silva";
let idade = 30;

//! Sem Template Strings
let mensagem1 = "Meu nome é " + nome + " " + sobrenome + " e tenho " + idade + " anos.";
// console.log(mensagem1);

//! Com Template Strings
let mensagem2 = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`;
console.log(mensagem2);