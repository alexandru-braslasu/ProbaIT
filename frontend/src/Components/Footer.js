import React from "react";
import styles from '../Components/css/Footer.module.css';
import insta from '../images/insta.png';
import facebook from '../images/facebook.png';
import twitch from '../images/twitch.png';

export default function Footer() {
    return (
        <div className={styles.final}>
            <img src={insta} style={{ position: 'relative', height:'7vw', width: '7vw', left: '35vw'}} />
            <img src={facebook} style={{position: 'relative', height:'7vw', width: '7vw', left: '37vw'}} />
            <img src={twitch} style={{position: 'relative', height:'7vw', width: '7vw', left: '40vw'}} />
        </div>
    );
}