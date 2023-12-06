import React, { useState } from "react";
import '../Components/PopupLogin.css';

export default function Popuplogin(props) {
    let [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function handleLogin() {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, password: password }),
            });

            const data = await response.json();
            
            console.log(response);
            if (response.status != 200) {
                setMessage({
                    text: response.error,
                    theme: 'danger',
                });
                return;
            }

            localStorage.setItem('jwtToken', data.token);
            setMessage({
                text: "Logged successfully!",
                theme: 'success',
            });
            window.location.href = "/landingpage-loggedin";
        } catch (error) {
            console.error('Error during login:', error);
            setMessage({
                text: "An error occurred. Please try again.",
                theme: 'danger',
            });
        }
    }
    return (
        <div className="popup-box">
            <div style={{position: "relative", left: "25vw"}}>
                <div className="box">
                    <button className="btn-close" onClick={props.handleClose}></button>
                    <div className="login-popup">
                        {props.content}
                    </div>
                    <input
                        className="email"
                        name="email"
                        type="text"
                        placeholder="  Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="password"
                        name="password"
                        type="password"
                        id="pass"
                        placeholder="  Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="logare" onClick={handleLogin} >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}