import React from "react";

const Profile = ({ diet, dailyData, day, handleNext, handleBack }) => {
  console.log(dailyData);

  const mealMap = dailyData[day].intake_list.reduce((acc, current) => {
    if (!acc[current.meal_type]) {
      acc[current.meal_type] = current.nf_calories;
    } else {
      acc[current.meal_type] += current.nf_calories;
    }
    if (!acc["total"]) {
      acc["total"] = current.nf_calories;
    } else {
      acc["total"] += current.nf_calories;
    }
    return acc;
  }, {});

  console.log(mealMap);

  return (
    <>
      <button onClick={handleBack}>Previous day</button>
      <button onClick={handleNext}>Next day</button>
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
          <p>{mealMap.total} cal consumed</p>
          <p>{diet.daily_goal} daily goal</p>
        </div>

        <div className="profile-log">
          <p>{mealMap.breakfast} cal Breakfast</p>
          <p>{mealMap.lunch} cal Lunch</p>
          <p>{mealMap.dinner} cal Dinner</p>
          <p>{mealMap.snack} cal Snack</p>
        </div>
      </section>
    </>
  );
};

export default Profile;
