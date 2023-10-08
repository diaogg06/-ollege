import React from "react";
import styles from "./pages.module.css"

function BtnPages()  {
    return (
        <div className={styles.pagination}>
            <a href ="#" className={styles.button}>1</a>
            <button className={styles.flip}>...</button>
            <a href ="#" className={styles.button}>18</a>
            <a href ="#" className={styles.button}>19</a>
            <a href ="#" className={styles.button}>20</a>
            <button className={styles.flip}>...</button>
            <a href ="#" className={styles.button}>47</a>
        </div>
    )
}

export default BtnPages
