import React, { FC } from "react";
import { PropsModel } from "../../types/mealsTypeModel";

const MealComp: FC<PropsModel> = ({ meal, handleMeal }) => {
  const { strCategory } = meal;
  return (
    <div>
      <h1>{strCategory}</h1>
      <button onClick={()=> handleMeal(meal)}>Add Meal</button>
    </div>
  );
};

export default MealComp;
