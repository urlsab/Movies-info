import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid } from "@mui/material";

// Api
import { getSelectedMovie } from "../../api";
import Movie from "../../components/Movie/Movie";

const SelectedMovie = () => {
  // how an why?
  // how useParams works?
  // https://stackoverflow.com/a/60998589/10766305
  // it is just to destruct the movie id from the url path
  const { movieId } = useParams();

  // how and why?
  // why useState with ({}) and not just ()?
  // the {} is the state init value, and the movie is an object and not a string - so i init it with empty object
  const [selectedMovie, setSelectedMovie] = useState({});

  // when page loads - to fetch the movie from api

  // where do we use useEffect?
  // all over the app, it is the replacment of the react life cycle hook - read this page - https://reactjs.org/docs/hooks-effect.html
  // can i or should i use more useEffects in this page or other pages?
  // if you will make your app bigger and smarter - of course!
  useEffect(() => {
    async function getMovieFromApi() {
      const data = await getSelectedMovie(movieId);
      setSelectedMovie(data);
    }

    getMovieFromApi();
  }, []);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Movie movie={selectedMovie} toShowMoreInfoButton={false} />
    </Grid>
  );
};

export default SelectedMovie;
