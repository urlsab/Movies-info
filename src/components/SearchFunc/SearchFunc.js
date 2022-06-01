import React, { useState } from 'react';
import './SearchFunc.css';

const SearchFunc = ({ search }) => {
  
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = event => {
    setSearchValue(event.target.value);
    // for clean search (that aviods unpropreate results) - we could add an if statemnet and setSearchValue("")  for some dirty strings)
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  // includes all funcs above
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