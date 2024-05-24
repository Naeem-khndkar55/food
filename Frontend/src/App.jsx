import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import AppRouter from "./Router/AppRouter";
import StoreContextProvide from "./context/StoreContext";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Login from "./components/Login/Login";
function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      {login ? <Login setLogin={setLogin} /> : <></>}
      <div className="app">
        <StoreContextProvide>
          <Navbar setLogin={setLogin} />
          <AppRouter />
        </StoreContextProvide>
      </div>
      <Footer />
    </>
  );
}

export default App;
