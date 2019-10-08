import React, { useState, useContext } from "react";
import TodaysIntakeContext from "../contexts/TodaysIntakeContext";

// Food nutrients API call data passed in here
const FoodDetails = ({ foodDetails }) => {
  console.log("Props foodDetails", foodDetails);
  // Destructure data from foodDetails
  const {
    nix_item_id,
    food_name,
    serving_qty,
    serving_weight_grams,
    nf_calories,
    serving_size,
    thumb
  } = foodDetails;

  const [state, setState] = useState({
    nix_item_id,
    food_name,
    serving_qty,
    serving_weight_grams,
    nf_calories,
    serving_size,
    thumb,
    meal_type: "breakfast"
  });

  // Todays intake list state which lives in App
  const [todaysIntake, setTodaysIntake] = useContext(TodaysIntakeContext);

  return (
    <>
      <form>
        <h2>{state.food_name}</h2>
        <label>Servings</label>
        <input value={state.serving_qty} readOnly />

        <input value={state.serving_weight_grams} readOnly />
        <label>grams</label>

        <input value={state.nf_calories} readOnly />
        <label>calories</label>

        <div>
          <label htmlFor="meal-type">ADD TO TODAY</label>
          <select
            id="meal-type"
            name="meal-type"
            value={state.meal_type}
            onChange={e => setState({ ...state, meal_type: e.target.value })}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
        </div>

        <button
          onClick={e => {
            e.preventDefault();

            setTodaysIntake([...todaysIntake, state]);
          }}
        >
          ADD
        </button>
      </form>
    </>
  );
};

export default FoodDetails;
