import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contactpage = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="contactUsBody">
        <div className="leftRow">
          <h2 style={{ fontSize: "44px", color: "#d5d5d5" }}>
            Get in touch with us
          </h2>
          <p style={{ fontSize: "20px", fontWeight: "500" }}>
            Have something to share? Our contact form is the perfect place to
            send us your thoughts, ideas, or feedback. Our team is always ready
            to listen and help, so don't hesitate to reach out. Simply fill out
            the form and we'll get back to you in no time. Thanks for choosing
            to connect with us!
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            <p>Email: contact@xzect.com</p>
            <p>Contact: +91 98188 06393</p>
            <p>Registered address: 203, 2-A/3, Asaf Ali Rd, Delhi - 110002</p>
            <p>Timings: 10:00 AM to 7:00 PM (IST)</p>
          </div>
          <button
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              margin: "1rem 0",
              border: "2px solid #075e54",
              background: "#075e54",
              transition: "all .3s ease-in-out",
              width: "fit-content",
              color: "white",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            Chat now on Whatsapp
          </button>
        </div>
        <div className="rightRow">
          <div className="cp-form-wrapper" style={{ border: "none" }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScHgggNMyxLR7J_-MGtxh5RXfECVaPaePz6L2aSPMEtPssjIg/viewform?embedded=true"
              width="640"
              height="1200"
              title="Google Form"
              style={{ backgroundColor: "white", padding: "20px 16px" }}
            >
              Loading...
            </iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactpage;
