import React from "react";
import "./Movie.css";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

// how?! you don't have any func or component there with the name "LinkButton"
// you should learn the difference between "named-export" and between "default export"
// because in the ButtonMovieName compont at the end - i default export, so its mean i can call it at every name as i want
// like : import YairSabag from "../ButtonMovieName/ButtonMovieName"; - this is legal
import LinkButton from "../ButtonMovieName/ButtonMovieName";

const MY_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

// define as an object for geting the properties
//.Title and .Year are saved properties from the API

const Movie = ({ movie, toShowMoreInfoButton = true }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  const renderMoreInfoSection = () => {
    if (toShowMoreInfoButton) {
      return <LinkButton linkPath={`movie/${movie.imdbID}`} text="MORE INFO" />;
    } else {
      return <Typography>Movie Date: {movie.Released}</Typography>;
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
        {renderMoreInfoSection()}
        <CardActionArea>
          <p> ({movie.Year}) </p>
          {/* should render again list of movies with similar name/title */}
          <p>
            <b>
              <a
                href={`https://www.omdbapi.com/?s=${movie.Title}&apiKey=${MY_API_KEY}`}
                className="movieAlsoLike"
              >
                YOU MAY ALSO LIKE
              </a>
            </b>
          </p>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Movie;
