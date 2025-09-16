import React, { useEffect } from "react";
import "./SuccessAlert.css";

function CustomAlert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 8000); // auto close after 8 sec
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="custom-alert card shadow-sm border-0 p-3">
      <p className="mb-0 text-dark fw-semibold">{message}</p>
    </div>
  );
}

export default CustomAlert;
