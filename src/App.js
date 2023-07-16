import "./App.css";
// import Lottie from "react-lottie";
// import animationData from "./assets/cube.json";
import { useEffect, useState } from "react";
import ServicesBody from "./components/ServiceBody";
import TechStackBody from "./components/TechStackBody";
// import bgPattern from "./assets/ttten.svg";

function App() {
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setNavbarTransparent(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <div className={`navbar ${navbarTransparent ? "" : "transparent"}`}>
        <span style={{ fontWeight: "bold", fontSize: "28px" }}>Xzect</span>
      </div>
      <div className="page">
        <div className="left">
          <div
            id="intro"
            style={{
              fontWeight: "bold",
              marginLeft: "50px",
              paddingLeft: "20px",
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

          <div>
            <button className="button button1">Chat now on Whatsapp</button>
            <button className="button button2">Explore Our Services</button>
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
      <div className="techStack-container">
        <div className="techStackHeading">
          <span
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Leverage our software & hardware expertise
          </span>
          <span
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginBottom: "20px",
              color: "#666",
            }}
          >
            Use our services and tech expertise to create disruptive products &
            solutions that can revolutionize your business and stay ahead with
            evolving technological advancements.
          </span>
        </div>
        <TechStackBody />
        <button className="techStackButton">
          Explore Our Entire Tech Stack
        </button>
      </div>
      <div className="footer-cta-container">
        <h2>Innovate. Validate. Launch</h2>
        <p className="transform">
          Let‘s transform your idea into reality with our MVP development
          services.
        </p>
        <button>Book a free consultation!</button>
      </div>
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
              design and development of new products, exploration of robotics
              and automation possibilities, or any other requirements.
            </p>
            <div
              style={{
                marginBottom: "1rem",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              <p>
                Registered Address: 203, 2-A/3, Asaf Ali Road, Delhi - 110002
              </p>
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
      </div>
    </div>
  );
}

export default App;
