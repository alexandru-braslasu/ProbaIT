import React from 'react';
import backImage from '../../images/background.png';
import styles from '../../Components/css/Landingpage.module.css';
import Content from '../../Components/Content';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

export default function Landingpage() {
    return (
        <div>
            <Navbar/>
            <Content nrPag = {0}/>
            <img className={styles.land} alt='' src={backImage}/>
            <Footer/>
        </div>
    );
}