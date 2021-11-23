import React from "react";
import "./Movie.css";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

import ButtonAlsoLike from "../ButtonAlsoLike/ButtonAlsoLike";

// how?! you don't have any func or component there with the name "LinkButton"

// you should learn the difference between "named-export" and between "default export"
// because in the ButtonMovieName compont at the end - i default export, 
// so its mean i can call it at every name as i want
// like : import YairSabag from "../ButtonMovieName/ButtonMovieName"; - this is legal
import ButtonMovieName from "../ButtonMovieName/ButtonMovieName";

const MY_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const DEFAULT_PLACEHOLDER_IMAGE = 'https://www.allianceplast.com/wp-content/uploads/no-image.png';

// define as an object for geting the properties
//.Title and .Year are saved properties from the ombd-API

const Movie = ({ movie, toShowMoreInfoButton = true, toShowMoreAlsoButton = true }) => {

  // "N/A" is save string from the omdb-api that means that the movie have no poster
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  
  const renderMoreInfoSection = () => {
    if (toShowMoreInfoButton) {
      return <div>
              <ButtonMovieName linkPath={`movie/${movie.imdbID}`} text="MORE INFO" />

              {/* allways give different path name for each route for avoid errors */}
              <ButtonAlsoLike linkPath={`movie/${movie.Title}`} text="YOU MAY ALSO LIKE" />
            </div>
      
    // after movie was clicked - it will remove the <ButtonMovieName> component
    } else {
      return <Typography>
              <p>Movie Date: {movie.Released} </p>       
              <p>Rated: {movie.Rated}</p>
              <p>Genres:{movie.Genre}</p>
              {/* <p>Country: {movie.Country}</p> -- add that === need scrolling*/}
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
        {/* {renderAlsoMovies()} */}

        <CardActionArea>

          {/* this <p> rendered as undfined. why??? */}
          {/* <p> ({movie.Year}) </p> */}

          {/* should render again list of movies with similar name/title */}
          
        </CardActionArea>
        
      </Card>
    </div>
  );
};

export default Movie;