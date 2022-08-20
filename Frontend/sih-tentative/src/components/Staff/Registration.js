import { useState } from "react";
import "../../CSS/StaffRegistration.css";
import FormInput from "./views/FormInput";

const Registration = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;