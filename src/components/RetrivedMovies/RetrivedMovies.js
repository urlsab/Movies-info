import React, { useReducer } from "react";
import { initialState, reducer } from "../../reducer/reducer";
import './RetrivedMovies.css';
import axios from 'axios';

import Movie from '../Movie/Movie';
import SearchFunc from '../SearchFunc/SearchFunc';
import spinner from '../../assets/spinner.gif'; 

const MY_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
let checkEntry = 0;

const RetrievedMovies = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

  // result for any search
  const getSearch = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    // just 'axios' is === to 'axios.get'
    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=${MY_API_KEY}`).then(
      jsonResponse => {
        if (jsonResponse.data.Response === "True") {
          checkEntry++;
          console.log(jsonResponse.data.Search);
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
  
  // render the movies with some conditionals
  const showMovies =

    loading && checkEntry !== 0 && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : 

      // if user never searched
      loading && checkEntry === 0 && !errorMessage ? (
        <div  className="beforeGif">
          <p>type any word </p>
          <p>and wait few seconds</p>
        </div>
      
    ):

      errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : 
    
    (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
        // mayby add an <Forbidden /> component for movies that movie.rated === "PG-13" e.g - will map different components
      )
    )
  );

  return (
    <div>
      <SearchFunc search={getSearch} />
      <div className="movies"> {showMovies} </div>
    </div>
  );

}

export default RetrievedMovies;

/*

// 3 types of search: s=for serach , t=for movie title, i=for movie id
    // just 'axios' is === to 'axios.get'
    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=${MY_API_KEY}`).then(
      jsonResponse => {
        const respone = jsonResponse.data.Response ;
        const data = jsonResponse.data;
        // need a for loop for Search[i]
        const search = jsonResponse.data.Search[3];
        const imdbID = jsonResponse.data.Search[3].imdbID;
        if (respone === "True") {
          checkEntry++;
          console.log(search);
          console.log(data);
          console.log(imdbID);

*/