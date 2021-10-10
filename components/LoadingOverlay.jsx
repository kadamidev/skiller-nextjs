import React from 'react';
import styles from '../styles/app/LoadingOverlay.module.scss'
import Loader from './Loader';

const LoadingOverlay = (props) => {
    const containerClass = props.show ? styles.overlayContainer : styles.hide
    return (
        <div>
            <div className={props.darkMode ? [containerClass, styles.darkMode].join(" ") : containerClass}>
                <div className={styles.loaderWrapper}>
                    <Loader/>
                </div>
            </div>
        </div>
    );
}

export default LoadingOverlay;
