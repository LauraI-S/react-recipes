import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  Timestamp,
  query,
  orderBy,
} from "firebase/firestore";
import React, { useEffect, useState, useContext } from "react";
import { db } from "../config/firebaseConfig"; //!Hier Daten-Spüeicher!
import "./Chat.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../context/AuthContext";

function Chat() {
  //! Hierher bekomme ich die informationen des users
  const { user, logout, displayName } = useContext(AuthContext);
  //! Speichern der Nachrichten, die wir im Chat sehen werden
  const [chatMessages, setChatMessages] = useState([]);
  //!speichern der eben eingegebenen Nachricht
  const [textMsg, setTextMsg] = useState("");
  // const q = query(chat, orderBy("date"));

  //!Ändert sich der Text im Eingabefeld? Dann wird der handleInputChange gerufen
  const handleInputChange = (e) => {};
  //! Diese Funktion soll alle Nachrichten bekommen
  const getMessages = async () => {
    try {
      //! Liste aller Nachrichten
      const messagesArray = [];
      //!wir holen uns alle Nachrichten aus der database db
      const querySnapshot = await getDocs(collection(db, "chat"));
      //! gehen durch Nachricht und packen sie in dann in unsere Liste
      querySnapshot.forEach((doc) => {
        messagesArray.push(doc.data());
      });
      // Hier sagen wir dem Computer, dass die Liste unsere Nachrichtenliste ist
      setChatMessages(messagesArray); // Aktualisiere den Zustand nach dem Abrufen der Nachrichten
    } catch (error) {
      console.error("Fehler beim Abrufen der Nachrichten: ", error);
    }
  };
  //!Datums-Formatierung
  const formatDate = (date) => {
    // console.log("date :>> ", new Date());
    if (date) {
      const formatedDate = new Date(date.seconds * 1000).toLocaleString();
      return formatedDate;
    } else {
      const formatedDate = new Date(date).toLocaleString();
      return formatedDate;
    }
  };
  // get Messages with live update
  const getMessagesLiveUpdate = () => {
    const q = query(collection(db, "chat"), orderBy("date", "desc"));
    // Hier sagen wir dem Computer, dass er uns immer informieren soll, wenn es neue Nachrichten gibt
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesArray = [];
      querySnapshot.forEach((doc) => {
        messagesArray.push(doc.data());
      });
      // console.log("messagesArray :>> ", messagesArray);
      //die Liste ist unsere Nachrichtenliste
      setChatMessages(messagesArray);
    });
  };
  //!Abschicken der eigenen Nachricht
  const submitMessage = async () => {
    // console.log("textMsg :>> ", textMsg);
    const newChatMsg = {
      //?Wer hat Nachricht geschrieben?
      author: user?.email,
      //?Was steht in der Nachricht?
      text: textMsg,
      //?Wann wurde Nachricht geschrieben?
      date: new Date(),
    };
    console.log("newChatMsg :>> ", newChatMsg);
    try {
      const docRef = await addDoc(collection(db, "chat"), newChatMsg);
      console.log("docRef :>> ", docRef);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  //! useeffect um alle live-Nachrichten anzuzeigen
  useEffect(() => {
    getMessagesLiveUpdate();
  }, []);

  return (
    <div className="chat-container">
      <h1>Share your experience!Which recipe did you like most?</h1>
      <div className="input-container">
        <input
          type="text"
          value={textMsg}
          onChange={(e) => {
            setTextMsg(e.target.value);
          }}
        />
        <Button
          onClick={submitMessage}
          variant="outline-warning"
          className="send-button"
        >
          Send
        </Button>
      </div>
      <div className="chatStyle">
        {chatMessages &&
          chatMessages.map((msg, index) => {
            return (
              <div className="messageStyle" key={index}>
                <p className="author">{msg.author}</p>
                <p className="message-text">{msg.text}</p>
                <p className="message-date">{formatDate(msg.date)}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Chat;
