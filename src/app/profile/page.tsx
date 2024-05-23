"use client";

import styles from "./page.module.css"

export default function Profile() {
    return(
        <div className={styles.sidebar}>
            <ul className={styles.options}>

                <span className="gerneral">
                    Gerneral
                </span>

                <span className="overview">
                    Overview
                </span>

                <span className="payment">
                    Payment
                </span>

                <span className="payment">
                    Payment
                </span>

                <span className="payment">
                    Payment
                </span>

                <span className="payment">
                    Payment
                </span>

                <span className="payment">
                    Payment
                </span>

            </ul>
            <div className={styles.hr}></div>
        </div>
    );
}
