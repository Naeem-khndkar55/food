import { menu_list } from "../../assets/assets.js";
import "./Menu.css";
const Menu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>explore our menu</h1>
      <p className="explore-menu-text">
        {" "}
        here you will get all the menu items of most trendy food
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((priv) =>
                  priv === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="list-items"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p> {item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
