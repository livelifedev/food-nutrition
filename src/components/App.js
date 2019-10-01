import React from "react";
import Header from "../views/Header";
import MainContent from "../views/MainContent";

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};

export default App;

// Add feature to search for food
// Add feature for adding food to todays intake list
// Make todays intake list be mutatable and accessible to other components
