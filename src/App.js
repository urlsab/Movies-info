import React from "react";
import "./App.css";

import Routes from "./routes";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <div className="m-container">
          <Navbar />
          <Routes />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;