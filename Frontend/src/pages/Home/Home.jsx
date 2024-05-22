import { useState } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "./Home.css";
import DisplayFood from "../../components/DisplayFood/DisplayFood";
import MobileApp from "../../components/MobileApp/MobileApp";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <DisplayFood category={category} />
      <MobileApp />
    </div>
  );
};

export default Home;
