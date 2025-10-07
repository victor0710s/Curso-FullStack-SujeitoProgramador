import { useEffect, useState } from 'react';

// Criando um componente
function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Estudar React',
    'Pagar contas'
  ]);

  // Carregar as tarefas salvas no localStorage
  useEffect( () => {
    const tarefasStorage = localStorage.getItem('@tarefa');

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  // Toda vez que o array de tarefas mudar, ele vai disparar esse useEffect
  useEffect( () => {
    localStorage.setItem('@tarefa', JSON.stringify(tarefas));
  }, [tarefas]);

  function handleRegister(e) {
    e.preventDefault(); // Previnir o comportamento padrão do formulário

    setTarefas([...tarefas, input]); 
    setInput(''); // Limpar o input
  }

  return( //retornando o JSX
    <div>
      <h1>Cadastro de usuario</h1>

      <form onSubmit={handleRegister}>
        <label>Nome: </label><br />
        <input 
          placeholder='Digite uma tarefa'
          value={input} // Valor recebido no input
          onChange={ (e) => setInput(e.target.value)}  // Função disparada quando o valor do input mudar
        /><br />

        <button type='submit'>Registrar</button>
      </form> 

      <br /><br />

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))} 
      </ul>
    </div>
  );
}

export default App;