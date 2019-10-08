import React, { useState } from "react";
import Header from "../views/Header";
import MainContent from "../views/MainContent";
import TodaysIntakeContext from "../contexts/TodaysIntakeContext";

const App = () => {
  const todaysIntakeHook = useState([]);
  console.log("test update", todaysIntakeHook[0]);
  return (
    <>
      <TodaysIntakeContext.Provider value={todaysIntakeHook}>
        <Header />
        <MainContent />
      </TodaysIntakeContext.Provider>
    </>
  );
};

export default App;

// Add feature to search for food
// Add feature for adding food to todays intake list
// Make todays intake list be mutatable and accessible to other components
