import React from "react";
import { useLoaderData } from "react-router-dom";

const Meal = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 mt-12 mx-4">
        {data.meals.map((d) => {
          return (
            <div className="border-2 border-red-700 p-4 rounded-lg">
              <img className="rounded-lg" src={d.strMealThumb} alt="" />
              <h2 className="text-xl font-bold">Name: {d.strMeal}</h2>
              <h2 className="text-lg font-semibold">Area Serve: {d.strArea}</h2>
              <h2 className="text-lg font-semibold">
                Category: {d.strCategory}
              </h2>
              <p className="text-lg">
                {d.strInstructions.length >= 150
                  ? d.strInstructions.slice(0, 93) + " " + "more..."
                  : d.strInstructions}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Meal;
