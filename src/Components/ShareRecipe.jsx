import React from "react";
import Receipeimage from "../assets/Receipeimage.jpg";
import { Link } from "react-router-dom";

const ShareRecipe = () => {
  return (
    <>
      <div className="mt-24 flex flex-col md:flex-row justify-around items-center min-h-80">
        <img
          src={Receipeimage}
          alt="recipeimage"
          className="w-full md:w-1/2 lg:w-1/3"
        />
        <div className="flex flex-col justify-center items-center gap-4 p-4 md:p-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-centre">
            Share Your <span className="text-[#B66053]">Receipes</span>
          </h1>
          <p className="text-[16px] md:text-[18px] font-bold text-[#898992] text-center md:text-centre">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            repellat eos fuga dicta. Harum ipsa quia impedit quisquam quasi
            architecto.
          </p>
          <button className="bg-[#B66053] w-full md:w-auto min-w-36 min-h-12 rounded-lg my-5 text-white p-4">
            <Link to={"/add-recipe"}>Create New Recipe</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ShareRecipe;
