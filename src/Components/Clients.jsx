import React from "react";
import nescafe from "../assets/nescafe.svg";

const Clients = () => {
  return (
    <div className="mx-32 my-48">
      <div className="flex flex-wrap justify-center gap-4">
        {[...Array(7)].map((_, index) => (
          <img
            key={index}
            src={nescafe}
            alt={`nescafe${index + 1}`}
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
