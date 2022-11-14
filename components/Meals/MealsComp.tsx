import React, { useEffect, useState } from "react";
import { MealsModel } from "../../types/mealsTypeModel";
import MealComp from "./MealComp";

const MealsComp = () => {
  const [meals, setMeals] = useState<MealsModel[]>([]);
  const [newMeal, setNewMeal] = useState<MealsModel[]>([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setMeals(data.categories));
  }, []);
  const handleMeal = (meal: MealsModel) => {
    setNewMeal([...newMeal, meal]);
  };
  return (
    <div>
      {newMeal.length}
      {meals.map((meal) => (
        <MealComp key={meal.idCategory} meal={meal} handleMeal={handleMeal} />
      ))}
    </div>
  );
};

export default MealsComp;
