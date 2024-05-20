"use client";

import styles from "./page.module.css"

export default function Profile() {
    return(
        <>
        <div className={styles.sidebar}>
            <ul className={styles.options}>
        
                <li>
                    <input type="checkbox" name="general"/>
                    <label htmlFor="general">
                        General
                    </label>
                </li>
                    
                <li>                        
                    <input type="checkbox" name="general"/>
                    <label htmlFor="general">
                        Overview
                    </label>
                </li>

                <li>                        
                    <input type="checkbox" name="general"/>
                    <label htmlFor="general">
                        Payment
                    </label>
                </li>

            </ul>
            <div className={styles.hr}></div>
        </div>
        </>
    );
}
