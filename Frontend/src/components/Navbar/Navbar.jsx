import { useState } from "react";
import { assets } from "../../assets/assets.js";

import "./Navbar.css";
const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="nav-bar">
      <img src={assets.logo} className="nav-logo" />

      <ul className="nav-bar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("Mobile-App")}
          className={menu === "Mobile-App" ? "active" : ""}
        >
          Mobile App
        </li>
        <li
          onClick={() => setMenu("Contact")}
          className={menu === "Contact" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="nav-bar-right">
        <img src={assets.search_icon} />
        <div className="nav-search-icon">
          <img src={assets.basket_icon} />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
