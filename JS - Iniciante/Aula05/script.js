var area = document.getElementById("area");

function entrar () {
  // Dentro das chaves fica toda a logica da função
  var nome = prompt("Qual é o seu nome?");

  if (nome == "" || nome == null) {
    alert("Ops, algo deu errado!")
    area.innerHTML = "Clique no botão para entrar..."
  }else {
    area.innerHTML = `<h2>Bem vindo, ${nome}!</h2>`

    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair";

    botaoSair.onclick = sair; // Adiciona a função sair ao evento onclick do botão

    area.appendChild(botaoSair); // Adiciona o botão dentro do elemento de ID area
  }
}

function sair () {
  alert("Até mais!");
  area.innerHTML = "Você saiu!"
}


function mediaAluno(nota1, nota2) {
  var media = (nota1 + nota2) / 2;
  
  if (media >= 7) {
    return `Aprovado com média ${media}`;
  } else if (media >= 5) {
    return `Recuperação com média ${media}`;
  } else {
    return `Reprovado com média ${media}`;
  }
}