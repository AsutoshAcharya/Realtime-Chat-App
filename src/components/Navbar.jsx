import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Green Chat</span>
      <div className="user">
        <img
          src="https://avatars.githubusercontent.com/u/101463745?v=4"
          alt=""
        />
        <span>Asu</span>
        <button
          onClick={() => {
            signOut(auth);
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
