import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import AppRouter from "./Router/AppRouter";
import StoreContextProvide from "./context/StoreContext";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className="app">
        <StoreContextProvide>
          <Navbar />
          <AppRouter />
        </StoreContextProvide>
      </div>
      <Footer />
    </>
  );
}

export default App;
