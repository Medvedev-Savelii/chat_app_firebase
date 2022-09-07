import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import photoURL from "../img/userAvatar.jpg"


function Chats() {
    const [chats, setChats] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);


    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });
            return () => {
                unsub();
            };
        };
        currentUser.uid && getChats();
    }, [currentUser.uid]);


    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
    };

    return (
        <div className="chats">
                <div
                    className="userChat"
                    key={1}
                >
                    <img src={photoURL} alt="" />
                    <div className="userChatInfo">
                        <span>Zahar Medvedev</span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>

            <div
                className="userChat"
                key={1}
            >
                <img src={photoURL} alt="" />
                <div className="userChatInfo">
                    <span>Oksana Medvedeva</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
}

export default Chats;