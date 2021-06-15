import React, { useReducer, useEffect } from "react";
import { initialState, reducer } from "./reducer/reducer";
import './App.css';
import axios from "axios";

import Header from "./components/Header/Header";
import Movie from "./components/Movie/Movie";
import Search from "./components/SearchFunc/SearchFunc";
import spinner from "./assets/spinner.gif";

const MY_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${MY_API_KEY}`;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // The first auto result as we enter the website
  useEffect(() => {
    axios.get(MOVIE_API_URL).then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
      });
    });
  }, []);

  // result for any search
  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=${MY_API_KEY}`).then(
      jsonResponse => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };

  // include the properties from the reducer object
  const { movies, errorMessage, loading } = state;

  // render the movies with some conditons
  const retrievedMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  return (
    <div className="App">
      <div className="m-container">
        <Header text="MOVIES INFO"/>
        <Search search={search} />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">{retrievedMovies}</div>
      </div>
    </div>
  );
};

export default App;
