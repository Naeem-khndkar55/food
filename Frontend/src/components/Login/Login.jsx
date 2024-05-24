import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
const Login = ({ setLogin }) => {
  const [current, setCurrent] = useState("Sign Up");
  return (
    <div className="login">
      <from className="login-container">
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
            <input type="text" placeholder="your name" required />
          )}

          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{current === "Sign Up" ? "create account" : "Login"}</button>

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
      </from>
    </div>
  );
};

export default Login;
