import React from "react";
import './ButtonMovieName.css';
import { Button } from '@mui/material';

const ButtonMovieName = ({ movie }) => {
    
    return (
        <div>
            
            <Button 
                //maybe do this --- component={SingleMovie}
                
                variant="contained"
                
                //handle that with match syntax onClick={location.href=`https://www.omdbapi.com/?t=${movie.Title}&apiKey=${MY_API_KEY}`}
            >
                { /* why this is undefuned here and on thr Movie.js it isn't ??? {singleMovie.Title} */}
                {/* {movie.Year} */}
                click here
            </Button>
            {/* also not working here and defined as undefined */}
            {/* <p>{movie.Year}</p> */}
        </div>
    );
}

export default ButtonMovieName;

// href={`https://www.omdbapi.com/?t=${movie.Title}&apiKey=${MY_API_KEY}`}