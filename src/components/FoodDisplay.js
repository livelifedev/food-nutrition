import React from "react";
import { requestFoodDetails } from "../utils/api";

// api call to get food nutrition
const FoodDisplay = ({ food }) => {
  const openFoodDetails = async food => {
    console.log("click", food);
    await requestFoodDetails(food);
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
    </>
  );
};

export default FoodDisplay;
