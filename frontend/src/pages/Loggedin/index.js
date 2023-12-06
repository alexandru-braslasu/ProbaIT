import React from 'react';
import backImage from '../../images/background.png';
import styles from '../../Components/css/Landingpage.module.css';
import Content from '../../Components/Content';
import Footer from '../../Components/Footer';
import NavbarLoggedIn from '../../Components/NavbarLoggedIn';

export default function Loggedin() {
    return (
        <div>
            <NavbarLoggedIn/>
            <Content nrPag = {1}/>
            <img className={styles.land} alt='' src={backImage}/>
            <Footer/>
        </div>
    );
}