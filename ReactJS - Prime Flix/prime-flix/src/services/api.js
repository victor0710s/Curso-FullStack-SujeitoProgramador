import axios from 'axios';

/*
URL Base da API: https://api.themoviedb.org/3/
Api Key: 38ba0474025f904a2ddcedf4b29f7891
*/

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
