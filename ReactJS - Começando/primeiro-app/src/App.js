import Nome from './components/Nome';

// Criando um componente
function App() {
  return( //retornando o JSX
    <div>
      <h1>Compontente</h1>
      <Nome aluno="Lucas" idade={25}/> {/* Componente com props (propriedades) */}
    </div>
  );
}

export default App;