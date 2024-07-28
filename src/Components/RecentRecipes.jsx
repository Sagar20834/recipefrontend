import React, { useEffect, useState } from "react";
import CardData from "../CardData";
import { FaFire, FaFireAlt, FaStar } from "react-icons/fa";
import { FaFireBurner, FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";
import OnclickMovetoTop from "./OnclickMovetoTop";

const RecentRecipes = () => {
  const recentRecipes = CardData.slice(-3).reverse();

  return (
    <>
      <div
        className=" w-full  flex flex-col gap-6 my-8 "
        onClick={OnclickMovetoTop}
      >
        {recentRecipes.map(({ id, title, image, cal }) => {
          return (
            <Link
              to={`/recipe-detail?name=${title}`}
              key={id}
              // onClick={onclickit}
              className="flex flex-grow gap-4 h-24 "
            >
              <img
                src={image}
                alt="recipe image "
                className=" w-32 object-cover"
              />
              <div>
                <h1>{title}</h1>
                <div className="flex  text-[#B66053] my-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <div className="flex gap-2 items-center  ">
                  <FaFireAlt className=" text-[#B66053] " />
                  <p>{cal} cals</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default RecentRecipes;
