import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid } from "@mui/material";
import { getSelectedMovies } from "../../api";
import Movie from "../../components/Movie/Movie";

// that exact name because of index.js of dir routes
const SelectedMovie = () => {
  
  // how useParams works?

  // https://stackoverflow.com/a/60998589/10766305
  // it is just to destruct the movie-id from the url path

  // from routes folder: <Route exact path="/movie/:movieId" component={SelectedMovie} />
  // :movieId === our param
  // const { movieId } must be that name because of :movieId in the routes/ index.js
  // useParams() catch what in the keft side of '='
  const { movieId } = useParams();

  // why useState with ({}) and not just ()?
  // the {} is the state init value, and the movie is an object and not a string - so i init it with empty object
  const [clickedMovie, setSelectedMovie] = useState({});

  // when page loads - to fetch the movie from api

  // we use useEffect allover the apphttps://reactjs.org/docs/hooks-effect.html 
  // for bigger app we can use multy useEffect as we need
  useEffect(() => {
    async function getMovieFromApi() {
      const movieData = await getSelectedMovies(movieId);
      setSelectedMovie(movieData);
    }

    getMovieFromApi();
  }, []);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Movie movie={clickedMovie} toShowMoreInfoButton={false} />
    </Grid>
  );
};

export default SelectedMovie;