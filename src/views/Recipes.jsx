import React, { useEffect, useState } from "react";
import MyModal from "../components/MyModal";
import MyGrid from "../components/MyGrid";
import { Button } from "react-bootstrap";
import "./Recipes.css";

const Recipes = ({}) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [recipes, setRecipes] = useState([]);
  const [show, setShow] = useState(false);
  const [chosenRecipe, setChosenRecipe] = useState(null);
  const [inputText, setInputText] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 24; // Number of items to display per page

  const handleOpen = (recipe) => {
    setChosenRecipe(recipe);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  console.log("in recipes");

  const ingredients = "tomato";

  const url = new URL(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&intolerances=gluten&offset=${
      (currentPage - 1) * itemsPerPage
    }&number=${itemsPerPage}&addRecipeInformation=true&includeIngredients=true&instructionsRequired=true`
  );

  const searchRecipes = async () => {
    try {
      url.searchParams.append("apiKey", apiKey);

      const response = await fetch(url);

      if (response.ok) {
        const result = await response.json();
        const recipesArray = result.results;
        setRecipes(recipesArray);
      } else {
        throw new Error("API request failed");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error.message);
    }
  };

  //!MY Search-Filter-section
  const filterRecipes = () => {
    if (!inputText) {
      return recipes;
    }

    const normalisedInputText = inputText.toLowerCase();

    return recipes.filter((recipe) => {
      const normalisedRecipeTitle = recipe.title.toLowerCase();
      return normalisedRecipeTitle.includes(normalisedInputText);
    });
  };
  const filteredRecipes = filterRecipes();

  console.log("filteredRecipes :>> ", filteredRecipes);
  const handleInputChange = (e) => {
    setInputText(e.target.value);
    console.log("inputText :>> ", e.target.value);
  };

  //!PAGINATION:
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    searchRecipes();
  }, [currentPage]);

  return (
    <div className="recipes-container">
      <h2>
        Welcome to the Cook`cinelle recipe-App! Enjoy glutenfree recipes and if
        you want: find them by ingredients:
      </h2>
      <div className="search-bar">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="serach by ingredient"
        />
      </div>
      {/* {recipes && <MyGrid recipes={filterRecipes} />} */}
      <div className="cards-wrapper">
        {Array.isArray(filteredRecipes) && <MyGrid recipes={filteredRecipes} />}
      </div>{" "}
      <div className="pagination">
        <Button
          variant="secondary"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </Button>
        <Button variant="secondary" onClick={handleNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Recipes;
