import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/Vector.png";
import vector from "../assets/Vector.svg";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const FirstPage = () => {
  return (
    <>
      <div className="hero-page flex justify-between items-center max-w-full mx-16 mt-8 mb-16 ">
        <div className="side-1 flex flex-col justify-start items-start w-full md:w-1/2 px-4">
          <h1 className="text-5xl font-bold">Your Daily Dish</h1>
          <h1 className="text-5xl font-bold">
            A <span className="text-[#A17F74]"> Food </span> Journey
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure et
            officia voluptatem suscipit nostrum libero molestiae reiciendis
            laudantium sit, dolore fuga atque in quasi ex expedita incidunt
            laboriosam magnam a, quidem quam maxime labore blanditiis
            distinctio. Inventore natus eveniet unde dolores soluta error quos
            nam. Culpa excepturi ratione facilis soluta?
          </p>
          <Link
            to={"/signup"}
            className="bg-[#B26357] text-white min-w-32 min-h-9 rounded-lg my-5 flex justify-center items-center"
          >
            Sign Up
          </Link>
          <div className="flex justify-center items-center gap-3">
            <p>Do You Have an Account?</p>
            <Link to={"/login"} className="text-[#B26357]">
              Log in
            </Link>
          </div>
        </div>
        <div className=" hidden side-2 max-w-[40%] xl:flex xl:flex-col lg:flex lg:flex-col  mr-40 relative  ">
          <div>
            <img src={image1} alt="hero" className="  max-w-full h-auto" />
          </div>

          <div className="  max-h-36 max-w-80 bg-[#F4F4F4]  shadow-[0_12px_50px_-5px_rgba(0,0,0,0.4)] rounded-md absolute mt-80     -ml-40 ">
            <div className="flex">
              <img
                src={vector}
                alt="image"
                className="ml-4 -mt-8 rounded-full border-4 "
              />

              <div className="ml-4">
                <h1>Sara Johnson</h1>
                <div className="flex items-center">
                  <FaStar className="text-[#B66053]" />
                  <FaStar className="text-[#B66053]" />
                  <FaStar className="text-[#B66053]" />
                  <FaStar className="text-[#B66053]" />
                  <FaStarHalfStroke className="text-[#B66053]" />
                  <p className="ml-2">4.5/5</p>
                </div>
              </div>
            </div>
            <p className="px-2 mb-8">
              Wow, this recipe is a flavour explosion in my mouth! Very
              delicious.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
