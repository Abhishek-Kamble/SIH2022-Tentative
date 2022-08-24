import { useEffect, useState } from "react";
import FormInput from "./views/FormInput";
import axiosconfig , {setToken} from "../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../toast";

const Registration = () => {
  useEffect(()=>{
    require("../../CSS/StaffRegistration.css")
  })

  const [values, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile_number: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fname",
      type: "text",
      placeholder: "Firstname",
      label: "Firstname",
      required: true,
    },
    {
      id: 1,
      name: "lname",
      type: "text",
      placeholder: "Lastname",
      label: "Lastname",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "mobile_number",
      type: "text",
      placeholder: "Mobile No",
      label: "Mobile No",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
  const chaeckData = (obj) => {
    console.log(obj);
    const { email, password, fname,lname,confirmPassword,mobile_number } = obj;
    if (   fname.length == 0 ) {
      notify('Please enter first name', 'error');
      return;
    }
    if (   lname.length == 0) {
      notify('Please enter last name', 'error');
      return;
    }
    if (   email.length == 0) {
      notify('Please enter a valid email', 'error');
      return;
    }
    if (mobile_number.length != 10) {
      console.log("invalid mobile");
      notify('Please enter a valid mobile number', 'error');
      return;
    }
    if (   password.length == 0) {
      notify('Please enter a valid password', 'error');
      return;
    }
    if (   confirmPassword !=    password) {
      notify('Password don\'t match', 'error');
      return;
    }


    var link = '/staffregistor';
    setToken(localStorage.getItem('token'));
    const api = axiosconfig
      .post(link, obj)
      .then((response) => response.data)
      .then(async (data) => {
        console.log(data)
        if (data.found) {

          notify("You have registered successfully", "success")

        } else {
          notify(data.message, "error")
        }
      });
    toast.promise(api, {
      pending: "Loading your data...",
      success: false,
      error: "Something went wrong!",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      chaeckData(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };



  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Staff Registration</h1>
        <br></br><br></br>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="btnn">
          <button onClick={handleSubmit} className="btn_submit">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Registration;