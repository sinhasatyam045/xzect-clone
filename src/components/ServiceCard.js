import React from "react";
import "../App.css";

const ServiceCard = ({ imageSrc, serviceName }) => {
  return (
    <div className="card">
      <img style={{ borderRadius: "8px" }} src={imageSrc} alt={serviceName} />
      <h3>{serviceName}</h3>
      <a style={{ color: "#279CF5", fontWeight: "600", marginBottom: "12px" }}>
        Get started
      </a>
    </div>
  );
};

export default ServiceCard;
