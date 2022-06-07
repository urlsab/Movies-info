import axios from 'axios';

const MY_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const API_BASE_URL = 'https://www.omdbapi.com/?';
const API_STR = '&apikey=';

export const getSearchMovies = async (searchText) => {
  const { data } = await axios({
    method: 'GET',
    url: `${API_BASE_URL}s=${searchText}${API_STR}${MY_API_KEY}`
  });
  return data;
};

export const getSelectedMovies = async (movieId) => {
  const { data } = await axios({
    method: 'GET',
    url: `${API_BASE_URL}i=${movieId}${API_STR}${MY_API_KEY}`
  });
  return data;
};

 export const getAlsoMovies = async (movieTitle) => {
  const { data } = await axios({
    method: 'GET',
    url: `${API_BASE_URL}s=${movieTitle}${API_STR}${MY_API_KEY}`
  });
  return data;
}  