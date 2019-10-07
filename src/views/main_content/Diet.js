import React from "react";

const Diet = ({ dailyData, day, todaysIntake }) => {
  console.log("intake list", dailyData[day].intake_list);

  const IntakeList = ({ day, todaysIntake }) => {
    // if day = 0, use the todaysintakelist
    const current = day ? dailyData[day].intake_list : todaysIntake;
    console.log("current", current);
    const list = current.map(item => (
      <li key={item.food_name}>
        {item.food_name} {item.serving_size} {item.serving_unit}
      </li>
    ));
    return <ul>{list}</ul>;
  };

  return (
    <section>
      <h1>Intake</h1>
      <IntakeList day={day} todaysIntake={todaysIntake} />
    </section>
  );
};

export default Diet;
