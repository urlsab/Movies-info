import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid } from "@mui/material";
import { getSelectedMovies } from "../../api";
import Movie from "../../components/Movie/Movie";

const SelectedMovie = () => {
  
  const { movieId } = useParams();
  const [clickedMovie, setSelectedMovie] = useState({});

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