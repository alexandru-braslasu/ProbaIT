import React from "react";
import '../Components/PopupLogin.css';

export default function Popuplogin(props) {
    return (
        <div className="popup-box">
            <div style={{position: "relative", left: "25vw"}}>
                <div className="box">
                    <button className="btn-close" onClick={props.handleClose}></button>
                    <div className="login-popup">
                        {props.content}
                    </div>
                    <input className="email" type="text" placeholder="  Email"/>
                    <input className="password" type="password" id="pass" placeholder="  Password"/>
                    <button className="logare">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}