import React, { useState } from "react";
import { requestFoodDetails } from "../utils/api";
import FoodDetails from "../components/FoodDetails"; //use portal to load as modal

const FoodDisplay = ({ food }) => {
  const [foodDetails, setFoodDetails] = useState([]);
  const [showFoodDetails, setShowFoodDetails] = useState(false);

  // API call to get food nutrition
  const openFoodDetails = async food => {
    console.log("click", food);
    const res = await requestFoodDetails(food);
    setFoodDetails(res.foods[0]);
    setShowFoodDetails(true);
  };

  return (
    <>
      <ul>
        {food.map(item => {
          const id = `id-${item.food_name.replace(" ", "-")}`;
          return (
            <li key={id} onClick={() => openFoodDetails(item.food_name)}>
              {item.food_name}
            </li>
          );
        })}
      </ul>
      {showFoodDetails ? <FoodDetails foodDetails={foodDetails} /> : null}
    </>
  );
};

export default FoodDisplay;
