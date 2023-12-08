import React from 'react'
import styles from "./social.module.css";

const Social = () => {
    return (
        <div className={styles.container}>
            <a className={styles.icons} href="https://www.instagram.com/carlos_c4rvalho/" target="blank">
                <i className="uil uil-instagram"></i>
                L
            </a>

            <a className={styles.icons} href="mailto:carlos561649@gmail.com" target="blank">
                M
                <i className="uil uil-envelope-alt"></i>
            </a>

            <a className={styles.icons} href="https://github.com/CarlosC4rvalho" target="blank">
                G
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    )
}

export default Social