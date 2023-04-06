import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Nothing = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    return (
      <div className='text-center'>
        {data.meals.map((d) => {
          return (
            <div className="p-4 rounded-lg">
              <img className="rounded-lg mx-auto" src={d.strMealThumb} alt="" />
              <h2 className="text-xl font-bold">Name: {d.strMeal}</h2>
              <h2 className="text-lg font-semibold">Area Serve: {d.strArea}</h2>
              <h2 className="text-lg font-semibold">
                Category: {d.strCategory}
              </h2>
              <p className="text-lg max-w-5xl mx-auto mb-8">
                {d.strInstructions}
                  </p>
                <button onClick={()=> navigate(-1)}>Go Back</button>
            </div>
          );
        })}
      </div>
    );
};

export default Nothing;