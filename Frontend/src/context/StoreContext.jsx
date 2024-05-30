import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvide = (props) => {
  const [cartItem, setCartItem] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const url = "http://localhost:3003";
  const [food_list, setFoodList] = useState([]);

  const addToCart = async (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));

    if (token) {
      await axios.post(
        url + "/api/cart/addtocart",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItem((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
    });

    if (token) {
      await axios.post(
        url + "/api/cart/removecart",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getTotal = () => {
    let totalAmount = 0;

    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItem[item];
        }
      }
    }

    return totalAmount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/foodlist");
    setFoodList(response.data.data);
  };

  const loadCartData = async () => {
    if (token) {
      const response = await axios.post(
        url + "/api/cart/getcart",
        {},
        { headers: { token } }
      );
      setCartItem(response.data.cartData);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchFoodList();
      if (token) {
        await loadCartData();
      }
    };
    loadData();
  }, [token]);

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotal,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvide;
