import React from "react";
import styles from '../Components/css/Footer.module.css';
import insta from '../images/insta.png';
import facebook from '../images/facebook.png';
import twitch from '../images/twitch.png';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className={styles.final}>
            <Link to="https://www.instagram.com/lsacbucuresti/?hl=en">
                <img src={insta} alt="" style={{ position: 'relative', height:'7vw', width: '7vw', left: '35vw', cursor: 'pointer'}} />
            </Link>
            <Link to="https://www.facebook.com/LsacBucuresti/">
                <img src={facebook} alt="" style={{position: 'relative', height:'7vw', width: '7vw', left: '37vw', cursor: 'pointer'}} />
            </Link>
            <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Flsacbucuresti">
                <img src={twitch} alt="" style={{position: 'relative', height:'7vw', width: '7vw', left: '40vw', cursor: 'pointer'}} />
            </Link>
        </div>
    );
}