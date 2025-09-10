import React from "react";

function CheckoutPage({ cart, removeFromCart, updateQuantity }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * 200, 0);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-muted fs-5">Your cart is empty.</p>
      ) : (
        <div className="row g-4">
          {cart.map((item) => (
            <div key={item.idMeal} className="col-12 col-sm-6 col-lg-4 d-flex">
              <div className="card shadow-lg border-0 rounded-4 flex-fill h-100">
                {/* Image */}
                <img
                  src={item.strMealThumb}
                  className="card-img-top rounded-top"
                  alt={item.strMeal}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                {/* Body */}
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="fw-bold text-truncate">{item.strMeal}</h5>
                  <p className="text-muted small mb-2">🍴 {item.strCategory}</p>

                  {/* Quantity Controls */}
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <button
                      className="btn btn-sm btn-outline-secondary rounded-circle"
                      onClick={() => updateQuantity(item.idMeal, -1)}
                    >
                      ➖
                    </button>
                    <span className="fw-bold mx-3">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary rounded-circle"
                      onClick={() => updateQuantity(item.idMeal, 1)}
                    >
                      ➕
                    </button>
                  </div>

                  {/* Price */}
                  <p className="fw-semibold fs-6 mb-2">₹{item.quantity * 200}</p>

                  {/* Remove Button */}
                  <button
                    className="btn btn-danger btn-sm rounded-pill shadow-sm"
                    onClick={() => removeFromCart(item.idMeal)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Total Section */}
      {cart.length > 0 && (
        <div className="text-center mt-5 p-4 bg-light rounded-4 shadow-sm">
          <h4 className="fw-bold mb-3">Total: ₹{totalPrice}</h4>
          <button className="btn btn-success btn-lg px-4 rounded-pill shadow">
             Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
