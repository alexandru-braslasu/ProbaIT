import React, { useState } from "react";
import styles from './css/Content.module.css';
import testoasa from '../images/testoasa.png'
import Box from "./Box";

export default function Content({nrPag}) {
    return (
        <div className={styles.content}>
            <div className={styles.continutTop}>
                <div className={styles.text}>
                    Opiniile sunt mai importante ca niciodată. Platformele de sondaje permit organizatorilor să culeagă feedback direct de la audiența lor și să înțeleagă mai bine nevoile și dorințele acesteia.
                </div>
                <img className={styles.imag} src={testoasa}/>
            </div>
            <div className={styles.contentMid1}>
                <Box id = {nrPag}/>
            </div>
            <div className={styles.contentMid2}>
                <Box id = {0}/>
            </div>
            <div className={styles.contentMid3}>
                <Box id = {0}/>
            </div>
            <div className={styles.contentMid4}>
                <Box id = {0}/>
            </div>
        </div>
    );
}