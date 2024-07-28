import React from "react";
import logo1 from "../assets/Chicken Ranch Wrap.png";
import logo2 from "../assets/User icon.svg";
import logo3 from "../assets/calory.svg";
import { Link } from "react-router-dom";
import data from "../CardData";
import RecipeCard from "./RecipeCard";

const Exploremorerecipe = () => {
  return (
    <>
      <div className="mt-16">
        <h1 className="text-5xl font-bold ">Explore Receipe</h1>
        <p className="flex flex-row-reverse">
          <Link
            to={"/recipe"}
            className="  text-[#a66d6a] text-lg  font-semibold "
          >
            View More
          </Link>
        </p>
      </div>
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
    </>
  );
};

export default Exploremorerecipe;
