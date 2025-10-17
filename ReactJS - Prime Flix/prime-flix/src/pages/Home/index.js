import {useState, useEffect} from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './home.css';

// https://api.themoviedb.org/3/

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => { // acontece sempre que carrega a pagina

    async function loadFilmes(){
      const response = await api.get('movie/now_playing', { // busca na api os filmes em cartaz
        params: {
          api_key: '38ba0474025f904a2ddcedf4b29f7891', // chave da api
          language: 'pt-BR', // linguagem do filme
          page: 1 // paginas que queremos buscas
        }
      })
      setFilmes(response.data.results.slice(0, 10)); // pega os 10 primeiros filmes listados inserindo no filmes
    }

    loadFilmes();

  }, [])

  return(
    <div className='container'>
      <div className='lista-filmes'>
        {filmes.map((filme) => { // pega item a item do array filmes
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
      
    </div>
  )
}

export default Home;