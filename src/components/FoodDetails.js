import React, { useState } from "react";

const FoodDetails = () => {
  // servings need to be adjustable
  // grams and calories get recalculated to servings
  // load item photo, item.photo render to page
  const [state, setState] = useState("breakfast");

  return (
    <>
      <form>
        <h2>Cheese</h2>
        <label>Servings</label>
        <input value={"1.0"} readOnly />

        <input value={"28"} readOnly />
        <label>grams</label>

        <input value={"113"} readOnly />
        <label>calories</label>

        <div>
          <label htmlFor="meal-type">ADD TO TODAY</label>
          <select
            id="meal-type"
            value={state}
            onChange={e => setState(e.target.value)}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </div>

        <button>ADD</button>
      </form>
    </>
  );
};

export default FoodDetails;
