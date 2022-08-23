import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import { Link } from "react-router-dom";
import axiosconfig from "../config";
import emailIcon from "../images/email.png";
import passIcon from "../images/password.png";
import Dropdown from 'react-dropdown';
import cookie from "react-cookie";
import 'react-dropdown/style.css';

var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

function isEmailValid(email) {
  if (!email)
    return false;

  if (email.length > 254)
    return false;

  var valid = emailRegex.test(email);
  if (!valid)
    return false;

  // Further checking of some things regex can't handle
  var parts = email.split("@");
  if (parts[0].length > 64)
    return false;

  var domainParts = parts[1].split(".");
  if (domainParts.some(function (part) { return part.length > 63; }))
    return false;

  return true;
}

const Login = () => {
  useEffect(() => {
    require("../CSS/Login.css")
  })

  const [data, setData] = useState({
    email: "",
    password: "",
    id: "5",
  });

  const [touched, setTouched] = useState({});

  const chaeckData = (obj) => {
    const { email, password, id } = obj;
    if (email.length == 0 || password.length == 0 || !isEmailValid(email)) {
      notify('Please enter a valid email and password', 'error');
      return;
    }

    var link = '/login?id=' + id;
    const api = axiosconfig
      .post(link, obj)
      .then((response) => response.data)
      .then(async (data) => {
        if (data.found == 1 && data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("id", id)
          notify("You login to your account successfully", "success")

        } else {
          notify("Your password or your email is wrong", "error")
        }
      });
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

  const changeHandlerOpt = (event) => {
    setData({ ...data, 'id': (event.value[0] == 'User') ? 5 : 2 })
  }
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
  const defaultOption = options[1];

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
            <img src={passIcon} alt="" />
          </div>
          <br></br>
          <div>
            <Dropdown className="dropdown" name="role" options={options} value={defaultOption} onChange={changeHandlerOpt} placeholder="Select an option" />
          </div>
        </div>

        <div>
          <button onClick={submitHandler} className="btn" type="submit">Login</button>
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