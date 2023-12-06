import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import logo from '../images/logo.png';
import styles from './css/NavbarLoggedIn.module.css';
import './css/Navbar.css';
import { useState } from 'react';
import PopupPoll from './PopupPoll';
import { NavLink } from 'react-router-dom';

export default function NavbarLoggedIn() {
    const [isOpenPoll, setIsOpenPoll] = useState(false);

    const togglePopupPoll = () => {
        setIsOpenPoll(!isOpenPoll);
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
                        <li className={styles.poll}>
                            <button className="nav-link" onClick={togglePopupPoll}>
                                Create poll
                            </button>
                        </li>
                        <li className={styles.logOut}>
                            <NavLink to='/landingpage' style={{textDecoration: 'none'}}>
                                <button className="nav-link">
                                    Log out
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            {isOpenPoll && <PopupPoll
                handleClose = {togglePopupPoll}
                content = {
                    <div>
                        Create a Poll
                    </div>
            }/>}
        </nav>
    );
}