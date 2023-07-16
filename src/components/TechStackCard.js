import React from "react";
import "../App.css";

const TechStackCard = ({ imageSrc, techStackName }) => {
  console.log(techStackName);
  return (
    <div className="techStackCard">
      <img className="techStackImage" src={imageSrc} alt={techStackName} />
      <span className="techStackName">{techStackName}</span>
    </div>
  );
};

export default TechStackCard;
