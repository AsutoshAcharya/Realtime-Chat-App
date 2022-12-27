import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find user" />
      </div>
      <div className="userChat">
        <img
          src="https://avatars.githubusercontent.com/u/101463745?v=4"
          alt=""
        />
        <div className="userChatInfo">
          <span>Asutosh</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
