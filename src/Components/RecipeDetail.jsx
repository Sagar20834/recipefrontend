// src/Components/RecipeDetail.js
import React, { useEffect, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "react-router-dom";
import CardData from "../CardData";
import {
  FaCloud,
  FaCommentDots,
  FaEllipsis,
  FaRegComment,
  FaRegHeart,
  FaShareNodes,
  FaStarHalf,
  FaStarHalfStroke,
  FaUser,
} from "react-icons/fa6";
import {
  FaBookmark,
  FaCalendar,
  FaComment,
  FaNode,
  FaPrint,
  FaRegBookmark,
  FaSave,
  FaShare,
  FaStar,
  FaTree,
} from "react-icons/fa";
import RecipeCard from "./RecipeCard";
import NutritionFacts from "./NutritionFacts";
import RecentRecipes from "./RecentRecipes";
import StayConnected from "./StayConnected";
import RelatedRecipes from "./RelatedRecipes";
import RelatedProduct from "./RelatedProduct";
import OnclickMovetoTop from "./OnclickMovetoTop";

const RecipeDetail = () => {
  const nameofrecipe = new URLSearchParams(location.search).get("name");
  const params = useParams();
  const [cardDatas, setCardDatas] = useState({ CardData });
  const [checkedIngredients, setCheckedIngredients] = useState([]);

  useEffect(() => {
    {
      CardData.map((data) => {
        if (nameofrecipe === data.title) {
          setCardDatas({
            cal: data.cal,
            comment: data.comment,
            calimage: data.calimage,
            name: data.name,
            username: data.name,
            servings: data.servings,
            cookingnote: data.cookingnote,
            cookinghour: data.cookinghour,
            cookingminute: data.cookingminute,
            prephour: data.prephour,
            prepminute: data.prepminute,
            cuisine: data.cuisine,
            collection: data.collection,
            ingredients: data.ingredients,
            instructions: data.instructions,
            star: data.star,
            title: data.title,
            userimage: data.userimage,
            description: data.description,
            steps: data.steps,
            recipeimage: data.image,
            category: data.category,
            id: data.id,
          });
        }
        return cardDatas;
      });
    }
  }, [nameofrecipe]);

  // const onclickhandletoit = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth", // Optional: smooth scroll animation
  //   });
  // };
  const handleCheckboxChange = (ingredient) => {
    setCheckedIngredients((prevCheckedIngredients) =>
      prevCheckedIngredients.includes(ingredient)
        ? prevCheckedIngredients.filter((item) => item !== ingredient)
        : [...prevCheckedIngredients, ingredient]
    );
  };
  //   console.log(title);
  //   console.log(params);
  return (
    <div className="container   mx-auto px-8 ">
      <h1 className="text-xl font-bold">
        <Breadcrumb className="inline-block" />
      </h1>
      <div className="mt-4 ">
        <h1 className="text-5xl mb-4 max-w-[60%]">{cardDatas.title}</h1>
        <div className="flex flex-wrap gap-6 text-sm font-medium">
          <div className="flex  gap-2  items-center">
            <FaUser className="text-[#B66053]" />
            <span>Author name</span>
          </div>
          <div className="flex gap-2  items-center">
            <FaCalendar className="text-[#B66053]" />
            <span>July 22,2024</span>
          </div>
          <div className="flex gap-2  items-center">
            <FaComment className="text-[#B66053]" />
            <span>22 Comments</span>
          </div>
          <div className="flex gap-2  items-center">
            <FaBookmark className="text-[#B66053]" />
            <span>July 22,2024</span>
          </div>
          <div className="flex gap-2  items-center mr-12">
            <FaStar className="text-[#B66053]" />
            <FaStar className="text-[#B66053]" />
            <FaStar className="text-[#B66053]" />
            <FaStar className="text-[#B66053]" />
            <FaStarHalfStroke className="text-[#B66053]" />
            <sup>4.0/10 reviews </sup>
          </div>
          <div className="flex justify-center mx-auto flex-wrap gap-32 ">
            <FaRegBookmark className="min-w-10 min-h-10  bg-[#E7EDE7] border rounded-md p-1 text-[#B66053]" />
            <FaShareNodes className="min-w-10 min-h-10  text-[#B66053]" />
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div className="flex gap-8 w-full">
        <div className=" leftside max-w-[65%]">
          <img
            className="w-full max-h-[456px] object-cover border-2 border-violet-100 mb-9"
            src={cardDatas.recipeimage}
            alt="Recipe image"
          />
          <div className="flex gap-4 justify-around mx-16 mb-6">
            <div>
              <h1 className="font-bold text-gray-400">Prep. Time :</h1>
              <span className="font-bold">20 minutes</span>
            </div>
            <div className="h-12 w-1 bg-gray-200"></div>
            <div>
              <h1 className="font-bold text-gray-400">Cook Time :</h1>
              <span className="font-bold">5 minutes</span>
            </div>
            <div className="h-12 w-1 bg-gray-200"></div>
            <div>
              <h1 className="font-bold text-gray-400">Servings :</h1>
              <span className="font-bold">20 minutes</span>
            </div>
            <div className="flex justify-center items-center">
              <button className="flex items-center gap-2 text-[#B66053] border-2 p-2 rounded-md border-[#B66053]">
                {" "}
                <FaPrint /> Print Recipe
              </button>
            </div>
          </div>
          <h1 className="font-medium text-sm mb-4">{cardDatas.description} </h1>
          <h1 className="text-4xl mb-4">Ingredients : </h1>
          <ul className="list-none ">
            {console.log(cardDatas.ingredients, "hii")}
            {cardDatas.ingredients
              ? cardDatas.ingredients.map((ingredient, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 font-bold text-lg mb-2 cursor-pointer w-3/4"
                  >
                    <input
                      className="accent-[#B66053] w-5 h-5 border rounded-lg cursor-pointer"
                      type="checkbox"
                      checked={checkedIngredients.includes(ingredient.name)}
                      onChange={() => handleCheckboxChange(ingredient.name)}
                    />
                    <span
                      onClick={() => handleCheckboxChange(ingredient.name)}
                      className={
                        checkedIngredients.includes(ingredient.name)
                          ? "line-through text-gray-400"
                          : ""
                      }
                    >
                      {ingredient.name}
                    </span>
                  </li>
                ))
              : "Loading ingredients..."}
          </ul>

          <h1 className="text-4xl mb-4">Instructions : </h1>
          <ol className="text-lg ">
            {cardDatas.instructions
              ? cardDatas.instructions.map((instruction, i) => (
                  <li key={i} className="  flex items-start gap-4 mb-6">
                    <span className="bg-[#B66053] text-white rounded-md min-w-6 min-h-6 flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="font-medium text-base">
                      {instruction.text}
                    </span>
                  </li>
                ))
              : "Loading instructions..."}
          </ol>

          <div
            className="small-container xl:flex-nowrap min-[320px]:flex-wrap
            sm:flex-wrap bg-[#F5F5F5] max-w-[85%] p-6"
          >
            <div
              className="flex gap-1 xl:flex-nowrap min-[320px]:flex-wrap
            sm:flex-wrap  "
            >
              <div>
                <img
                  src={cardDatas.recipeimage}
                  alt="Recipe image"
                  className="max-w-52 mb-4"
                />
                <div className="flex justify-center items-center">
                  <FaStar className="text-[#B66053]" />
                  <FaStar className="text-[#B66053]" />
                  <FaStar className="text-[#B66053]" />
                  <FaStar className="text-[#B66053]" />
                  <FaStarHalfStroke className="text-[#B66053]" />
                  <p className="ml-2 ">4.0/10 reviews </p>
                </div>
              </div>

              <div>
                <h1 className="text-4xl mb-4">{cardDatas.title}</h1>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 ">
                  <div className="flex gap-1 justify-center items-center">
                    <FaUser className="text-[#B66053]" />
                    <span>Author name</span>
                  </div>
                  <div className="flex gap-1 justify-center items-center">
                    <FaCalendar className="text-[#B66053]" />
                    <span>July 22,2024</span>
                  </div>
                  <div className="flex gap-1 justify-center items-center">
                    <FaCloud className="text-[#B66053]" />
                    <span>Dinner, Salad</span>
                  </div>
                  <div className="flex gap-1 justify-center items-center">
                    <FaComment className="text-[#B66053]" />
                    <span>22 Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="button flex gap-2 xl:flex-nowrap min-[320px]:flex-wrap
            sm:flex-wrap  max-w-[100%] mt-2 mx-auto"
            >
              <button className="flex justify-center items-center  gap-2 bg-[#B66053] p-1 border rounded-xl text-white h-8 w-full">
                <FaPrint className="rounded-md text-white" />
                Print Recipe
              </button>
              <button className="flex justify-center items-center  gap-2 bg-[#B66053] p-1 border rounded-xl text-white h-8 w-full">
                <FaRegBookmark className="rounded-md  text-white" />
                Add to Favourite
              </button>
              <button className="flex justify-center items-center  gap-2 bg-[#B66053] p-1 border rounded-xl text-white h-8 w-full">
                <FaShareNodes className="rounded-md  text-white" />
                Share Recipe
              </button>
            </div>
            <hr className="my-6 " />
            <h1 className="text-4xl mb-4">Ingredients : </h1>
            <ul className="list-none ">
              {console.log(cardDatas.ingredients)}
              {cardDatas.ingredients
                ? cardDatas.ingredients.map((ingredient, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 font-bold text-lg mb-2 cursor-pointer w-3/4"
                    >
                      <input
                        className="accent-[#B66053] w-5 h-5 border rounded-lg cursor-pointer"
                        type="checkbox"
                        checked={checkedIngredients.includes(ingredient.name)}
                        onChange={() => handleCheckboxChange(ingredient.name)}
                      />
                      <span
                        onClick={() => handleCheckboxChange(ingredient.name)}
                        className={
                          checkedIngredients.includes(ingredient.name)
                            ? "line-through text-gray-400"
                            : ""
                        }
                      >
                        {ingredient.name}
                      </span>
                    </li>
                  ))
                : "Loading ingredients..."}
            </ul>

            <h1 className="text-4xl mb-4">Instructions : </h1>
            <ol className="text-lg ">
              {cardDatas.instructions
                ? cardDatas.instructions.map((instruction, i) => (
                    <li key={i} className="  flex items-start gap-4 mb-2">
                      <span className="bg-[#B66053] text-white rounded-md min-w-6 min-h-6 flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="font-semibold text-base">
                        {instruction.text}
                      </span>
                    </li>
                  ))
                : "Loading instructions..."}
            </ol>
            <h1 className="text-4xl mb-4">Cooking Notes : </h1>
            <ol className="text-lg ">
              {cardDatas.cookingnote
                ? cardDatas.cookingnote.map((cn, i) => (
                    <li key={i} className="  flex items-start gap-4 mb-2">
                      <span className="bg-[#B66053] text-white rounded-md min-w-6 min-h-6 flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="font-semibold text-base">{cn.text}</span>
                    </li>
                  ))
                : "Loading Notes..."}
            </ol>
          </div>
          <div className="h-1 w-full bg-[#B66053] mt-10"></div>

          <h1 className="text-5xl my-4">Comment </h1>
          <div className="flex flex-col  sm:flex-wrap md:flex-wrap min-[320px]:flex-wrap">
            <div className="w-[90%]">
              <hr className="my-6" />
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex gap-3">
                  <img
                    alt="user image
            "
                    src={cardDatas.userimage}
                    className="h-16  w-16 border-2 border-gray rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-xl">{cardDatas.username}</h2>
                    <p className="text-gray-600 text-base">40 min ago</p>
                  </div>
                </div>
                <FaEllipsis className="mr-4" />
              </div>
              <p className="text-lg mt-8 ml-36">{cardDatas.comment}</p>
              <div className="ml-36">
                <div className="flex justify-start gap-12 mt-4">
                  <div className="flex items-center gap-2">
                    {" "}
                    <FaRegComment className="text-[#B66053]" />
                    <span>Reply</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {" "}
                    <FaRegHeart className="text-[#B66053]" />
                    <span>Comment</span>
                  </div>
                </div>
                <hr className="my-2" />
                <div></div>
              </div>
              <div className="ml-44">
                <div className="flex gap-2 justify-between items-center ">
                  <div className="flex gap-3">
                    <img
                      alt="user image
            "
                      src={cardDatas.userimage}
                      className="h-16  w-16 border-2 border-gray rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-xl">{cardDatas.username}</h2>
                      <p className="text-gray-600 text-base">40 min ago</p>
                    </div>
                  </div>
                  <FaEllipsis className="mr-4" />
                </div>
                <p className="text-lg mt-8 ml-36">{cardDatas.comment}</p>
                <div className="ml-36">
                  <div className="flex justify-start gap-12 mt-4">
                    <div className="flex items-center gap-2">
                      {" "}
                      <FaRegComment className="text-[#B66053]" />
                      <span>Reply</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {" "}
                      <FaRegHeart className="text-[#B66053]" />
                      <span>Comment</span>
                    </div>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
            <div>
              <hr className="my-6" />
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex gap-3">
                  <img
                    alt="user image
            "
                    src={cardDatas.userimage}
                    className="h-16  w-16 border-2 border-gray rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-xl">{cardDatas.username}</h2>
                    <p className="text-gray-600 text-base">40 min ago</p>
                  </div>
                </div>
                <FaEllipsis className="mr-4" />
              </div>
              <p className="text-lg mt-8 ml-36">{cardDatas.comment}</p>
              <div className="ml-36">
                <div className="flex justify-start gap-12 mt-4">
                  <div className="flex items-center gap-2">
                    {" "}
                    <FaRegComment className="text-[#B66053]" />
                    <span>Reply</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {" "}
                    <FaRegHeart className="text-[#B66053]" />
                    <span>Comment</span>
                  </div>
                </div>
                <hr className="my-2" />
                <div></div>
              </div>
              <div className="ml-44">
                <div className="flex gap-2 justify-between items-center ">
                  <div className="flex gap-3">
                    <img
                      alt="user image
            "
                      src={cardDatas.userimage}
                      className="h-16  w-16 border-2 border-gray rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-xl">{cardDatas.username}</h2>
                      <p className="text-gray-600 text-base">40 min ago</p>
                    </div>
                  </div>
                  <FaEllipsis className="mr-4" />
                </div>
                <p className="text-lg mt-8 ml-36">{cardDatas.comment}</p>
                <div className="ml-36">
                  <div className="flex justify-start gap-12 mt-4">
                    <div className="flex items-center gap-2">
                      {" "}
                      <FaRegComment className="text-[#B66053]" />
                      <span>Reply</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {" "}
                      <FaRegHeart className="text-[#B66053]" />
                      <span>Comment</span>
                    </div>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-row-reverse items-center  ">
              <button className="  bg-white h-12 p-2  rounded-lg hover:scale-110 text-[#B66053] border border-[#B66053  ]  ">
                Load more Comments
              </button>
            </div>
          </div>
          <div className="review-recipe flex flex-col gap-4">
            <div>
              {" "}
              <h1 className="text-2xl font-semibold mt-4">
                Rate this Recipe and share your openion
              </h1>
            </div>
            <div className="flex gap-2">
              <FaStar className="text-[#B66053]" />
              <FaStar className="text-[#B66053]" />
              <FaStar className="text-[#B66053]" />
              <FaStar className="text-[#B66053]" />
              <FaStarHalfStroke className="text-[#B66053]" />
            </div>
            <div>
              <textarea
                className="w-full h-32 border-2 border-gray rounded-md p-4 bg-gray-100"
                placeholder="Write your review here..."
              ></textarea>
            </div>
            <div className="flex flex-row-reverse">
              <button className="bg-[#B66053]  text-gray-100 min-w-32  h-12 rounded-lg hover:scale-110">
                Post
              </button>
            </div>
          </div>

          <div className="mb-16">
            <h1 className="text-2xl font-semibold mt-4">You might like this</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 ">
              {CardData.map((card) => {
                return (
                  <div onClick={OnclickMovetoTop} key={card.id}>
                    {
                      <RecipeCard
                        id={card.id}
                        star={card.star}
                        title={card.title}
                        image={card.image}
                        width={240}
                      />
                    }
                  </div>
                );
                console.log(card);
              })}
            </div>
          </div>
        </div>

        <div className="rightside w-full ml-8">
          <NutritionFacts />
          <h1 className="mt-8 text-3xl font-semibold">Recent Recipes</h1>
          <RecentRecipes title={nameofrecipe} />
          <StayConnected />
          <h1 className="my-8 text-3xl font-semibold">Related Recipes</h1>
          <RelatedRecipes />
          <h1 className="my-8 text-3xl font-semibold">Trending Recipes</h1>
          <RecentRecipes title={nameofrecipe} />
          <RelatedProduct />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
