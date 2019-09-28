import React from "react";

const Diet = ({ dailyData }) => {
  console.log(dailyData[1].intake_list);

  const IntakeList = () => {
    const day = 1;
    const list = dailyData[day].intake_list.map(item => (
      <li key={item.food_name}>{item.food_name}</li>
    ));
    return <ul>{list}</ul>;
  };

  return (
    <section>
      <h1>Intake</h1>
      <IntakeList />
    </section>
  );
};

export default Diet;

// serving size is how many they are served/intake amount
