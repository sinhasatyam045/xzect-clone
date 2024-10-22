import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ServicesBody from "../components/ServiceBody";
import TechStackBody from "../components/TechStackBody";
import Navbar from "../components/Navbar";
import BookConsultation from "../components/BookConsultation";
import Footer from "../components/Footer";
import whatsapp from "../assets/whatsapp-icon.svg";

function HomePage() {
  return (
    <div className="container">
      <Navbar />
      <div className="page">
        <div className="left">
          <div
            id="intro"
            style={{
              fontWeight: "bold",
              marginLeft: "50px",
              paddingLeft: "20px",
              marginBottom: "41px",
            }}
          >
            <span style={{ color: "#BD1052" }}>Build,</span>{" "}
            <span style={{ color: "#545EFC" }}>test,</span>{" "}
            <span style={{ color: "#A3A2A3" }}>and</span>{" "}
            <span style={{ color: "#009367" }}>execute your ideas </span>
            <span style={{ color: "#A3A2A3" }}>with our</span>{" "}
            <span style={{ color: "#F0AF50" }}>innovative solutions</span>
            <span style={{ color: "#545EFC" }}>.</span>{" "}
          </div>

          <div style={{ display: "flex", fontWeight: "600" }}>
            <a
              href="https://wa.me/919818806393?text=Hi, I am interested in the services provided by Xzect Labs Private Limited and would like to schedule a time to discuss them with you."
              className="button button1"
            >
              <img src={whatsapp} alt="whatsapp" height="25px" width="25px" />
              Chat now on Whatsapp
            </a>
            <Link to="/services" className="button button2">
              Explore Our Services
            </Link>
          </div>
        </div>
        <div className="right">
          <div class="dancing-box-wrap">
            <div class="dancing-box">
              <div class="box-cube">
                <div class="box-faces box-front"></div>
                <div class="box-faces box-back"></div>
                <div class="box-faces box-top"></div>
                <div class="box-faces box-bottom"></div>
                <div class="box-faces box-left"></div>
                <div class="box-faces box-right"></div>
              </div>
            </div>
          </div>
        </div>
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
            Customised Solutions for All Your Business Needs
          </span>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Take Your Business to the Next Level with Our Industry-Leading
            Services
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

export default HomePage;
