import React, { useState } from "react";
import CustomAlert from "./CustomAlert";  

function OrderForm({ onClose }) {
  const [form, setForm] = useState({ name: "", address: "", phone: "" });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.phone) return;

    // Save order details
    localStorage.setItem("lastOrder", JSON.stringify(form));

    setShowAlert(true);
  };

  return (
    <div className="order-form-overlay">
      <div className="order-form-container rounded shadow-lg">
        <h3 className="text-center mb-4"> Enter Delivery Details</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="form-control form-control-lg"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="form-control form-control-lg"
            />
          </div>
          <div className="mb-3">
            <textarea
              name="address"
              placeholder="Delivery Address"
              value={form.address}
              onChange={handleChange}
              className="form-control form-control-lg"
              rows="4"
            ></textarea>
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-success btn-lg">
              Confirm Order
            </button>
          </div>
        </form>
      </div>

      {showAlert && (
        <CustomAlert
          message={` Order placed!\n\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}`}
          onClose={() => {
            setShowAlert(false);
            onClose();
          }}
        />
      )}
    </div>
  );
}

export default OrderForm;
