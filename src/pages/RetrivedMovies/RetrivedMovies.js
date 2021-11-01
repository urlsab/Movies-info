import React, { useReducer } from "react";
import { initialState, reducer } from "../../reducer/reducer";
import "./RetrivedMovies.css";

// Api
// for named export (and not deafult) we import by '{func/compo-name}'
import { getSearchMovies } from "../../api";

import Movie from "../../components/Movie/Movie";
import SearchFunc from "../../components/SearchFunc/SearchFunc";
import spinner from "../../assets/spinner.gif";

let checkEntry = 0; 

const RetrievedMovies = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // result for any search
  const getSearch = async (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    // how and why?
    // destruct only the data i want from the api response
    const { Response, Search, Error } = await getSearchMovies(searchValue);

    if (Response === "True") {
      checkEntry++;
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: Search,
      });
    } 
    
    else {
      dispatch({
        type: "SEARCH_MOVIES_FAILURE",
        error: Error,
      });
    }

  };

  // include the properties from the reducer object
  const { movies, errorMessage, loading } = state;

  // render the movies with some conditionals
  const showMovies =

  // user searched somtething and the data is loading
    loading && checkEntry !== 0 && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : 
    
  // if user never searched
    loading && checkEntry === 0 && !errorMessage ? (
      <div className="beforeGif">
        <p>type any word </p>
        <p>and wait few seconds</p>
      </div>
    ) : 
    
  // if somethong went wrong
    errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : 
    
  // if user searched something and everything is OK
    movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      )
    )
    // maybe add an <Forbidden /> component for movies that movie.rated === "PG-13" e.g - will map different components
  ;

  return (
    <div>
      <SearchFunc search={getSearch} />
      <div className="movies"> {showMovies} </div>
    </div>
  );
};

export default RetrievedMovies;