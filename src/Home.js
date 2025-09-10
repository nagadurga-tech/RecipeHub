import React from "react";

function Home() {
  const handleOrderClick = () => {
    window.open("/recipes", "_self");
  };

  return (
    <div
      className="min-vh-100 text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // 👈 keeps background fixed
      }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: "90vh", backgroundColor: "rgba(0,0,0,0.4)" }} // 👈 overlay for better text contrast
      >
        <h1 className="display-4 fw-bold">Delicious Recipes Await!</h1>
        <p className="lead">Order from a variety of amazing dishes.</p>
        <button
          className="btn btn-warning btn-lg mt-3 rounded-pill fw-semibold shadow-sm"
          onClick={handleOrderClick}
        >
           Order Now
        </button>
      </div>
    </div>
  );
}

export default Home;
