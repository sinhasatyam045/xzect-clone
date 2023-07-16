import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import servicesImg from "../assets/services.png";
import ServicesBody from "../components/ServiceBody";
import TechStackBody from "../components/TechStackBody";
import BookConsultation from "../components/BookConsultation";
import Footer from "../components/Footer";

function ServicesPage() {
  return (
    <div className="container">
      <Navbar />
      <div className="servicesPageBody">
        <div className="servicesPageBodyInfo">
          <div
            style={{ fontWeight: "600", fontSize: "18px", marginTop: "80px" }}
          >
            <Link style={{ color: "white" }} to="/">
              Home
            </Link>{" "}
            / Services
          </div>
          <div
            style={{ fontSize: "60px", fontWeight: "700", padding: "50px 0px" }}
          >
            Discover the True Potential of Your Business with Our
            Industry-Leading Services
          </div>
          <p style={{ fontSize: "28px", fontWeight: "500" }}>
            We provide specialized services that are custom-crafted to enable
            the expansion and growth of your business.
          </p>
          <button className="servicesConsult">Consult with an expert</button>
        </div>
        <img className="servicesImage" src={servicesImg} alt="Services" />
      </div>
      <div className="page2">
        <div className="servicesHeading">
          <span
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Uncover Your Business's Hidden Potential with Our Personalised
            services
          </span>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Join the many successful businesses that have transformed with our
            industry-leading services.
          </span>
        </div>
        <ServicesBody />
      </div>
      <TechStackBody />
      <BookConsultation />
      <Footer />
    </div>
  );
}

export default ServicesPage;
