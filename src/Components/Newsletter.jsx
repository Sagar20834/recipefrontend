import React from "react";

const Newsletter = () => {
  return (
    <div className="my-24 bg-[#FFF0ED] min-h-[335px] flex flex-col justify-center items-center gap-6 p-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Let's Stay in Touch!
      </h1>
      <p className="text-[16px] md:text-[18px] font-bold text-[#898992] text-center">
        Join our newsletter, so that we reach out to you with our news and
        offers
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-lg">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className="h-10 w-full md:min-w-[23rem] rounded-md p-2"
        />
        <button className="bg-[#B26357] w-[400px] lg:w-[900px] xl:w-[900px] md:w-[900px] min-h-12 rounded-lg my-5 md:my-0 text-white p-3">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
