import React from "react";

function RecipeCard({ recipe, addToCart, isLoading, setIsLoading }) {
  const handleOrder = () => {
    setIsLoading(true);
    addToCart(recipe);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <div className="card recipe-card h-100 shadow border-0 rounded-4 overflow-hidden">
      <div className="image-wrapper">
        <img src={recipe.strMealThumb} className="card-img-top recipe-image" alt={recipe.strMeal} />
      </div>
      <div className="card-body text-center d-flex flex-column justify-content-between">
        <h5 className="card-title text-dark fw-bold">{recipe.strMeal}</h5>
        <p className="card-text text-secondary small mb-3">🍴 {recipe.strCategory}</p>
        <button className="btn btn-warning px-4 py-2 fw-semibold rounded-pill shadow-sm" onClick={handleOrder} disabled={isLoading}>
          {isLoading ? " Processing..." : " Order Now"}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
