import React from 'react';
import LandingpageTop from '../../Components/LandingpageTop';
import backImage from '../../images/background.png';
import styles from '../../Components/css/Landingpage.module.css';
import Content from '../../Components/Content';

export default function Landingpage() {
    return (
        <div>
            <LandingpageTop/>
            <Content/>
            <img className={styles.land} src={backImage}/>
        </div>
    );
}