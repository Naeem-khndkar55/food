import "./FoodItems.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodItems = ({ id, name, price, description, image }) => {
  const {
    cartItem = {},
    addToCart,
    removeFromCart,
    url,
  } = useContext(StoreContext);
  const itemCount = cartItem[id] || 0;

  return (
    <div className="food-item">
      <div className="image-container">
        <img
          className="food-image"
          src={`${url}/image/${image}`}
          alt={`${name}`}
        />
        {itemCount === 0 ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove from cart"
            />
            <p>{itemCount}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add more to cart"
            />
          </div>
        )}
      </div>
      <div className="food-info">
        <div className="food-ratings">
          <p>{name}</p>
          <img src={assets.rating_stars} alt="Rating stars" />
        </div>
        <p className="food-description">{description}</p>
        <p className="food-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItems;
