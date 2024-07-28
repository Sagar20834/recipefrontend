import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFireAlt } from "react-icons/fa";
const RecipeCard = ({ star, title, image, userimage, name, cal, width }) => {
  return (
    <Link to={`/recipe-detail?name=${title}`}>
      <div
        className="flex flex-col shadow-2xl  overflow-hidden mt-6  max-h-[352px] gap-4 text-xl  "
        style={{ minWidth: `${width}px` }}
      >
        <img src={image} alt="user" className="h-[164px] w-full object-cover" />
        <div className="p-2 ">
          <p>{star}/5 </p>
          <h1 className="mb-8 text-wrap max-w-[320px]">{title}</h1>
          <div className="flex justify-between">
            {userimage && (
              <div className="flex gap-2">
                <img
                  src={userimage}
                  alt=""
                  className="h-10  w-10 rounded-full border"
                />
                <h1>{name}</h1>
              </div>
            )}
            {cal && (
              <div className="bg-[#f0f8ff] mr-1 flex justify-between items-center gap-0 border-cyan-300  rounded-md  ">
                <div className="flex gap-1 justify-center items-center">
                  <FaFireAlt />
                  <p>{cal} cals</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
