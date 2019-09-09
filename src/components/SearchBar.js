import React, { useState } from "react";

const SearchBar = () => {
  const [state, setState] = useState("");

  return (
    <input
      type="text"
      name="search-bar"
      id="search-bar"
      placeholder="Search foods..."
      value={state}
      onChange={e => setState(e.target.value)}
    />
  );
};

export default SearchBar;
