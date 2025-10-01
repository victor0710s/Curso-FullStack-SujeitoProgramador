var data = new Date(); // Cria um objeto Date com a data e hora atuais

console.log(data);
console.log(data.getHours()); // Retorna a hora (0-23)
console.log(data.getMinutes()); // Retorna os minutos (0-59)
console.log(data.getSeconds()); // Retorna os segundos (0-59)
console.log('------------------');

var dataNova = new Date("April 20, 2026");

console.log(dataNova);
console.log(Date.parse(dataNova) + ' milissegundos'); // 
console.log(dataNova.getDay()); // Retorna o dia da semana (0-6) 0 = Domingo
console.log(dataNova.getMonth()); // Retorna o mês (0-11) 0 = Janeiro
console.log(dataNova.getFullYear()); // Retorna o ano com 4 dígitos

// DD/MM/YYYY
var dataFormatada =  `${dataNova.getDate()}/${dataNova.getMonth() + 1}/${dataNova.getFullYear()}`;
console.log(dataFormatada);

var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
console.log(dias[dataNova.getDay()]); // Retorna o dia da semana por extenso