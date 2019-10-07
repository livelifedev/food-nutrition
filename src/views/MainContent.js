import React, { useState } from "react";
import Profile from "../views/main_content/Profile";
import Diet from "../views/main_content/Diet";
import diet from "../data/mock-data";

const MainContent = () => {
  const { data_points } = diet;
  const [intakeList, setIntakeList] = useState(data_points);
  const [todaysIntake, setTodaysIntake] = useState([
    {
      food_name: "salmon salad",
      serving_unit: "cup",
      serving_weight_grams: 407.01,
      serving_qty: 1,
      nf_calories: 389.27,
      serving_size: 1.5,
      meal_type: "lunch",
      thumb: "https://d2xdmhkmkbyw75.cloudfront.net/3121_thumb.jpg"
    }
  ]);
  const [day, setDay] = useState(0);

  const cycle = (direction, day, array) => {
    if (direction === "next") {
      day > 0 ? setDay(day - 1) : setDay(0);
    }
    if (direction === "back") {
      day < array.length - 1 ? setDay(day + 1) : setDay(array.length - 1);
    }
  };

  return (
    <div className="main-content">
      <Profile
        diet={diet}
        dailyData={intakeList}
        day={day}
        handleNext={() => cycle("next", day, intakeList)}
        handleBack={() => cycle("back", day, intakeList)}
      />
      <Diet dailyData={intakeList} day={day} todaysIntake={todaysIntake} />
      <button onClick={() => console.log(todaysIntake)}>Test me</button>
    </div>
  );
};

export default MainContent;
