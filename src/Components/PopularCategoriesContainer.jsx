import React from "react";
import { Link } from "react-router-dom";
import data from "../PopularRecipeData";
import PopularCategoriesCard from "./PopularCategoriesCard";

const PopularCategoriesContainer = () => {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        Explore Recipes
      </h1>
      <p className="mt-4">
        <Link
          to="/popular-categories"
          className="text-[#a66d6a] text-lg font-semibold"
        >
          View More
        </Link>
      </p>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 justify-items-center items-center">
        {data.map(({ id, category, recipeimage }) => (
          <PopularCategoriesCard
            key={id}
            category={category}
            recipeimage={recipeimage}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCategoriesContainer;
