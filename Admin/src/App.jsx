import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <hr />
        <div className="app-content">
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default App;
