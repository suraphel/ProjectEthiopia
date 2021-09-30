import React, { useEffect, useState } from "react";
import { useChannel } from "./AblyReactEffect";
import styles from "../chatroom/chatComponents.module.css";

const ChatComponent = () => {
  let inputBox = null;
  let messageEnd = null;

  const [messageText, setMessageText] = useState("");
  const [receivedMessages, setMessages] = useState([]);
  const messageTextIsEmpty = messageText.trim().length === 0;

  const [channel, ably] = useChannel("chat-demo", (message) => {
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]);
  });

  const sendChatMessage = (messageText) => {
    channel.publish({ name: "chat-message", data: messageText });
    setMessageText("");
    inputBox.focus();
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    sendChatMessage(messageText);
  };

  const handleKeyPress = (event) => {
    if (event.charCode !== 13 || messageTextIsEmpty) {
      return;
    }
    sendChatMessage(messageText);
    event.preventDefault();
  };

  const messages = receivedMessages.map((message, index) => {
    const author = message.connectionId === ably.connection.id ? "me" : "other";

    const milliseconds = new Date();
    const timeStamp = milliseconds.toDateString();

    // function parseMillisecondsIntoReadableTime(milliseconds) {
    //   //Get hours from milliseconds
    //   var hours = milliseconds / (1000 * 60 * 60);
    //   var absoluteHours = Math.floor(hours);
    //   var h = absoluteHours > 9 ? absoluteHours : "0" + absoluteHours;

    //   //Get remainder from hours and convert to minutes
    //   var minutes = (hours - absoluteHours) * 60;
    //   var absoluteMinutes = Math.floor(minutes);
    //   var m = absoluteMinutes > 9 ? absoluteMinutes : "0" + absoluteMinutes;

    //   //Get remainder from minutes and convert to seconds
    //   var seconds = (minutes - absoluteMinutes) * 60;
    //   var absoluteSeconds = Math.floor(seconds);
    //   var s = absoluteSeconds > 9 ? absoluteSeconds : "0" + absoluteSeconds;

    //   return h + ":" + m + ":" + s;
    // }

    // var time = parseMillisecondsIntoReadableTime(milliseconds);

    // alert(time);
    // console.log(time);

    return (
      <span
        key={index}
        className={styles.message}
        // time={new Date().toString()}
        data-author={author}
      >
        {message.data}
      </span>
    );
  });

  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: "smooth" });
  });

  return (
    <div className={styles.chatHolder}>
      <div className={styles.chatText}>
        {messages}
        {new Date().toDateString()}
        <div
          ref={(element) => {
            messageEnd = element;
          }}
        ></div>
      </div>
      <form onSubmit={handleFormSubmission} className={styles.form}>
        <textarea
          ref={(element) => {
            inputBox = element;
          }}
          value={messageText}
          placeholder="Type a message..."
          // time={new Date().toString()}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
          className={styles.textarea}
        ></textarea>
        <button
          type="submit"
          className={styles.button}
          disabled={messageTextIsEmpty}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;
