import React from "react";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";
import softWareImg from "../assets/SoftwareAppDevelopment.jpg";
import dataScienceImg from "../assets/data-science.jpg";
import printingImg from "../assets/3d-printing-and-prototyping.jpg";
import arVrImg from "../assets/ar-vr.jpg";
import blockchainImg from "../assets/blockchain.jpg";
import cloudServicesImg from "../assets/cloud-services.jpg";
import machineLearningImg from "../assets/machine-learning.jpg";
import researchImg from "../assets/research-and-dev.jpg";
import roboticsImg from "../assets/robotics.jpg";
import websiteDevelopmentImg from "../assets/WebsiteDevelopment.jpg";
import techConsultancyImg from "../assets/tech-consultancy.jpg";

const ServicesBody = () => {
  const services = [
    { imageSrc: softWareImg, serviceName: "Software & App Development" },
    {
      imageSrc: websiteDevelopmentImg,
      serviceName: "Website Development & SEO",
    },
    { imageSrc: cloudServicesImg, serviceName: "Cloud Services" },
    { imageSrc: roboticsImg, serviceName: "Robotics & Automation" },
    { imageSrc: printingImg, serviceName: "3D Printing & Prototyping" },
    { imageSrc: dataScienceImg, serviceName: "Data Science & Analytics" },
    { imageSrc: machineLearningImg, serviceName: "AI & Machine Learning" },
    { imageSrc: arVrImg, serviceName: "IoT, AR & VR" },
    { imageSrc: blockchainImg, serviceName: "Blockchain" },
    { imageSrc: techConsultancyImg, serviceName: "Tech Consultancy" },
    { imageSrc: researchImg, serviceName: "Research & Development" },
  ];

  return (
    <div className="servicesBody">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          imageSrc={service.imageSrc}
          serviceName={service.serviceName}
        />
      ))}
    </div>
  );
};

export default ServicesBody;
