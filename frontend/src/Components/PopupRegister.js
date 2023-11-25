import React from "react";
import '../Components/PopupRegister.css';

export default function PopupRegister(props) {
    return (
        <div className="popup-box">
            <div style={{position: "relative", left: "25vw"}}>
                <div className="box">
                    <button className="btn-close" onClick={props.handleClose}> </button>
                    <div className="register">
                        {props.content}
                    </div>
                    <input className="email" type="text" placeholder="  Email"/>
                    <input className="password" type="password" id="pass" placeholder="  Password"/>
                    <button className="inreg">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}