import React, { useState } from "react";
import Profile from "../views/main_content/Profile";
import Diet from "../views/main_content/Diet";
import diet from "../data/mock-data";

const MainContent = () => {
  const { data_points } = diet;
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
        dailyData={data_points}
        day={day}
        handleNext={() => cycle("next", day, data_points)}
        handleBack={() => cycle("back", day, data_points)}
      />
      <Diet dailyData={data_points} day={day} />
    </div>
  );
};

export default MainContent;
