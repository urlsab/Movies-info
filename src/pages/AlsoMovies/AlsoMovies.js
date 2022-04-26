import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid } from "@mui/material";
import { getAlsoMovies } from "../../api";
import MoviesForAlso from "../../components/MoviesForAlso/MoviesForAlso";

const AlsoMovies = () => {

  const { movieTitle } = useParams();
  const [clickedAlso, setAlsoMovies] = useState({});

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