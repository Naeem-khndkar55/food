import { useContext, useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

import axios from "axios";
import { StoreContext } from "../../context/StoreContext.jsx";
const Login = ({ setLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [current, setCurrent] = useState("Sign Up");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (current === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login">
      <form onSubmit={onLogin} className="login-container">
        <div className="title">
          <h2>{current}</h2>
          <img
            onClick={() => {
              setLogin(false);
            }}
            src={assets.cross_icon}
          />
        </div>
        <div className="login-input">
          {current === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={handleLogin}
              value={data.name}
              type="text"
              placeholder="your name"
              required
            />
          )}

          <input
            name="email"
            onChange={handleLogin}
            value={data.email}
            type="email"
            placeholder="your email"
            required
          />
          <input
            name="password"
            onChange={handleLogin}
            value={data.password}
            type="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit">
          {current === "Sign Up" ? "create account" : "Login"}
        </button>

        <div className="login-condition">
          <input type="checkbox" required />
          <p>i agree to all the terms and policy</p>
        </div>
        {current === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => {
                setCurrent("Sign Up");
              }}
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Already have account?{" "}
            <span
              onClick={() => {
                setCurrent("Login");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
