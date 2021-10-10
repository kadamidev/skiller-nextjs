import React from 'react';
import styles from '../styles/app/Loader.module.scss'


const Loader = () => {
    return (
        <div>
            <div className={styles.loaderContainer}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
            </div>
        </div>
    );
}

export default Loader;
