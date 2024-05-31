import { useState } from "react";
import "./OrderList.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import { useEffect } from "react";
const OrderList = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllorders = async () => {
    const response = await axios.get(url + "/api/order/orderlist");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("somthing is wrong");
    }
  };

  const statusHandler = async (e, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: e.target.value,
    });
    if (response.data.success) {
      await fetchAllorders();
    }
  };
  useEffect(() => {
    fetchAllorders();
  }, []);
  return (
    <div className="orders add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-items">
            <img src={assets.parcel_icon} />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street}</p>
                <p>
                  {order.address.city +
                    " ," +
                    order.address.state +
                    " ," +
                    order.address.country +
                    " ," +
                    order.address.zipcode}
                </p>
              </div>
              <p className="phone-number">{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select
              onChange={(e) => {
                statusHandler(e, order._id);
              }}
              value={order.status}
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out For Delevery"> Out For Delevery</option>
              <option value="Delevered"> Delevered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
