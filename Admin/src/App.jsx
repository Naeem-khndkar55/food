import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import AddFood from "./pages/AddFood/AddFood";
import OrderList from "./pages/OderList/OrderList";
import FoodList from "./pages/FoodList/FoodList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div>
        <ToastContainer />
        <NavBar />
        <hr />
        <div className="app-content">
          <SideBar />
          <Routes>
            <Route path="/addfood" element={<AddFood />} />
            <Route path="/orderlist" element={<OrderList />} />
            <Route path="/foodlist" element={<FoodList />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
