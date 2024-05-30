import "./FoodItems.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
const FoodItems = ({ id, name, price, descriotion, image }) => {
  const { cartItem, addToCart, removeFromCart, url } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="image-container">
        <img className="food-image" src={url + "/image/" + image} />
        {!cartItem[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
            />
            <p>{cartItem[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} />
          </div>
        )}
      </div>
      <div className="food-info">
        <div className="food-retings">
          <p>{name}</p>
          <img src={assets.rating_starts} />
        </div>
        <p className="food-description">{descriotion}</p>
        <p className="food-price"> ${price}</p>
      </div>
    </div>
  );
};

export default FoodItems;
