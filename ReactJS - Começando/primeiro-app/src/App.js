import { useState } from 'react';

// Criando um componente
function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});

  function handleRegister(e) {
    e.preventDefault(); // Previnir o comportamento padrão do formulário

    alert("Usuario cadastrado com sucesso!");
    setUser({
      nome: nome,
      email: email,
      idade: idade
    });
  }

  return( //retornando o JSX
    <div>
      <h1>Cadastro de usuario</h1>

      <form onSubmit={handleRegister}>
        <label>Nome: </label><br />
        <input 
          placeholder='Digite seu nome'
          value={nome} // Valor recebido no input
          onChange={ (e) => setNome(e.target.value)}  // Função disparada quando o valor do input mudar
        /><br />

        <label>Email: </label><br />
        <input 
          placeholder='Digite seu email' 
          value={email} // Valor recebido no input
          onChange={ (e) => setEmail(e.target.value)}
        /><br />

        <label>Idade: </label><br />
        <input
          placeholder='Digite sua idade' 
          value={idade} // Valor recebido no input
          onChange={ (e) => setIdade(e.target.value)}
        /><br />

        <button type='submit'>Registrar</button>
      </form> 

      <br /><br />

      <div>
        <span>Bem vindo: {user.nome}</span><br />
        <span>Email: {user.email}</span><br />
        <span>Idade: {user.idade}</span><br />
      </div>
    </div>
  );
}

export default App;