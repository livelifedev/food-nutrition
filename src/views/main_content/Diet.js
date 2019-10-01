import React from "react";

const Diet = ({ dailyData, day }) => {
  console.log("intake list", dailyData[day].intake_list);

  const IntakeList = ({ day }) => {
    const list = dailyData[day].intake_list.map(item => (
      <li key={item.food_name}>
        {item.food_name} {item.serving_size} {item.serving_unit}
      </li>
    ));
    return <ul>{list}</ul>;
  };

  return (
    <section>
      <h1>Intake</h1>
      <IntakeList day={day} />
    </section>
  );
};

export default Diet;
