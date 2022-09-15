import { Route, Routes } from "react-router-dom";
// Using Routes instead of Switch in react-router v6

import RetrievedMovies from "../pages/RetrivedMovies/RetrivedMovies";
import SelectedMovie from "../pages/SelectedMovie/SelectedMovie";
import AlsoMovies from "../pages/AlsoMovies/AlsoMovies";

const Routing = () => (
    <Routes>
      <Route exact path="/" element={<RetrievedMovies/>} />
      <Route exact path="/movie/:movieId" element={<SelectedMovie/>} />
      <Route exact path="/also-like/:movieTitle" element={<AlsoMovies/>} />
    </Routes>
);

export default Routing;