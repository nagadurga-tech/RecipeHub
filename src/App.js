import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import RecipePage from "./RecipePage";
import CheckoutPage from "./CheckoutPage";
import Navbar from "./Navbar";

function App() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (recipe) => {
    const existing = cart.find((item) => item.idMeal === recipe.idMeal);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.idMeal === recipe.idMeal
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...recipe, quantity: 1 }]);
    }
  };

  const removeFromCart = (idMeal) => {
    setCart(cart.filter((item) => item.idMeal !== idMeal));
  };

  const updateQuantity = (idMeal, amount) => {
    setCart(
      cart
        .map((item) =>
          item.idMeal === idMeal
            ? { ...item, quantity: Math.max(1, item.quantity + amount) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <Navbar cart={cart} search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipePage addToCart={addToCart} search={search} />} />
        <Route
          path="/checkout"
          element={<CheckoutPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}
        />
      </Routes>
    </>
  );
}

export default App;
