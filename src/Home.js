import React from "react";

function Hero() {
  const handleOrderClick = () => {
    window.open("/recipes", "_self");
  };

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center text-center text-white"
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="hero-bg"></div>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="position-relative px-3" style={{ zIndex: 2, maxWidth: "700px" }}>
        <h1 className="display-3 fw-bold mb-3">🍲 Discover Delicious Recipes</h1>
        <p className="lead fs-5 mb-4">Explore, order, and enjoy fresh meals crafted with love.</p>
        <button
          className="btn btn-warning btn-lg rounded-pill fw-semibold shadow-sm px-4"
          onClick={handleOrderClick}
        >
          Order Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
