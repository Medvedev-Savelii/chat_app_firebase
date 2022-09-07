import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import photoURL from "../img/userAvatar.jpg"


const Message = () => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const ref = useRef();

    return (
        <>
        <div
            ref={ref}
            className="message"
        >
            <div className="messageInfo">
                <img
                    src={photoURL}
                    alt=""
                />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                {/*{message.img && <img src={message.img} alt="" />}*/}
            </div>
        </div>

    <div
        ref={ref}
        className="message owner"
    >
        <div className="messageInfo">
            <img
                src={photoURL}
                alt=""
            />
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            {/*{message.img && <img src={message.img} alt="" />}*/}
        </div>
    </div>
</>
    );
};

export default Message;
