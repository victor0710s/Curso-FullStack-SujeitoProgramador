import { useState } from 'react';

import Nome from './components/Nome';

// Criando um componente
function App() {
  const [aluno, setAluno] = useState("Victor Silva");

  function handleChangeName(nome) {
    setAluno(nome);
  }

  return( //retornando o JSX
    <div>
      <h1>Compontente</h1><br></br>
      <h2>Olá {aluno}</h2>
      <button onClick={() => handleChangeName("Fulano de Tal")}> {/* Usa a arrow functions para chamar a funcão passando um param */}
        Mudar nome
      </button>
      <br></br>
      <br></br>
      <Nome aluno="Lucas" idade={25}/> {/* Componente com props (propriedades) */}
    </div>
  );
}

export default App;