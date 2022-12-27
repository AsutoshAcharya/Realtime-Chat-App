import React from "react";
import Img from "../assets/img.png";
import Attach from "../assets/attach.png";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type message ...." />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file2" />
        <label htmlFor="file2">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
