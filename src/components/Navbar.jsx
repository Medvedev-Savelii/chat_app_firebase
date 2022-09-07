import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import photoURL from "../img/userAvatar.jpg"

function Navbar() {
    return (
        <div className='navbar'>
            <span className="logo">Sava Chat</span>
            <div className="user">
                <img src={photoURL} alt="" />
                <span>Sava</span>
                <button>logout</button>
            </div>
        </div>
    );
}

export default Navbar;