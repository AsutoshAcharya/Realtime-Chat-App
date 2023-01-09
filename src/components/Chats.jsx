import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());

        return () => {
          unsub();
        };
      });
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log(Object.entries(chats));
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://avatars.githubusercontent.com/u/101463745?v=4"
          alt=""
        />
        <div className="userChatInfo">
          <span>Asutosh</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://avatars.githubusercontent.com/u/101463745?v=4"
          alt=""
        />
        <div className="userChatInfo">
          <span>Asutosh</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://avatars.githubusercontent.com/u/101463745?v=4"
          alt=""
        />
        <div className="userChatInfo">
          <span>Asutosh</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://avatars.githubusercontent.com/u/101463745?v=4"
          alt=""
        />
        <div className="userChatInfo">
          <span>Asutosh</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
