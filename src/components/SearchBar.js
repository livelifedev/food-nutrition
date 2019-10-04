import React, { useState } from "react";
import { requestFood } from "../utils/api";
import FoodDisplay from "../components/FoodDisplay";

const SearchBar = () => {
  const [state, setState] = useState("");
  const [food, setFood] = useState([]);
  console.log("search state", state, state.length);
  console.log("food state", food);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          requestFood();
        }}
      >
        <input
          type="text"
          name="search-bar"
          id="search-bar"
          placeholder="Search foods..."
          value={state}
          onChange={async e => {
            const query = e.target.value;
            setState(query);

            if (query.length > 2) {
              console.log("searching..");
              const results = await requestFood(query);
              setFood([...results.common, ...results.branded]);
            } else {
              setFood([]);
            }
          }}
        />
      </form>
      <FoodDisplay food={food} />
    </>
  );
};

export default SearchBar;
