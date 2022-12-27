import React from "react";
import Add from "../assets/addAvatar.png";
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Green Chat</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add your avatar</span>
          </label>
          <button>SignUp</button>
        </form>
        <p>Do have account? Login</p>
      </div>
    </div>
  );
};

export default Register;
