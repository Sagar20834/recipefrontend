import React, { useState, useEffect } from "react";
import CardData from "../CardData";
import { Link } from "react-router-dom";

const RelatedProduct = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === CardData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
    unmount;
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center">Related Product</h1>
      <img
        src={CardData[currentImageIndex].image}
        alt="Product"
        className=" h-80 w-80 object-contain mx-auto"
      />
      <Link to={"/"}>
        <div className="mt-6 flex gap-5 shrink min-h-9">
          <button className="bg-[#B66053] w-full rounded-lg text-white">
            Buy Now
          </button>
        </div>
      </Link>
    </>
  );
};

export default RelatedProduct;
