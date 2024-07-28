import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const StayConnected = () => {
  return (
    <div className="bg-[#FFF0ED] p-8 rounded-lg mt-12">
      <h1 className="  text-3xl  text-center font-semibold mb-8">
        Stay Connected with our Recipes updates
      </h1>
      <p className="text-center text-xl font-medium">
        for the latest health tips and delicious recipes
      </p>
      <div className="mt-4 flex items-center gap-3 border-2 bg-white border-gray-300 p-2 rounded-lg w-full focus:outline-none">
        <FaRegEnvelope className="text-gray-300" />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="focus:outline-none"
        />
      </div>
      <Link to={"/signup"}>
        <div className=" mt-6 flex gap-5 shrink min-h-9">
          <button className="bg-[#B66053]  w-full  rounded-lg text-white ">
            Sign Up
          </button>
        </div>
      </Link>
    </div>
  );
};

export default StayConnected;
