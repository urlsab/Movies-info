import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import RetrievedMovies from "../pages/RetrivedMovies/RetrivedMovies";
import SelectedMovie from "../pages/SelectedMovie/SelectedMovie";
import AlsoMovies from "../pages/AlsoMovies/AlsoMovies";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={RetrievedMovies} />

      {/* ':' is for dynamic path (someString that act like refrence) after absulute path of '/movie' */}
      {/* and in the SelectedMovie - we destruct this data and use it for the api request */}

      {/* :movieId is possible only after import { Route } from "react-router-dom";  */}
      <Route exact path="/movie/:movieId" component={SelectedMovie} />

      {/* give different start-path for avoid rendering empty or undefined page */}
      <Route exact path="/also-like/:movieTitle" component={AlsoMovies} />

    </Switch>
  </Router>
);

export default Routes;