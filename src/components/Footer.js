import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-info">
        <div style={{ width: "40%", padding: "0px 100px 0px 0px" }}>
          <h4>Xzect Labs Pvt. Ltd.</h4>
          <p style={{ fontSize: "16px", fontWeight: "600" }}>
            Xzect provides a diverse array of services that enable both
            businesses and individuals to bring their vision to life. Our
            specialties include software development, website design and SEO,
            cloud services, robotics and automation, 3D printing and
            prototyping, data science and analytics, AI and machine learning,
            IOT, AR and VR, blockchain, and other tech-related services. Our
            team of experienced professionals is available to assist with the
            design and development of new products, exploration of robotics and
            automation possibilities, or any other requirements.
          </p>
          <div
            style={{
              marginBottom: "1rem",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            <p>Registered Address: 203, 2-A/3, Asaf Ali Road, Delhi - 110002</p>
            <p>CIN: U72200DL2022PTC408714</p>
            <p>GST: 07AAACX4373J1Z2</p>
          </div>
        </div>
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h4>Services</h4>
            <ul style={{ color: "#929ba8" }}>
              <li>Software & App Development</li>
              <li>Website Development & SEO</li>
              <li>Cloud Services</li>
              <li>Robotics & Automation</li>
              <li>3D Printing & Prototyping</li>
              <li>Data Science & Analytics</li>
              <li>AI & Machine Learning</li>
              <li>IOT, AR & VR</li>
              <li>Blockchain</li>
              <li>Tech Consultancy</li>
              <li>Research & Development</li>
              <li>View all Services</li>
            </ul>
          </div>
          <div>
            <h4>Industries</h4>
            <ul style={{ color: "#929ba8" }}>
              <li>eCommerce</li>
              <li>Hyperlocal</li>
              <li>Healthcare</li>
              <li>Finance</li>
              <li>Education</li>
              <li>Gaming</li>
              <li>Social Networking</li>
              <li>Agriculture</li>
              <li>Travel & Aviation</li>
              <li>Logistics</li>
              <li>Restaurant</li>
              <li>Real Estate</li>
              <li>View all Industries</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul style={{ color: "#929ba8" }}>
              <li>About</li>
              <li>Tech Stack</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Webinars</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Legal Information</li>
              <li>Blog</li>
              <li>Youtube (@xzect_labs)</li>
              <li>Github (@xzect)</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          backgroundColor: "black",
        }}
      >
        © 2018 - 2023. Xzect Labs Pvt. Ltd. All rights reserved.
      </div> */}
    </div>
  );
};

export default Footer;
