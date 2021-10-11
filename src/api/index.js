import axios from "axios";

const API_BASE_URL = "https://www.omdbapi.com";
const MY_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

export const searchMovies = async (searchText) => {
  const { data } = await axios({
    method: "GET",
    url: `${API_BASE_URL}/?s=${searchText}&apikey=${MY_API_KEY}`,
  });

  return data;
};

export const getSelectedMovie = async (movieId) => {
  const { data } = await axios({
    method: "GET",
    url: `${API_BASE_URL}/?i=${movieId}&apikey=${MY_API_KEY}`,
  });

  return data;
};

// here you cant make more function, like movies like this , etc..
