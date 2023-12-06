import React, { useState } from "react";
import '../Components/PopupRegister.css';

export default function PopupRegister(props) {
    let [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    async function handleRegister() {
        if (password != confirm) {
            setEmail(null);
            setPassword(null);
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, password: password }),
            });

            const data = await response.json();

            if (response.error) {
                setMessage({
                    text: response.error,
                    theme: 'danger',
                });
                return;
            }

            localStorage.setItem('jwtToken', data.token);
            setMessage({
                text: "Account created successfully!",
                theme: 'success',
            });
            window.location.href = "/landingpage-loggedin";
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage({
                text: "An error occurred. Please try again.",
                theme: 'danger',
            });
        }
    }

    return (
        <div className="popup-box">
            <div style={{position: "relative", left: "25vw"}}>
                <form className="box">
                    <button className="btn-close" onClick={props.handleClose}> </button>
                    <div className="register">
                        {props.content}
                    </div>
                    <input
                        className="emailReg"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="  Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="passwordReg"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="  Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className="confirm"
                        type="password"
                        name="confirm"
                        id="confirm"
                        placeholder="   Confirm password"
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    <button className="inreg" id="register" onClick={handleRegister}>
                        Create account
                    </button>
                    <label style={{color: "white"}}>
                        {message.error}
                    </label>
                </form>
            </div>
        </div>
    );
}