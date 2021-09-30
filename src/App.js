import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import RetrievedMovies from "./components/RetrivedMovies/RetrivedMovies";
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <div className="m-container">
          <Navbar />
            <Switch>
              {/* <Route path="/action" component={Action} />
              <Route path="/drama" component={Drama} /> */}
            </Switch>
          <RetrievedMovies />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;