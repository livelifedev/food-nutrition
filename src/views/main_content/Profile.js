import React from "react";
import diet from "../../data/mock-data";

// map through data_points array
// reduce nf_calories to single number

// Profile is just displaying information, so logic may not be necessary in here, extract later
// Data (diet/intake) can be pulled in the parent, then values passed to here

const Profile = () => {
  const { data_points } = diet;
  console.log(data_points);

  let day = 1;
  let total = data_points[day].intake_list.reduce((acc, current) => {
    return acc + current.nf_calories;
  }, 0);

  console.log(total);

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
        <p>{total} cal consumed</p>
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
