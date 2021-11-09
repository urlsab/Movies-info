import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid } from "@mui/material";

// Api
import { getAlsoMovies } from "../../api";

// components
import MoviesForAlso from "../../components/MoviesForAlso/MoviesForAlso";

// that exact name because of index.js of dir routes
const AlsoMovies = () => {

  // how and why?
  // how useParams works?

  // https://stackoverflow.com/a/60998589/10766305
  const { movieTitle } = useParams();

  // how and why?
  // why useState with ({}) and not just ()?

  // the {} is the state init value, and the movie is an object and not a string - so i init it with empty object
  const [clickedAlso, setAlsoMovies] = useState({});

  // when page loads - to fetch the movie from api

  // where do we use useEffect?
  // all over the app, it is the replacment of the react life cycle hook - read this page - https://reactjs.org/docs/hooks-effect.html
  
  // can i or should i use more useEffects in this page or other pages?
  // if you will make your app bigger and smarter - of course!
  useEffect(() => {
    async function getMovieFromApi() {
      const { Search } = await getAlsoMovies(movieTitle);
      setAlsoMovies(Search);
    }

    getMovieFromApi();
  }, []);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <MoviesForAlso movies={clickedAlso} toShowMoreAlsoButton={false} />
    </Grid>
  );
};

export default AlsoMovies;