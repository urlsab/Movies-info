import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = event => {
    setSearchValue(event.target.value);
    // for clean search (that aviods unpropreate results - we could add an if statemnet and setSearchValue("")  for some strings)
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  // includes all func above
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
      />

      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;