import axios from "axios";

const API_BASE_URL = "https://www.omdbapi.com";
const MY_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;

// why async?
// why await?
// {data} restruct what..?
// 1. async because i wan to use await - so i have to
// 2. await - because i want the code will await until the promise of the http request will resolve - and nly then to get the data
// if i will remove this await - the data will be undefined
//3. because if i dont destruct the data , i will have to return the response.data - and i dont need all the response object from axios - only the data.
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

// do i need to write another func for "you may also like" or i can use "getSelectedMovie" again?
// it is depends on the api end point, from where yo get the data for "you may also like" ?
// if its a brand new request with new end point and some other params - make new one, if it very match the same -
// so make the "getSelectedMovie" more generic and reuse it
