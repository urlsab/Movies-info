import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from 'axios';

const MY_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const API_BASE_URL = 'https://www.omdbapi.com/?';
const API_STR = '&apikey=';

const ButtonAlsoLike = ({ linkPath, text }) => {

  const getSearchMovies = async (searchText) => {
    const { data } = await axios({
      method: 'GET',
      url: `${API_BASE_URL}s=${searchText}${API_STR}${MY_API_KEY}`
    });
    console.log("data is: ", data);
    return data;
  };

  const search = async (searchValue) => {
    getSearchMovies(searchValue);
  }

  const callSearchFunction = (event, movieTitle) => {
    event.preventDefault();
    search(movieTitle); 
  };

  return (
    <Button
      component={Link}
      to={linkPath}
      color="primary"
      variant="secondary"
      onClick={callSearchFunction}
    >
      {text}
    </Button>
  );

};

export default ButtonAlsoLike;