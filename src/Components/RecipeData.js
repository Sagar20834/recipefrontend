// RecipesData.js

const saveRecipeData = (data) => {
  // Assuming you want to store recipes in localStorage
  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  recipes.push(data);
  localStorage.setItem("recipes", JSON.stringify(recipes));
  console.log("Recipe data saved successfully");
};

export default saveRecipeData;
