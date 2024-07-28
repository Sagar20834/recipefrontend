import React from "react";

import ShareRecipe from "./ShareRecipe";
import TrendingRecipe from "./TrendingRecipe";
import Blog from "./Blog";
import Exploremorerecipe from "./Exploremorerecipe";
import Newsletter from "./Newsletter";
import PopularCategoriesContainer from "./PopularCategoriesContainer";
import Clients from "./Clients";
import Footer from "./Footer";
import FirstPage from "./FirstPage";

const Heropage = () => {
  return (
    <>
      <FirstPage />
      <div className="mx-16 mt-8">
        <ShareRecipe />
        <TrendingRecipe />
        <Blog />
        <Exploremorerecipe />
      </div>
      <Newsletter />
      <div className="mx-16 mt-8">
        <PopularCategoriesContainer />
        <Clients />
      </div>
    </>
  );
};

export default Heropage;
