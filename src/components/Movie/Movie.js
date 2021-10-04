import React from 'react';
import './Movie.css';

const MY_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

// define as an object for geting the properties
//.Title and .Year are saved properties from the API

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      {/* https://stackoverflow.com/questions/31567729/how-to-create-dynamic-href-in-react-render-function */}
      {/* should show style and detail data on the single clicked movie header */}
      <p><b><a  target="_top" href={`https://www.omdbapi.com/?t=${movie.Title}&apiKey=${MY_API_KEY}`} className="movieHeader" >{movie.Title} </a></b></p>
      <div>
        <img
          width="200"
          height="270"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
          border="2px"
          marginRight="30px"
        />
      </div>
      <p> ({movie.Year}) </p>
      {/* should render again lis tof movies with similar name/title */}
      <p><b><a href={`https://www.omdbapi.com/?s=${movie.Title}&apiKey=${MY_API_KEY}`} className="movieAlsoLike">YOU MAY ALSO LIKE</a></b></p>
      {/* 
      for single movie that displayed after click on movies header - we do expect for:
      <p> ({movie.Year}) </p>
      <p> ({movie.Runtime}) </p>
      <p> ({movie.Genre}) </p>
      <p> ({movie.Rated}) </p>
      // a link for "YOU MAY ALSO LIKE"
      <p><b><a href={`https://www.omdbapi.com/?s=${movie.Title}&apiKey=${MY_API_KEY}`} className="SingleMovieHeader">YOU MAY ALSO LIKE</a></b></p>
      */}
    </div>
  );
};

export default Movie;