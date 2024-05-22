import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo} />
          <p>
            its a project for learning purpus to know the all functionality of
            frontend and backend
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>Aobut Us</li>
            <li>Delevery</li>
            <li>Privecy Policy</li>
          </ul>
        </div>
        <div className="footer-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>016666666666</li>
            <li>khabo@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright 2024 khabo.com All Rights Reserved</p>
    </div>
  );
};

export default Footer;
