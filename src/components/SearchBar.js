import React, { useState } from "react";

const SearchBar = () => {
  const [state, setState] = useState("");
  console.log("search state", state);
  return (
    <input
      type="text"
      name="search-bar"
      id="search-bar"
      placeholder="Search foods..."
      value={state}
      onChange={e => {
        setState(e.target.value);
        if (state.length > 2) {
          console.log("searching..");
          // get call to api
          // what to do with data? where to store?
        }
      }}
    />
  );
};

export default SearchBar;
