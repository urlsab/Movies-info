import React from "react";
import "./MoviesForAlso.css";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import ButtonAlsoLike from "../ButtonAlsoLike/ButtonAlsoLike";

const DEFAULT_PLACEHOLDER_IMAGE = 'https://www.allianceplast.com/wp-content/uploads/no-image.png';

const MoviesForAlso = ({ movies, toShowMoreAlsoButton = true }) => {
  const poster = movies.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movies.Poster;
  
  const renderAlsoMoviesForAlsos = () => {
    if (toShowMoreAlsoButton) {
      return <ButtonAlsoLike linkPath={`Movie/${movies.Title}`} text="YOU MAY ALSO LIKE" />
    }
    else {
      return <Typography>
      <p>Date: {movies.Released} </p>       
      <p>Rated: {movies.Rated} </p>
      <p>Genres: {movies.Genre} </p>
    </Typography>;
    }
  }
  
  const renderMovies = () => (
    movies.map(movie => (
      <Card>
      <CardContent>
        <img
          width="200"
          height="270"
          alt={`The MoviesForAlso titled: ${movie.Title}`}
          src={poster}
        />
      </CardContent>
      <p> {movie.Title} </p>
      <p> ({movie.Year}) </p>
      {renderAlsoMoviesForAlsos(movie)}
      <CardActionArea>
      </CardActionArea>
    </Card>
    ))
  );
   
  return (
    <div className="moviesForAlso">
     { movies?.length && renderMovies()}
    </div>
  );
};

export default MoviesForAlso;