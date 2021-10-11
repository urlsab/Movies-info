import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid } from "@mui/material";

// Api
import { getSelectedMovie } from "../../api";
import Movie from "../../components/Movie/Movie";

const SelectedMovie = () => {
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({});

  // when page loads - to fetch the movie from api
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
