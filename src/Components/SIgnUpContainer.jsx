import React, { useState } from "react";

import image from "../assets/Loginpageimage.jpeg";

import SignUpForm from "./SignUpForm";

const SIgnUpContainer = () => {
  const [userName, setUserName] = useState("");
  return (
    <div className="  mx-24 mb-8 flex justify-normal items-start gap-4 shadow-2xl p-4">
      <div className="flex gap-4">
        <img src={image} alt="image" className="w-1/2 h-auto object-cover" />

        <SignUpForm />
      </div>
    </div>
  );
};

export default SIgnUpContainer;
