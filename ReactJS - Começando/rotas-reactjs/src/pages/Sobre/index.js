import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div>
      <h1>Bem vindo a página Sobre</h1>

      <Link to='/'>Home</Link>
      <Link to='/contato'>Contato</Link>
    </div>
  );
}

export default Sobre;
