/* 
Abaixo de 17 - Muito abaixo do peso
Entre 17 e 18.49 - Abaixo do peso
Entre 18.5 e 24.99 - Peso normal
Entre 25 e 29.99 - Acima do peso
Entre 30 e 34.99 - Obesidade I
Entre 35 e 39.99 - Obesidade II (severa)

Formula = peso / (altura * altura)
*/

var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
  event.preventDefault(); // Evita o envio do formulário e o recarregamento da página, restaurando os valores digitados.

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value; 

  imc = peso / (altura ** 2); // Calcula o IMC usando a fórmula correta.
  imc = imc.toFixed(2); // Limita o IMC a duas casas decimais.

  resultado = document.getElementById("resultado");

    if (imc < 17) {
    resultado.innerHTML = `<br>Seu IMC é ${imc}. <br><br> Você está muito abaixo do peso.`;
  } else if (imc >= 17 && imc <= 18.49) {
    resultado.innerHTML = `<br>Seu IMC é ${imc}. <br><br> Você está abaixo do peso.`;
  } else if (imc >= 18.5 && imc <= 24.99) {
    resultado.innerHTML = `<br>Seu IMC é ${imc}. <br><br> Você está com o peso normal.`;
  } else if (imc >= 25 && imc <= 29.99) {
    resultado.innerHTML = `<br>Seu IMC é ${imc}. <br><br> Você está acima do peso.`;
  } else if (imc >= 30 && imc <= 34.99) {
    resultado.innerHTML = `<br>Seu IMC é ${imc}. <br><br> Você está com Obesidade I.`;
  } else if (imc >= 35 && imc <= 39.99) {
    resultado.innerHTML = `<br>Seu IMC é ${imc}. <br><br> Você está com Obesidade II (severa).`;
  } else {
    resultado.innerHTML = `<br>Seu IMC é ${imc}. <br><br> Você está com Obesidade III (mórbida).`;
  }

  document.getElementById("form").reset(); // Limpa os campos do formulário após o cálculo.

}