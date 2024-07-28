import React from "react";
import {
  FaCopyright,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import logocross from "../assets/logocross.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#E5E5E5] mt-8">
      <div className="main-footer p-4 lg:p-8">
        <div className="first-part flex flex-col lg:flex-row justify-center items-start lg:items-center mx-4 lg:mx-28">
          <div className="w-full lg:w-1/3 p-4 lg:p-8">
            <div className="flex justify-start items-start mb-4">
              <img src={logocross} alt="icon" className="mr-2" />
              <p className="text-2xl lg:text-4xl font-bold">
                Perfect<span className="text-[#A17F74]">Recipe</span>
              </p>
            </div>
            <p className="text-sm lg:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              atque voluptatibus praesentium iure asperiores aspernatur
              perspiciatis mollitia harum qui quasi! Distinctio, quidem.
              Asperiores, quos fugit.
            </p>
          </div>
          <div className="w-full lg:w-1/3 flex flex-wrap lg:flex-nowrap justify-between lg:justify-start items-start gap-4 p-4 lg:p-8">
            <div className="flex flex-col mb-4 lg:mb-0">
              <p className="font-bold">Quick Links</p>
              <Link to="/" className="mt-2">
                Home
              </Link>
              <Link to="/recipe" className="mt-2">
                Recipes
              </Link>
              <Link to="/blog" className="mt-2">
                Blog
              </Link>
            </div>
            <div className="flex flex-col mb-4 lg:mb-0">
              <p className="font-bold">Quick Links</p>
              <Link to="/" className="mt-2">
                Share Recipe
              </Link>
              <Link to="/" className="mt-2">
                About Us
              </Link>
              <Link to="/" className="mt-2">
                Contact
              </Link>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Legal</p>
              <Link to="/" className="mt-2">
                Terms of Use
              </Link>
              <Link to="/" className="mt-2">
                Privacy and cookies
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col justify-center items-center p-4 lg:p-8">
            <h1 className="text-xl lg:text-2xl font-bold">Newsletter</h1>
            <p className="font-medium text-center">
              Subscribe to our newsletter to get more free tips
            </p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" Enter Your Email "
              className="h-10 w-full lg:min-w-[23rem] rounded-md mt-5"
            />
            <button className="bg-[#B26357] h-10 w-full lg:min-w-[23rem] mt-5 rounded-lg text-white">
              Subscribe
            </button>
          </div>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 my-8 lg:my-12" />
        <div className="flex flex-col lg:flex-row justify-between items-center mx-4 lg:mx-28">
          <div className="mb-4 lg:mb-0">
            <p className="flex justify-center items-center">
              <FaCopyright className="mr-1" /> 2024 All rights reserved.
            </p>
          </div>
          <div className="flex justify-center lg:justify-between items-center gap-6 lg:gap-10 mb-4 lg:mb-0">
            <Link to="/">
              <FaInstagram size="24px" />
            </Link>
            <Link to="/">
              <FaFacebook size="24px" />
            </Link>
            <Link to="/">
              <FaTwitter size="24px" />
            </Link>
            <Link to="/">
              <FaTiktok size="24px" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
