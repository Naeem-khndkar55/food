import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import StoreContextProvider from "./context/StoreContext"; // Ensure the correct import name
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./components/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <StoreContextProvider>
      <div className="app">
        {login && <Login setLogin={setLogin} />}
        <Navbar setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
    </StoreContextProvider>
  );
}

export default App;
