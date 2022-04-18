import React, { useState } from "react";
import "./Signin.scss";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoginRequest } from "../../redux";

const initialState = {
  email: "",
  password: "",
};

export default function SignIn() {
  const [formData, setFormData] = useState(initialState);
  const [userMessage, setUserMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
console.log("I am in signin")
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      let allUserData = JSON.parse(localStorage.getItem("user-details"));
      let userData =
        allUserData &&
        allUserData.filter((el) => el.email === formData.email)[0];
      if (!userData) {
        setUserMessage("User not valid. Register with us!");
        return;
      }
      if (userData.password !== formData.password) {
        setUserMessage("Invalid Credentials");
        return;
      }
      setUserMessage("Login Successful");
      setIsSuccess(true);
      let loginData = {
        status: "logged",
        name: userData.name,
      };
      localStorage.setItem("user-status", JSON.stringify(loginData));
      dispatch(userLoginRequest());
      setTimeout(() => history.push("/"), 1000);
    } else {
      setUserMessage("All fields are mandatory");
      return;
    }
  };
  const formChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  return (
    <section className="signin">
      <div className="signin-text">
        <h1>Login</h1>
        <p>Get access to your orders, wishlist and recommedations</p>
      </div>
      <div className="signin-action">
        <form onSubmit={onFormSubmit} className="signin-action-form">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={formChangeHandler}
          />
          <input
            type="password"
            id="password"
            placeholder="Enter your Password here"
            required
            value={formData.password}
            onChange={formChangeHandler}
          />
          {userMessage && (
            <span className={isSuccess ? "msg success-msg" : "msg error-msg"}>
              {userMessage}
            </span>
          )}
          <button>Login</button>
        </form>
      </div>
    </section>
  );
}
