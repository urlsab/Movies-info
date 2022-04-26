import React from "react";
import "./MoviesForAlso.css";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import ButtonAlsoLike from "../ButtonAlsoLike/ButtonAlsoLike";
// "default export" = i can call the component it at every name as i want
// "named-export" = only as the same name of the component in the file

const DEFAULT_PLACEHOLDER_IMAGE = 'https://www.allianceplast.com/wp-content/uploads/no-image.png';

// define as an object for geting the properties
//.Title and .Year are saved properties from the omdb-API

const MoviesForAlso = ({ movies, toShowMoreAlsoButton = true }) => {

  console.log("movies", movies);

  // "N/A" is save string from the omdb-api that means that the MoviesForAlso have no poster
  // movie? - check if true. new feature.
  // const poster = (movie) => movie?.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie?.Poster;

  // regular option:
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
      {/* {renderMoreInfoSection()} */}

      {renderAlsoMoviesForAlsos(movie)}

      <CardActionArea>
        
        {/* this <p> rendered as undfined. why??? */}
        {/* <p> ({MoviesForAlso.Year}) </p> */}

        {/* should render again list of MoviesForAlsos with similar name/title */}
        
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