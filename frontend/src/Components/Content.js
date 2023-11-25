import React from "react";
import styles from './css/Content.module.css';
import testoasa from '../images/testoasa.png'

export default function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.continutTop}>
                <div className={styles.text}>
                    Opiniile sunt mai importante ca niciodată. Platformele de sondaje permit organizatorilor să culeagă feedback direct de la audiența lor și să înțeleagă mai bine nevoile și dorințele acesteia.
                </div>
                <img className={styles.imag} src={testoasa}/>
            </div>
            <div className={styles.contentMid1}>
                <div className={styles.writing1}>
                    Ce animal se afla pe tricourile departamentului de IT?
                </div>
                <div className={styles.writing2}>
                    Make a choice:
                </div>
                <button className={styles.b11}/>
            </div>
            <div className={styles.contentMid2}>
                Buna
            </div>
        </div>
    );
}