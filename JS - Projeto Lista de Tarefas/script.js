let listElement = document.querySelector('#app ul'); // Seleciona o elemento <ul> dentro do elemento com id "app"
let inputElement = document.querySelector('#app input'); 
let buttonElement = document.querySelector('#app button');

let tarefas = []; // Array para armazenar as tarefas

function renderTarefas() {
  listElement.innerHTML = ''; // Limpa a lista antes de renderizar novamente

  tarefas.map((todo) => { // Itera sobre cada tarefa no array
    let liElement = document.createElement('li'); // Cria um novo elemento <li>
    let tarefaText = document.createTextNode(todo); // Cria um nó de texto com o conteúdo da tarefa

    let linkElement = document.createElement('a'); // Cria um elemento <a> para o link de exclusão
    linkElement.setAttribute('href', '#'); // Define o atributo href do link

    let linkText = document.createTextNode(' Excluir'); // Cria um nó de texto para o link
    linkElement.appendChild(linkText); // Adiciona o nó de texto ao link

    let posicao = tarefas.indexOf(todo); // Obtém a posição da tarefa no array de acordo com o índice do item clicado

    linkElement.setAttribute('onclick', `deletarTarefa(${posicao})`); // Define o atributo onclick do link para chamar a função deletarTarefa

    liElement.appendChild(tarefaText); // Adiciona o nó de texto ao elemento <li>
    liElement.appendChild(linkElement); // Adiciona o link de exclusão ao elemento <li>
    listElement.appendChild(liElement); // Adiciona o elemento <li> à lista <ul>
  })
}


function adicionarTarefa() {
  if (inputElement.value === '') {
    alert('Digite alguma tarefa')
    return false;
  } else {
    let novaTarefa = inputElement.value; // Obtém o valor do input
    tarefas.push(novaTarefa); // Adiciona a nova tarefa ao array
    inputElement.value = ''; // Limpa o campo de input
    renderTarefas(); // Chama a função para renderizar a lista atualizada
  }
}

buttonElement.onclick = adicionarTarefa; // Adiciona um evento de clique ao botão para chamar a função adicionarTarefa

function deletarTarefa(posicao) {
  tarefas.splice(posicao, 1); // Remove a tarefa do array com base na posição
  renderTarefas(); // Chama a função para renderizar a lista atualizada
  alert('Tarefa excluída com sucesso!');
}