import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";

function Chat() {
  //2. Store messages in a variable
  const [chatMessages, setChatMessages] = useState([]);
  //1.Get documents from database
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

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <h1>Chat</h1>
      <div>
        {chatMessages &&
          chatMessages.map((msg) => {
            return (
              <>
                <p>{msg.author}</p>
                <p>{msg.text}</p>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Chat;
