import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { useLocation } from "react-router-dom";

function RecipePage({ addToCart, search }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("search") || search || "";

  const fetchRecipes = async (query) => {
    try {
      setIsLoading(true);
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      setRecipes(res.data.meals || []);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(query);
  }, [query]);

  return (
    <div className="container py-4">
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {recipes.length === 0 ? (
            <p className="text-center text-muted">No recipes found.</p>
          ) : (
            recipes.map((recipe) => (
              <div key={recipe.idMeal} className="col-12 col-sm-6 col-lg-4">
                <RecipeCard recipe={recipe} addToCart={addToCart} isLoading={isLoading} setIsLoading={setIsLoading} />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default RecipePage;
