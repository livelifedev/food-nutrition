import React from "react";

// test data
let diet = {
  first_name: "Jane",
  last_name: "Appleseed",
  height_cm: 163,
  weight_kg: 57,
  daily_goal: 1500
};

const Profile = () => {
  return (
    <section className="profile">
      <h1>Profile</h1>
      <div className="profile-summary">
        <p>
          {diet.first_name} {diet.last_name}
        </p>
        <p>{diet.height_cm}cm</p>
        <p>{diet.weight_kg}kg</p>
      </div>

      <div className="profile-details">
        <p>0 consumed</p>
        <p>{diet.daily_goal} daily goal</p>
      </div>

      <div className="profile-log">
        <p>0 Breakfast</p>
        <p>0 Lunch</p>
        <p>0 Dinner</p>
        <p>0 Snack</p>
      </div>
    </section>
  );
};

export default Profile;
