import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from 'axios';
import { getSearchMovies } from "../../api";

const MY_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const API_BASE_URL = 'https://www.omdbapi.com/?';
const API_STR = '&apikey=';

// no css import because we style inside the button with mui attribiutes

const ButtonAlsoLike = ({ linkPath, text }) => {

  const getSearchMovies = async (searchText) => {

    // const { data } can be any name, and the spaces are not neccery but more nice
    const { data } = await axios({
  
      //'method:' and 'url:' are saved word sinside axios package
      method: 'GET',
      url: `${API_BASE_URL}s=${searchText}${API_STR}${MY_API_KEY}`
    });
  
    console.log("data is: ", data);
    return data;
  };

  const search = async (searchValue) => {
    getSearchMovies(searchValue);
  }

  const callSearchFunction = event => {
    event.preventDefault();
    search("Toy Story");
  };

  return (
    <Button
      //how dose this work? you have no component with the name "Link"...
      // look here - https://stackoverflow.com/questions/51642532/how-to-make-a-material-ui-react-button-act-as-a-react-router-dom-link
      // they may be other better solutions

      // q: still it dosen't make any sense - how it's working???
      // ans: maybe it's working because we do give a to= prop, that anyway shpuld be in the <Link> component 
      component={Link}
      to={linkPath}
      color="primary"
      variant="secondary"
      onClick={callSearchFunction}
    >
      {text}
    </Button>
  );
};

export default ButtonAlsoLike;