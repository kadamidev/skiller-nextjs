import React from 'react';
import styles from '../../styles/app/ProgressBar.module.scss'


const ProgressBar = (props) => {
    return (
        <div>
            <div className={props.darkMode ? [styles.progressContainer, styles.darkMode].join(' ') : styles.progressContainer}>
                <div style={{width: `${props.percent}%`}}className={styles.fill}>

                </div>

            </div>
        </div>
    );
}

export default ProgressBar;
