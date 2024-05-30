import { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotal, token, food_list, cartItem, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const orderPlace = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItem[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItem[item._id] };
        orderItems.push(itemInfo);
      }
    });

    const orderData = {
      address: data,
      items: orderItems,
      amount: getTotal() + 2,
    };

    try {
      const response = await axios.post(
        url + "/api/order/placeorder",
        orderData,
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Error! Something went wrong!");
      }
    } catch (error) {
      alert("Error! Something went wrong!");
      console.error(error);
    }
  };

  return (
    <form onSubmit={orderPlace} className="place-order">
      <div className="placeorder-left">
        <p className="title">Delivery Information</p>
        <div className="multi-class">
          <input
            required
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
            type="text"
            placeholder="First name"
          />
          <input
            required
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          required
          name="email"
          onChange={handleChange}
          value={data.email}
          type="email"
          placeholder="Email address"
        />
        <input
          required
          name="street"
          onChange={handleChange}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        <div className="multi-class">
          <input
            required
            name="city"
            onChange={handleChange}
            value={data.city}
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            onChange={handleChange}
            value={data.state}
            type="text"
            placeholder="State"
          />
        </div>
        <div className="multi-class">
          <input
            required
            name="zipcode"
            onChange={handleChange}
            value={data.zipcode}
            type="text"
            placeholder="Zip code"
          />
          <input
            required
            name="country"
            onChange={handleChange}
            value={data.country}
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          name="phone"
          onChange={handleChange}
          value={data.phone}
          type="text"
          placeholder="Phone"
        />
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
          <button type="submit">Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
