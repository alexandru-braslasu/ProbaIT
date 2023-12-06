import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import logo from '../images/logo.png';
import styles from './css/Navbar.module.css';
import './css/Navbar.css';
import { useState } from 'react';
import Popuplogin from './PopupLogin';
import PopupRegister from './PopupRegister';

export default function Navbar() {
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenRegister, setIsOpenRegister] = useState(false);

    const togglePopupLogin = () => {
        setIsOpenLogin(!isOpenLogin);
        if (isOpenRegister)
            setIsOpenRegister(!isOpenRegister);
    }

    const togglePopupRegister = () => {
        setIsOpenRegister(!isOpenRegister);
        if (isOpenLogin)
            setIsOpenLogin(!isOpenLogin);
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position: 'fixed', backgroundColor: 'white', height: '65px', width: '100%', zIndex: '1000', boxShadow: '0px 0px 5px 0px rgba(0,0,0,1)'}}>
            <div class="container-fluid">
                <img className="navbar-brand" href="#" alt='' src={logo}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className={styles.logIn}>
                            <button className="nav-link" onClick={togglePopupLogin}>
                                Login
                            </button>
                        </li>
                        <li className={styles.register}>
                            <button className="nav-link" onClick={togglePopupRegister}>
                                Register
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {isOpenLogin && <Popuplogin
                handleClose = {togglePopupLogin}
                content = {
                    <div>
                        Login
                    </div>
                }/>}
            {isOpenRegister && <PopupRegister
                handleClose = {togglePopupRegister}
                content = {
                    <div>
                        Register
                    </div>
            }/>}
        </nav>
    );
}