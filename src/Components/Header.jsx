import React, { useContext, useEffect } from "react";
import logocorss from "../assets/logocross.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "./Context/AuthContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { token, logoutUserAction } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUserAction();
    navigate("/");
  };
  return (
    <>
      <div className="flex gap-3 justify-between items-center  max-h-24 max-w-[1340px] mx-16 my-8 ">
        <ToastContainer />
        <Link to={"/"}>
          <div className="flex">
            <img src={logocorss} alt="logo" />
            <p className=" text-4xl font-bold">
              Perfect<span className=" text-[#B66053] ">Receipe</span>
            </p>
          </div>
        </Link>
        <div>
          <ul className="flex gap-8 font-bold ">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/recipe"}>Recipe</Link>
            </li>
            <li>
              <Link to={"/add-recipe"}>Add Recipe</Link>
            </li>
            <li>
              <Link to={"blog"}>Blog </Link>
            </li>
            <li>
              <Link to={"about-us"}>About Us </Link>
            </li>
          </ul>
        </div>
        {token ? (
          <>
            <div className="flex gap-5 shrink min-h-9 ">
              <FaUserCircle className="w-8 h-8" />
              <button
                className="bg-[#E7EDE7]  min-w-32 rounded-lg hover:scale-110"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <div className="flex gap-5 shrink min-h-9 ">
                <button className="bg-[#E7EDE7]  min-w-32 rounded-lg hover:scale-110">
                  Login
                </button>
              </div>
            </Link>
            <Link to={"/signup"}>
              <div className="flex gap-5 shrink min-h-9">
                <button className="bg-[#B66053] min-w-32  rounded-lg text-white hover:scale-110">
                  Sign Up
                </button>
              </div>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Header;
