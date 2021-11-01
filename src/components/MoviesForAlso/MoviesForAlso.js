import React from "react";
import "./MoviesForAlso.css";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

import ButtonAlsoLike from "../ButtonAlsoLike/ButtonAlsoLike";

// how?! you don't have any func or component there with the name "LinkButton"

// you should learn the difference between "named-export" and between "default export"
// because in the ButtonMoviesForAlsoName compont at the end - i default export, 
// so its mean i can call it at every name as i want
// like : import YairSabag from "../ButtonMoviesForAlsoName/ButtonMoviesForAlsoName"; - this is legal

const DEFAULT_PLACEHOLDER_IMAGE = 'https://www.allianceplast.com/wp-content/uploads/no-image.png';

// define as an object for geting the properties
//.Title and .Year are saved properties from the ombd-API

const MoviesForAlso = ({ movie, toShowMoreAlsoButton = true }) => {

  // "N/A" is save string from the omdb-api that means that the MoviesForAlso have no poster
  const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  
  const renderAlsoMoviesForAlsos = () => {
    if (toShowMoreAlsoButton) {
      return <ButtonAlsoLike linkPath={`Movie/${movie.Title}`} text="YOU MAY ALSO LIKE" />
    }
    else {
      return <Typography>
      <p>MoviesForAlso Date: {movie.Released} ccc </p>       
      <p>Rated: {movie.Rated} aaa</p>
      <p>Genres:{movie.Genre} bbb</p>
      {/* <p>Country: {MoviesForAlso.Country}</p> -- add that === need scrolling*/}
    </Typography>;
    }
  }

  return (
    <div className="movie">
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

        {renderAlsoMoviesForAlsos()}

        
        <CardActionArea>

          {/* this <p> rendered as undfined. why??? */}
          {/* <p> ({MoviesForAlso.Year}) </p> */}

          {/* should render again list of MoviesForAlsos with similar name/title */}
          
        </CardActionArea>
        
      </Card>
    </div>
  );
};

export default MoviesForAlso;