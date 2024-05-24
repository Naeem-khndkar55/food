import { useContext, useState } from "react";
import { assets } from "../../assets/assets.js";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";
const Navbar = ({ setLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotal } = useContext(StoreContext);
  return (
    <div className="nav-bar">
      <Link to="/">
        <img src={assets.logo} className="nav-logo" />{" "}
      </Link>

      <ul className="nav-bar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
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
          <Link to="/cart">
            <img src={assets.basket_icon} />
          </Link>
          <div className={getTotal() === 0 ? "" : "dot"}></div>
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
