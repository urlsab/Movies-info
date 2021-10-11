import React, { useReducer } from "react";
import { initialState, reducer } from "../../reducer/reducer";
import "./RetrivedMovies.css";

// Api
import { searchMovies } from "../../api";

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

    const { Response, Search, Error } = await searchMovies(searchValue);

    if (Response === "True") {
      checkEntry++;
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: Search,
      });
    } else {
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
    loading && checkEntry !== 0 && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : // if user never searched
    loading && checkEntry === 0 && !errorMessage ? (
      <div className="beforeGif">
        <p>type any word </p>
        <p>and wait few seconds</p>
      </div>
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />

        // mayby add an <Forbidden /> component for movies that movie.rated === "PG-13" e.g - will map different components
      ))
    );

  return (
    <div>
      <SearchFunc search={getSearch} />
      <div className="movies"> {showMovies} </div>
    </div>
  );
};

export default RetrievedMovies;
