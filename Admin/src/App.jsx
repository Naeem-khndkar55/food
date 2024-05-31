import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import AddFood from "./pages/AddFood/AddFood";
import OrderList from "./pages/OderList/OrderList";
import FoodList from "./pages/FoodList/FoodList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "./pages/User/User";

function App() {
  const url = "http://localhost:3003";
  return (
    <>
      <div>
        <ToastContainer />
        <NavBar />
        <hr />
        <div className="app-content">
          <SideBar />
          <Routes>
            <Route path="/addfood" element={<AddFood url={url} />} />
            <Route path="/orderlist" element={<OrderList url={url} />} />
            <Route path="/foodlist" element={<FoodList url={url} />} />
            <Route path="/user" element={<User url={url} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
