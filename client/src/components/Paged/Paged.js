import React from "react";
import styles from "./Paged.module.css";

export default function Paged({countriesPerPage,allCountries, paged}){
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++){
        pageNumbers.push(i );
    }
    
    return(
        <nav>
            <ul className={styles.paged} >
                { pageNumbers?.map(number => (
                    <li  key={number}>
                    <a className={styles.container} onClick={()=> paged(number)} >{number}</a>
                    </li>
                ))}
                </ul>
        </nav>
        )

}

