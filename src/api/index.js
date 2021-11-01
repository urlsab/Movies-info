// FILE FOR ALL END-POINTS = ALL HTTP REQ'S WITH PROMISES BY AXIOS

// import React from "react"; - we dont use any component here like inside the reducer..so no need to import React 
import axios from 'axios';

const randPageNumb = Math.floor((Math.random() * 100) + 1);

// shortcuts for make the code below to be cleaner
const MY_API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const API_BASE_URL = 'https://www.omdbapi.com/?';
const API_STR = '&apikey=';

const API_END_URL = `${MY_API_KEY}${API_STR}`;

// no option of combination between page= to t= , becauase t= (search by title) gives the 1st result
// we can combiantion between page= to s=
const pages = 'https://omdbapi.com/?s=super&page=9&apiKey=c9f4232';

// q's:
// 1. why async?
// 2. why await?
// 3. { data } restruct what..?

//an's: elik65a
// 1. async because i want to use await - so i have to
// 2. await - because i want the code will await until the promise of the http request will resolve
// - and only then to get the data. if i will remove this await - the data will be undefined

// 3. because if i dont destruct the data , i will have to return the response.data 
// - and i dont need all the response object from axios - only the data.

// function for get movie reuslts after search movies
export const getSearchMovies = async (searchText) => {

  // const { data } can be any name, and the spaces are not neccery but more nice
  const { data } = await axios({

    //'method:' and 'url:' are saved word sinside axios package
    method: 'GET',

    // spaces are not allowed
    //sticky `${constCD}${constAB}` are allowed
    url: `${API_BASE_URL}s=${searchText}${API_STR}${MY_API_KEY}`
  });

  // have to return something because it's a  (callback) function, we want to "get" something back

  // A function without a return statement will return a default value. 
  // In the case of a constructor called with the new keyword, the default value is the value of its this parameter. 
  // For all other functions, the default return value is undefined .

  // every function return something - even undefined as a value or deafault value of some parameter 
  //(that defined as argument or with the new kewword).

  // Some functions have 'return' only without some ref to a value.
  // that bacause: A function immediately stops at the point where return is called. (MDN)
  // unlike 'break' keyword that break from loop or something else and continue to the next thing (if there is)
  return data;
};

// function for get deatailed data on specific movie after click on his button "more info"
export const getSelectedMovies = async (movieId) => {

  const { data } = await axios({
    method: 'GET',
    url: `${API_BASE_URL}i=${movieId}${API_STR}${MY_API_KEY}`
  });

  return data;
};

 //q's:
// do i need to write another func for "you may also like" or i can use "getSelectedMovie" again?

//an's: elik65a
// it is depends on the api end point, from where yo get the data for "you may also like" ?
// if its a brand new request with new end point and some other params - make new one, 
// if it very match the same - so make the "getSelectedMovie" more generic and reuse it

// ===========

// // function for get movie reuslts after click on "you may also like button"
// 'movieTitle' will use on the useParam() func at the AlsoMovies component and at the routes.js file
export const getAlsoMovies = async (movieTitle) => {
  const { data } = await axios({
    method: 'GET',
    url: `${API_BASE_URL}s=${movieTitle}${API_STR}${MY_API_KEY}`
  });
  return data;

}