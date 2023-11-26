import React from 'react';
import LandingpageTop from '../../Components/LandingpageTop';
import backImage from '../../images/background.png';
import back from '../../images/back.png';
import styles from '../../Components/css/Landingpage.module.css';
import Content from '../../Components/Content';
import Footer from '../../Components/Footer';

export default function Loggedin() {
    return (
        <div>
            <LandingpageTop/>
            <Content nrPag = {1}/>
            <img className={styles.land} src={backImage}/>
            <Footer/>
        </div>
    );
}