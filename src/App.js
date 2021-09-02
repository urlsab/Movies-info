import React from 'react';
import './App.css';

import RetrievedMovies from "./components/RetrivedMovies/RetrivedMovies";
import Navbar from './components/Navbar/Navbar';

const App = () => {
  
  return (
    <div className="App">
      <div className="m-container">
        <Navbar />
        <RetrievedMovies />
      </div>
    </div>
  );
};

export default App;