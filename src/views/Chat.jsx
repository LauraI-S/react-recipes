import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import "./Chat.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Chat() {
  //2. Store messages in a variable
  const [chatMessages, setChatMessages] = useState([]);
  const [textMsg, setTextMsg] = useState("");
  //1.Get documents from database

  const handleInputChange = (e) => {};
  const getMessages = async () => {
    try {
      const messagesArray = [];
      const querySnapshot = await getDocs(collection(db, "chat"));
      querySnapshot.forEach((doc) => {
        messagesArray.push(doc.data());
      });
      setChatMessages(messagesArray); // Aktualisiere den Zustand nach dem Abrufen der Nachrichten
    } catch (error) {
      console.error("Fehler beim Abrufen der Nachrichten: ", error);
    }
  };

  const formatDate = (date) => {
    // console.log("date :>> ", new Date());
    const formatedDate = new Date(date * 1000).toLocaleString();
    console.log("formatedDate :>> ", formatedDate);
    return formatedDate;
  };

  const submitMessage = () => {
    console.log("textMsg :>> ", textMsg);
    const newChatMsg = {
      author: user.email,
      text: textMsg,
      date: new Date(),
    };
  };

  useEffect(() => {
    getMessages();
  }, []);
  return (
    <>
      <h1>Chat</h1>
      <div>
        <input
          type="text"
          value={textMsg}
          onChange={(e) => {
            setTextMsg(e.target.value);
          }}
        />
        {/* <input
          type="text"
          onChange={(e) => {
            setTextMsg(e.target.value);
          }}
        ></input>
        {/* <Form.Control type="text" placeholder="...let´s chat" /> */}
        <Button onClick={submitMessage} variant="outline-warning">
          pi
        </Button>{" "}
      </div>
      <div className="chatStyle">
        {chatMessages &&
          chatMessages.map((msg, index) => {
            return (
              <div className="messageStyle" key={index}>
                <p>{msg.author}</p>
                <p>{msg.text}</p>
                <p>{formatDate(msg.date.seconds)}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Chat;
