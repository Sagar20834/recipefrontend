import React from "react";

const NutritionFacts = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] p-8 ">
        <h1 className="text-2xl font-bold">Nutrition Facts</h1>
        <div className="flex justify-between items-center mb-2  border-gray-300 border-b-[1px]">
          <h1 className="text-xl ">Calories</h1>
          <span className="text-xl font-semibold">494</span>
        </div>
        <div className="flex justify-between items-center mb-2  border-gray-300 border-b-[1px]">
          <h1 className="text-xl ">Carbs</h1>
          <span className="text-xl font-semibold">80g</span>
        </div>
        <div className="flex justify-between items-center mb-2  border-gray-300 border-b-[1px]">
          <h1 className="text-xl ">Fat</h1>
          <span className="text-xl font-semibold">18g</span>
        </div>
        <div className="flex justify-between items-center mb-2  border-gray-300 border-b-[1px]">
          <h1 className="text-xl ">Protein</h1>
          <span className="text-xl font-semibold">24g</span>
        </div>
        <div className="flex justify-between items-center mb-2  border-gray-300 border-b-[1px]">
          <h1 className="text-xl ">Fiber</h1>
          <span className="text-xl font-semibold">23g</span>
        </div>
        <div className="flex justify-between items-center mb-2  border-gray-300 border-b-[1px]">
          <h1 className="text-xl ">Net Carbs</h1>
          <span className="text-xl font-semibold">56g</span>
        </div>
        <div className="flex justify-between items-center mb-2  border-gray-300 border-b-[1px]">
          <h1 className="text-xl ">Sodium</h1>
          <span className="text-xl font-semibold">444mg</span>
        </div>
        <div className="flex justify-between items-center mb-2  border-gray-300 border-b-[1px]">
          <h1 className="text-xl ">Cholesterol</h1>
          <span className="text-xl font-semibold">0mg</span>
        </div>
      </div>
    </>
  );
};

export default NutritionFacts;
