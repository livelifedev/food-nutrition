import React from "react";

const FoodDisplay = ({ food }) => {
  return (
    <>
      <ul>
        {food.map(item => {
          const id = `id-${item.food_name.replace(" ", "-")}`;
          return <li key={id}>{item.food_name}</li>;
        })}
      </ul>
    </>
  );
};

export default FoodDisplay;
