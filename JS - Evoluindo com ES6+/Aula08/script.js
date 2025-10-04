let listElement = document.querySelector("#app");

let posts = [];

function nutriApp() {
  
  // fetch
  fetch("https://sujeitoprogramador.com/rn-api/?api=posts") // Tenta buscar os dados na URL, se conseguir prossegue para o .then()
  .then((r) => r.json())
  .then((json) => {
    posts = json; // Insere no array o que recebemos do json

    posts.map((item) => {
      let liElement = document.createElement("li");
      let titleElement = document.createElement("strong");
      let imgElement = document.createElement("img");
      let descElement = document.createElement("a");

      let titleText = document.createTextNode(item.titulo);
      titleElement.appendChild(titleText);
      liElement.appendChild(titleElement);
      
      imgElement.src = item.capa;
      liElement.appendChild(imgElement);

      let descText = document.createTextNode(item.subtitulo);
      descElement.appendChild(descText);
      liElement.appendChild(descElement);

      listElement.appendChild(liElement);
    })
  }).catch(() => {console.log("Erro desconhecido")});
}

nutriApp();