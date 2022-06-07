import React from "react";
import "./Movie.css";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import ButtonMovieName from "../ButtonMovieName/ButtonMovieName";

const DEFAULT_PLACEHOLDER_IMAGE = 'https://www.allianceplast.com/wp-content/uploads/no-image.png';

const Movie = ({ movie, toShowMoreInfoButton = true }) => {
  console.log("movie", movie);

  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  
  const renderMoreInfoSection = () => {
    if (toShowMoreInfoButton) {
      return <div>
              <ButtonMovieName linkPath={`movie/${movie.imdbID}`} text="MORE INFO" />
              <ButtonMovieName linkPath={`also-like/${movie.Title}`} text="YOU MAY ALSO LIKE" />
            </div>
      
    // after movie was clicked - it will remove the <ButtonMovieName> component
    } else {
      return <Typography>
              <p>Movie Date: {movie.Released} </p>       
              <p>Rated: {movie.Rated}</p>
              <p>Genres:{movie.Genre}</p>
            </Typography>;
    }
  };

  return (
    <div className="movie">
      <Card>
        <CardContent>
          <img
            width="200"
            height="270"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
        </CardContent>
        <p> {movie.Title} </p>
        <p> ({movie.Year}) </p>
        {renderMoreInfoSection()}
        <CardActionArea>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Movie;