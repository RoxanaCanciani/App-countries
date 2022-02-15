import React from 'react';
import styles from './Card.module.css';

export default function Card ({id, flag, name, continent}){
    return(
    <div className={styles.all}>
        <div className={styles.card}>
        <div key={id}>
            <img className={styles.image} src={flag} alt ='imgage not found' width='200px'  height='250px'/>
            <div className={styles.section}>
            <h2>{name}</h2>
            <p>{continent}</p>
            </div>
        </div>
        </div>
        </div>
    )
}