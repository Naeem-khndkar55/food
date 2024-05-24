import { useState } from "react";
import { assets } from "../../assets/assets.js";

import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ setLogin }) => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="nav-bar">
      <img src={assets.logo} className="nav-logo" />

      <ul className="nav-bar-menu">
        <a
          href="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#mobile-app"
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact")}
          className={menu === "Contact" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="nav-bar-right">
        <img src={assets.search_icon} />
        <div className="nav-search-icon">
          <img src={assets.basket_icon} />
          <div className="dot"></div>
        </div>
        <button
          onClick={() => {
            setLogin(true);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
