import React, { useState } from "react";
import "./SignIn.scss";

function SignIn() {
  const [formData, setFormData] = useState({
    uname: "",
    psw: "",
    remember: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Reset form after submission if needed
    setFormData({
      uname: "",
      psw: "",
      remember: true,
    });
  };

  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
          {/* <img src="img_avatar2.png" alt="Avatar" className="avatar"/> */}
        </div>

        <div className="form">
          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              value={formData.uname}
              onChange={handleChange}
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={formData.psw}
              onChange={handleChange}
              required
            />

            <button type="submit">Login</button>
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />{" "}
              Remember me
            </label>
          </div>

          <div className="container">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
