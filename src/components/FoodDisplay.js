import React from "react";

const FoodDisplay = ({ food }) => {
  const openFoodDetails = food => {
    console.log("click", food);
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
