import "./MobileApp.css";
import { assets } from "../../assets/assets";
const MobileApp = () => {
  return (
    <div className="app-download">
      <p>
        Download Mobile app for better experience <br /> Khabo. App
      </p>
      <div className="download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default MobileApp;
