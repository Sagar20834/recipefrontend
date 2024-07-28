import React from "react";
import data from "../CardData";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

const TrendingRecipe = () => {
  //   console.log(data);

  return (
    <div className="mt-6">
      <h1 className="text-5xl font-bold ">Trending Receipe</h1>
      <p className="flex flex-row-reverse">
        <Link
          to={"/recipe"}
          className="  text-[#a66d6a] text-lg  font-semibold "
        >
          View More
        </Link>
      </p>
      <div className="  my-0 flex gap-24 flex-wrap ">
        {data
          .slice(0, 4)
          .map(({ id, star, title, image, calimage, userimage, name, cal }) => {
            return (
              <RecipeCard
                key={id}
                name={name}
                image={image}
                star={star}
                title={title}
                calimage={calimage}
                userimage={userimage}
                cal={cal}
                width={320}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TrendingRecipe;
