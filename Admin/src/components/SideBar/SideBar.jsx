import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/addfood" className="menu-option">
          <img src={assets.add_icon} />
          <p> add items</p>
        </NavLink>
        <NavLink to="/foodlist" className="menu-option">
          <img src={assets.order_icon} />
          <p> List items</p>
        </NavLink>
        <NavLink to="/orderlist" className="menu-option">
          <img src={assets.parcel_icon} />
          <p> Orders</p>
        </NavLink>
        <NavLink to="/user" className="menu-option">
          <img src={assets.order_icon} />
          <p> Users</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
