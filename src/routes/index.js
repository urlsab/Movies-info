import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import RetrievedMovies from "../pages/RetrivedMovies/RetrivedMovies";
import SelectedMovie from "../pages/SelectedMovie/SelectedMovie";
import AlsoMovies from "../pages/AlsoMovies/AlsoMovies";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={RetrievedMovies} />
      <Route exact path="/movie/:movieId" component={SelectedMovie} />
      <Route exact path="/also-like/:movieTitle" component={AlsoMovies} />
    </Switch>
  </Router>
);

export default Routes;