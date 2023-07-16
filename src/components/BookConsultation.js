import React from "react";
import { useNavigate } from "react-router-dom";

const BookConsultation = () => {
  const navigate = useNavigate();

  return (
    <div className="footer-cta-container">
      <h2>Innovate. Validate. Launch</h2>
      <p className="transform">
        Let‘s transform your idea into reality with our MVP development
        services.
      </p>
      <button onClick={() => navigate("/contact-us")}>
        Book a free consultation!
      </button>
    </div>
  );
};

export default BookConsultation;
