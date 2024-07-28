import React from "react";
const PopularCategoriesCard = ({ category, recipeimage }) => {
  return (
    <div className="">
      <div className=" p-4 ">
        <img
          src={recipeimage}
          alt="Cherry-Berry Smoothie Bowl.png"
          className="rounded-full h-44 w-44 py-4"
        />
        <h4 className="flex  justify-center items-center text-2xl  font-bold">
          {category}
        </h4>
      </div>
    </div>
  );
};

export default PopularCategoriesCard;
