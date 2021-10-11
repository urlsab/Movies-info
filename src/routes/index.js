import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import RetrievedMovies from "../pages/RetrivedMovies/RetrivedMovies";
import SelectedMovie from "../pages/SelectedMovie/SelectedMovie";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={RetrievedMovies} />
      
      {/* : is for dynamic path after absulue path of '/movie' */}
      <Route exact path="/movie/:movieId" component={SelectedMovie} />
    </Switch>
  </Router>
);

export default Routes;