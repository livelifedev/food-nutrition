import React, { useState } from "react";
import { requestFood } from "../utils/api";
import FoodDisplay from "../components/FoodDisplay";

const SearchBar = () => {
  const [state, setState] = useState("");
  const [food, setFood] = useState([]);

  const onSearchSubmit = async e => {
    e.preventDefault();
    if (state.length > 0) {
      const results = await requestFood(state);
      setFood([...results.common, ...results.branded]);
    } else {
      setFood([]);
    }
  };

  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          name="search-bar"
          id="search-bar"
          placeholder="Search foods..."
          value={state}
          onChange={e => setState(e.target.value)}
        />
      </form>
      <FoodDisplay food={food} />
    </>
  );
};

export default SearchBar;
