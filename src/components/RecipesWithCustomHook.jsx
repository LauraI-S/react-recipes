// import React from "react";
// import useMyfetch from "../hooks/useMyfetch";

// function RecipesWithCustomHook() {
//   const recipesData = useMyfetch(
//     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&intolerances=gluten&offset=${
//       (currentPage - 1) * itemsPerPage
//     }&number=${itemsPerPage}&addRecipeInformation=true&includeIngredients=true&instructionsRequired=true`
//   );
//   console.log("data :>> ", recipesData.data);
//   const { data, error, loading } = useMyfetch(
//     "https://jsonplaceholder.typicode.com/todos"
//   );

//   console.log("data :>> ", data);
//   return (
//     <>
//       <div>RecipesWithCustomHook</div>
//     </>
//   );
// }

// export default RecipesWithCustomHook;
