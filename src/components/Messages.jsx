import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

    return (
        <div className="messages">
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
        </div>
    );
};

export default Messages;