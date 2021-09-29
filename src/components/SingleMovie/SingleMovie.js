import React from 'react';
import './SingleMovie.css';

const MY_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

// define as an object for geting the properties
//.Title and .Year are saved properties from the API
const SingleMovie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
      
    <div className="SingleMovie">
        <p><b className="SingleMovieHeader"></b>{movie.Title}</p>
      <div>
        <img
          width="220"
          height="290"
          alt={`The SingleMovie titled: ${movie.Title}`}
          src={poster}
          border="4px"
          marginRight="50px"
        />
      </div>
      <p> ({movie.Year}) </p>
      <p> ({movie.Runtime}) </p>
      <p> ({movie.Genre}) </p>
      <p> ({movie.Rated}) </p>
      <p><b><a href={`https://www.omdbapi.com/?s=${movie.Title}&apiKey=${MY_API_KEY}`} className="SingleMovieHeader">YOU MAY ALSO LIKE</a></b></p>
    </div>
  );
};

export default SingleMovie;