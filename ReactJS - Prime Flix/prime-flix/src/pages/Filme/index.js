import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import api from '../../services/api';

import './filme.css';

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params: {
          api_key: '38ba0474025f904a2ddcedf4b29f7891',
          language: 'pt-BR',
        }
      })
      .then((response) => {
        setFilme(response.data);
        setLoading(false);
      })
      .catch(() => {
        navigate("/", { replace: true})
        return;
      });
    };

    loadFilme();

    return () => {
      console.log("COMPONENTE DESMONTADO")
    };

  }, [ navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista) || []; // se tiver algo na minha lista, transforma em um array, se não tiver, cria um array vazio

    const hasFilme = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filme.id);

    if (hasFilme) {
      alert("Esse filme já está na sua lista!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    alert("Filme salvo com sucesso!");

  }

  if (loading) {
    return(
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return(
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
      
      <h3>Sinpose</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average} / 10</strong>

      <div className='area-buttons'>
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a href={`https://www.youtube.com/results?search_query=${filme.title} Trailer Oficial`} target='blank' rel='external'>
            Trailer
          </a>
        </button>
      </div>
    </div>
  )
}

export default Filme;