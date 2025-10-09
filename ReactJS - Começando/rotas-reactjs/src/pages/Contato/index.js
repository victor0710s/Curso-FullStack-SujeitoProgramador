import { Link } from 'react-router-dom';

function Contato() {
  return(
    <div>
      <h1>Pagina de contatos</h1>

      <p>Contato da empresa: (xx) xxxx-xxxx</p> <br></br>

      <Link to='/sobre'>Sobre</Link>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Contato;