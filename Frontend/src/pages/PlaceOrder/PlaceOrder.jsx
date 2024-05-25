import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotal } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="placeorder-left">
        <p className="title">Delevery Information</p>
        <div className="multi-class">
          <input type="text" placeholder="first name" />
          <input type="text" placeholder="last name" />
        </div>
        <input type="email" placeholder="email address" />
        <input type="text" placeholder="street" />
        <div className="multi-class">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multi-class">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="placeorder-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotal() === 0 ? "0" : "2"}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotal() === 0 ? 0 : getTotal() + 2}</b>
            </div>
          </div>
          <button>Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
