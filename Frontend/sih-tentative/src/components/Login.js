import React, {useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import { Link } from "react-router-dom";
import axios from "axios";
import emailIcon from "../images/email.png";
import passIcon from "../images/password.png";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Login = () => {
  useEffect(()=>{
    require("../CSS/Login.css")
  })

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({});

  const chaeckData = (obj) => {
    const { email, password } = obj;
    const urlApi = `https://lightem.senatorhost.com/login-react/index.php?email=${email.toLowerCase()}&password=${password}`;
    const api = axios
      .get(urlApi)
      .then((response) => response.data)
      .then((data) => (data.ok ? notify("You login to your account successfully", "success") : notify("Your password or your email is wrong", "error")));
    toast.promise(api, {
      pending: "Loading your data...",
      success: false,
      error: "Something went wrong!",
    });
  };

  const changeHandler = (event) => {
    if (event.target.name === "IsAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    chaeckData(data);
  };
  const options = [
    'Admin', 'User'
  ];
  const defaultOption=options[1];

  return (
    <div className="container">
      <form className="formLogin" onSubmit={submitHandler} autoComplete="off">
        <h2>Sign In</h2>
        <div>
          <div>
            <input type="text" name="email" value={data.email} placeholder="E-mail" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
            <img src={emailIcon} alt="" />
          </div>
        </div>
        <div>
          <br></br>
          <div>
            <input type="password" name="password" value={data.password} placeholder="Password" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
            <img  src={passIcon} alt="" />
          </div>
          <br></br>
          <div>
            <Dropdown className="dropdown" options={options} value={defaultOption} placeholder="Select an option" />
          </div>
        </div>

        <div>
          <button  className="btn" type="submit">Login</button>
          <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
            Don't have a account? <Link to="/signup">Create account</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;