import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { loginUserAction, state } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = async (formData) => {
    loginUserAction(formData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="max-w-[420px] min-h-52 shadow-2xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center flex-col m-8 p-2 gap-2"
      >
        <span className="text-xl font-bold mb-8 text-center">
          Please Enter the Credentials
        </span>

        <div className="relative border-b-[1px] flex items-center focus-within:border-b-2 focus-within:border-[#B66053] w-full">
          <FaEnvelope className="w-6 h-6 absolute pointer-events-none text-gray-200" />
          <input
            className="h-12 ml-6 rounded  py-2 px-3 text-black font-medium leading-tight focus:outline-none w-full"
            type="email"
            {...register("email", {
              // required: "Email required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Must be a valid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="Email Address"
          />
          {errors.email && (
            <p role="alert" className="absolute top-2 -right-8 text-red-600">
              ** {errors.email.message}
            </p>
          )}
        </div>

        <div className="relative border-b-[1px] flex items-center focus-within:border-b-2 focus-within:border-[#B66053] w-full  ">
          <FaLock className="w-6 h-6 absolute pointer-events-none text-gray-200" />
          <input
            className="h-12  ml-6 rounded w-full py-2 px-3 text-black font-medium leading-tight focus:outline-none"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              // required: "Password required",
            })}
            aria-invalid={errors.password ? "true" : "false"}
            placeholder="Password"
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

        <div className="flex gap-5 shrink">
          <button
            type="submit"
            className="flex bg-[#E7EDE7] min-w-32 rounded-lg text-black hover:scale-110 justify-center items-center text-center m-auto min-h-9 my-4"
          >
            Login
          </button>
        </div>
        <span className="flex justify-center m-auto items-center">
          Or New User?
        </span>
        <div className="flex gap-5 shrink">
          <Link
            to={"/signup"}
            className="flex bg-[#B66053] min-w-32 rounded-lg text-white hover:scale-110 justify-center items-center text-center m-auto min-h-9 my-4"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
