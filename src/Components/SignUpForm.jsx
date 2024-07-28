import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logocorss from "../assets/logocross.svg";
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaLock,
  FaUser,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [savedData, setSavedData] = useState(() => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [];
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Check if email already exists
    const emailExists = savedData.some((user) => user.email === data.email);

    if (emailExists) {
      toast.error("A user with this email already exists");
    } else {
      setSavedData([...savedData, data]);
      localStorage.setItem("user", JSON.stringify([...savedData, data]));
      toast.success("Sign up successful! Redirecting to login page...");
      reset({
        fullname: "",
        email: "",
        password: "",
        repassword: "",
        checkboxterm: false,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRePasswordVisibility = () => {
    setShowRePassword(!showRePassword);
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col justify-between md:w-[480px]">
        <form
          className="items-center max-w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl font-bold mb-8">
            Welcome to Join our Family
          </h1>

          <div className="relative border-b-[1px] flex items-center focus-within:border-b-2 focus-within:border-[#B66053]">
            <FaUser className="w-6 h-6 absolute pointer-events-none text-gray-200" />
            <input
              className="h-12 w-90 ml-6 rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none"
              type="text"
              {...register("fullname", {
                required: "fullname is required",
                maxLength: {
                  value: 25,
                  message: "Max length is 25",
                },
                minLength: {
                  value: 8,
                  message: "Min length is 8",
                },
              })}
              aria-invalid={errors.fullname ? "true" : "false"}
              placeholder="Enter the fullname"
            />
            {errors.fullname && (
              <p role="alert" className="absolute top-2 -right-8 text-red-600">
                ** {errors.fullname.message}
              </p>
            )}
          </div>

          <div className="relative border-b-[1px] flex items-center focus-within:border-b-2 focus-within:border-[#B66053]">
            <FaEnvelope className="w-6 h-6 absolute pointer-events-none text-gray-200" />
            <input
              className="h-12 w-90 ml-6 rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none"
              type="email"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Must be a valid email address",
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="Enter the Email Address"
            />
            {errors.email && (
              <p role="alert" className="absolute top-2 -right-8 text-red-600">
                ** {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative border-b-[1px] flex items-center focus-within:border-b-2 focus-within:border-[#B66053]">
            <FaLock className="w-6 h-6 absolute pointer-events-none text-gray-200" />
            <input
              className="h-12 w-90 ml-6 rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                maxLength: {
                  value: 25,
                  message: "Max length is 25",
                },
                minLength: {
                  value: 8,
                  message: "Min length is 8",
                },
              })}
              aria-invalid={errors.password ? "true" : "false"}
              placeholder="Enter the Password"
            />
            <button
              type="button"
              className="absolute right-0 top-8 pr-3 text-gray-400"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p role="alert" className="absolute top-2 -right-8 text-red-600">
                ** {errors.password.message}
              </p>
            )}
          </div>

          <div className="relative border-b-[1px] flex items-center focus-within:border-b-2 focus-within:border-[#B66053]">
            <FaLock className="w-6 h-6 absolute pointer-events-none text-gray-200" />
            <input
              className="h-12 w-90 ml-6 rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none"
              type={showRePassword ? "text" : "password"}
              {...register("repassword", {
                required: "Re-Password is required",
                maxLength: {
                  value: 25,
                  message: "Max length is 25",
                },
                minLength: {
                  value: 8,
                  message: "Min length is 8",
                },
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              aria-invalid={errors.repassword ? "true" : "false"}
              placeholder="Re-Enter the Password"
            />
            <button
              type="button"
              className="absolute right-0 top-8 pr-3 text-gray-400"
              onClick={toggleRePasswordVisibility}
            >
              {showRePassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.repassword && (
              <p role="alert" className="absolute top-2 -right-8 text-red-600">
                ** {errors.repassword.message}
              </p>
            )}
          </div>

          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input
              className="mr-2 mt-8 leading-tight accent-[#B66053]"
              type="checkbox"
              {...register("checkbox", { required: true })}
            />
            <span className="text-sm">I agree to terms and policy</span>
          </label>
          {errors.checkbox && (
            <p role="alert" className="text-red-600">
              ** You must agree to the terms and policy
            </p>
          )}

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
            <p>Sign in with Facebook</p>
          </div>
        </div>
        <p className="mt-4">
          Already have an account?
          <Link to={"/login"} className="text-[#B66053] ml-2">
            Log in
          </Link>
        </p>
        <div className="flex justify-end">
          <img src={logocorss} alt="logo" />
          <p className=" text-2xl font-bold">
            Perfect<span className=" text-[#B66053]">Receipe</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
