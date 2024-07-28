import React from "react";
import Data from "../CardData";
import RecipeCard from "./RecipeCard";
import { Link, useParams } from "react-router-dom";

const Recipe = () => {
  return (
    <div className="  m-16 flex gap-4 flex-wrap ">
      {Data.map(
        ({ id, star, title, image, calimage, userimage, name, cal }) => {
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
        }
      )}
    </div>
  );
};

export default Recipe;
