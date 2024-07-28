import React, { useEffect, useState } from "react";
import CardData from "../CardData";
import { FaFire, FaFireAlt, FaStar } from "react-icons/fa";
import { FaFireBurner, FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";
import OnclickMovetoTop from "./OnclickMovetoTop";

const RelatedRecipes = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-1  "
        onClick={OnclickMovetoTop}
      >
        {CardData.map((card) => {
          return (
            <Link
              to={`/recipe-detail?name=${card.title}`}
              key={card.id}
              className=" max-h-40 w-40   "
            >
              <img
                src={card.image}
                alt="image"
                className=" object-cover max-h-24 w-40  "
              />
              <p className="text-center">{card.title}</p>
            </Link>
          );
          console.log(card);
        })}
      </div>
    </>
  );
};

export default RelatedRecipes;
