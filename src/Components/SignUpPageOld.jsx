import React, { useState } from "react";
import { FaEnvelope, FaFacebook, FaLock, FaUser } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import logocorss from "../assets/logocross.svg";

const SignUpPageOld = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
    checkboxterm: false,
  });

  const navigate = useNavigate();
  const validate = (input) => {
    if (input.username === "") alert("Please enter a username");
    else if (input.email === "") alert("Please enter the email");
    else if (input.password === "") alert("Please enter the password");
    else if (input.password.length < 8)
      alert("Password should be at least 8 characters long");
    else if (input.password !== input.repassword)
      alert("Passwords do not match");
    else if (!input.checkboxterm)
      alert("Please agree to the terms and conditions");
    else {
      setSavedData([...savedData, input]);
      localStorage.setItem("user", JSON.stringify([...savedData, input]));
      setInput({
        username: "",
        email: "",
        password: "",
        repassword: "",
        checkboxterm: false,
      });
      navigate("/login");
    }
  };

  const initial = localStorage.getItem("user");
  const [savedData, setSavedData] = useState(() => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [];
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(input);
  };

  return (
    <div className="flex  flex-col justify-between  md:w-[480px]">
      <form className="items-center max-w-full" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-8"> Welcome to Join our Family</h1>

        <div className="  border-b-[1px] flex items-center   focus-within:border-b-2 focus-within:border-[#B66053]">
          <FaUser className="w-6 h-6 absolute pointer-events-none text-gray-200" />
          <input
            className="h-12 w-90 ml-6 rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none  "
            type="text"
            name="username"
            id="username"
            placeholder="Enter the Username"
            value={input.username}
            onChange={handleChange}
          />
        </div>

        <div className="border-b-[1px] flex items-center   focus-within:border-b-2 focus-within:border-[#B66053]">
          <FaEnvelope className="w-6 h-6 absolute pointer-events-none text-gray-200" />
          <input
            className="h-12 w-90 ml-6 rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none "
            type="email"
            name="email"
            id="useremail"
            placeholder="Enter the Email Address"
            value={input.email}
            onChange={handleChange}
          />
        </div>
        <div className="border-b-[1px] flex items-center   focus-within:border-b-2 focus-within:border-[#B66053]">
          <FaLock className="w-6 h-6 absolute pointer-events-none text-gray-200" />
          <input
            className="h-12 w-90 ml-6 rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Enter the Password"
            value={input.password}
            onChange={handleChange}
          />
        </div>
        <div className="border-b-[1px] flex items-center   focus-within:border-b-2 focus-within:border-[#B66053]">
          <FaLock className="w-6 h-6 absolute pointer-events-none text-gray-200" />
          <input
            className="h-12 w-90 ml-6 rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none "
            type="password"
            name="repassword"
            id="repassword"
            placeholder="Re-Enter the Password"
            value={input.repassword}
            onChange={handleChange}
          />
        </div>

        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input
            className="mr-2 mt-8 leading-tight accent-[#B66053]"
            type="checkbox"
            name="checkboxterm"
            checked={input.checkboxterm}
            onChange={handleChange}
          />
          <span className="text-sm">I agree to terms and policy</span>
        </label>

        <div className="flex gap-5 shrink min-h-9 my-4">
          <button
            type="submit"
            className="bg-[#B66053] min-w-32 rounded-lg text-white hover:scale-110"
          >
            Sign Up
          </button>
        </div>
      </form>
      <p>Or You can join with </p>
      <div className="flex gap-5 justify-around mt-2">
        <div className="flex justify-center items-center gap-2 border-2 border-gray-400 rounded p-2 w-1/2">
          <FaGoogle />
          <p>Sign in with Google</p>
        </div>
        <div className="flex justify-center items-center gap-2 border-2 border-gray-400 rounded p-2 w-1/2">
          <FaFacebook />
          <p>Sign in with Google</p>
        </div>
      </div>
      <p className="mt-4">
        Already have an account
        <Link to={"/login"} className="text-[#B66053] ml-2">
          Log in
        </Link>
      </p>
      <div className="flex justify-end">
        <img src={logocorss} alt="logo" />
        <p className=" text-2xl font-bold">
          Perfect<span className=" text-[#B66053] ">Receipe</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPageOld;
