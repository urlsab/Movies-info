import React from "react";
import "./App.css";
import Routing from "./routes/index";
import MainHeader from "./components/MainHeader/MainHeader";
import Favicon from 'react-favicon'; 

const App = () => {
  return (
    <React.Fragment>
      <div
            style={{
              backgroundImage: `url("https://images.ctfassets.net/3s5io6mnxfqz/3qYlrsjfuRzOrGBvGW3iog/1028a32ba6d03297f9f0c6e337ade965/AdobeStock_113882591.jpeg?fm=jpg&w=900&fl=progressive")`,
              backgroundRepeat: 'no-repeat',height:'100vh',color:'white',width:'100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(85%)'
            }}>
            <MainHeader/>
            <Favicon url='http://oflisback.github.io/react-favicon/img/wikipedia.ico' />
            <Routing />
        </div> 
    </React.Fragment>
  );
};

export default App;