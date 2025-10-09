import {useState, useEffect} from 'react';
import api from '../../services/api';

// https://api.themoviedb.org/3/

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    async function loadFilmes(){
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '38ba0474025f904a2ddcedf4b29f7891',
          language: 'pt-BR',
          page: 1
        }
      })
      console.log(response.data.results);
    }

    loadFilmes();

  }, [])

  return(
    <div>
      <h1>BEM VINDO À HOME</h1>
    </div>
  )
}

export default Home;