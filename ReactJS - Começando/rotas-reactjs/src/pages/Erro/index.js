import { Link } from 'react-router-dom';

function Erro() {
  return(
    <div>
      <h2>Ops! Parece que está página não existe!</h2>

      <span>Encontramos as página abaixo:</span><br/>
      <Link to='/'>Home</Link><br/>
      <Link to='/sobre'>Sobre</Link><br/>
      <Link to='/contato'>Contato</Link>
    </div>
  )
}

export default Erro;