import React from "react";

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
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
