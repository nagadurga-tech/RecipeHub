import React from "react";

function CustomAlert({ message, onClose }) {
  return (
    <div className="custom-alert-overlay">
      <div className="custom-alert-box rounded shadow-lg">
        <p className="fw-semibold mb-3">{message}</p>
        <button
          className="btn btn-warning fw-bold px-4 py-2 rounded-pill"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default CustomAlert;

