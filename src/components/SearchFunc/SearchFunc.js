import React, { useState } from 'react';
import './SearchFunc.css';

const SearchFunc = ({ search }) => {
  
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = event => {
    setSearchValue(event.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = event => {
    event.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="search movies"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH"  />
    </form>
  );
};

export default SearchFunc;