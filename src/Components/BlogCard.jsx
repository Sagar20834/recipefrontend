import React from "react";
import img2 from "../assets/Unlocking the Benefits of Intermittent Fasting for .png";
import img1 from "../assets/The Impact of Sugar Consumption on Your Health.png";

const BlogCard = () => {
  return (
    <div className="grid grid-cols-2 mt-4 justify-items-center gap-6">
      <div className=" h-auto max-w-[520px] flex justify-center items-center  shadow-md">
        <div className="">
          <img src={img2} alt=" imageod health" className="h-auto" />
          <h1 className=" text-xl p-1 flex  justify-center items-center">
            Unlocking the Benefits of Intermittent Fasting for
          </h1>
          <p className="px-4 pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aperiam doloribus culpa eaque molestiae sit ex labore ullam officia,
            adipisci consequuntur, blanditiis maiores voluptate maxime! A
            repudiandae repellendus .
          </p>
        </div>
      </div>
      <div className=" h-auto max-w-[520px] flex justify-center items-center  shadow-md">
        <div className="">
          <img src={img1} alt=" imageod health" className="h-auto" />
          <h1 className=" text-xl p-1 flex  justify-center items-center">
            The Impact of Sugar Consumption on Your Health
          </h1>
          <p className="px-4 pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aperiam doloribus culpa eaque molestiae sit ex labore ullam officia,
            adipisci consequuntur, blanditiis maiores voluptate maxime! A
            repudiandae repellendus .
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
