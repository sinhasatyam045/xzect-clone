import React from "react";
import { useEffect, useState } from "react";
import logo from "../assets/xzect-logo.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  const navigate = useNavigate();

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
    <div className={`navbar ${navbarTransparent ? "" : "transparent"}`}>
      <img
        onClick={() => navigate("/")}
        className="navbarImage"
        src={logo}
        alt="Services"
      />
      <span
        onClick={() => navigate("/")}
        style={{ fontWeight: "bold", fontSize: "32px", cursor: "pointer" }}
      >
        Xzect
      </span>
    </div>
  );
}

export default Navbar;
