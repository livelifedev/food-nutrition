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
    thumb
  } = foodDetails;

  const [state, setState] = useState({
    nix_item_id,
    food_name,
    serving_qty,
    serving_weight_grams,
    nf_calories,
    thumb,
    serving_size: 1,
    meal_type: "breakfast"
  });

  // TODO: split these into own state
  // meal_type
  // serving_weight_grams
  // serving_size
  // nf_calories

  // Todays intake list state which lives in App
  const [todaysIntake, setTodaysIntake] = useContext(TodaysIntakeContext);

  // TODO: Extract out logic into a function/utility
  // Might be better to turn input fields into a custom reusable hook
  return (
    <>
      <form>
        <h2>{state.food_name}</h2>
        <label>Servings</label>
        <input
          type="number"
          step={0.1}
          value={parseFloat(state.serving_size).toFixed(1)}
          onChange={e => {
            const newValue = e.target.value;
            setState(prevInputState => ({
              ...prevInputState,
              serving_size: parseFloat(newValue)
            }));
          }}
        />

        <input
          value={Math.round(
            (state.serving_size / state.serving_qty) *
              state.serving_weight_grams
          )}
          onChange={e => {
            console.log("runnn");
            const newValue = e.target.value;
            setState(prevInputState => ({
              ...prevInputState,
              serving_weight_grams: newValue
            }));
          }}
          readOnly
        />
        <label>grams</label>

        <input
          value={Math.round(
            (state.serving_size / state.serving_qty) * state.nf_calories
          )}
          onChange={e => {
            const newValue = e.target.value;
            setState(prevInputState => ({
              ...prevInputState,
              nf_calories: newValue
            }));
          }}
          readOnly
        />
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
