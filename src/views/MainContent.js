import React, { useState } from "react";
import Profile from "../views/main_content/Profile";
import Diet from "../views/main_content/Diet";

const MainContent = () => {
  const [day, setDay] = useState(0);
  return (
    <div className="main-content">
      <Profile
        day={day}
        handleNext={() => setDay(day + 1)}
        handleBack={() => setDay(day - 1)}
      />
      <Diet />
    </div>
  );
};

export default MainContent;
