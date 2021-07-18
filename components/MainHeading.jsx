import React from 'react';
import styles from '/styles/MainHeading.module.scss'

const MainHeading = () => {
    return (
        <div className={styles.textContainer}>
            <h1 className={styles.productivity}>Productivity.</h1>
            <h1 className={styles.redefined}>Redefined.</h1>
            <p>A task app like no other</p>
        </div>
    )
}

export default MainHeading;
