import React from 'react';
import styles from '../styles/app/UserPanel.module.scss'


const UserPanel = ({guestMode}) => {
    return (
        <div>
            <div className={guestMode ? [styles.userContainer, styles.guest].join(' ') : styles.userContainer}>
                <h1>G</h1>
            </div>
        </div>
    );
}

export default UserPanel;
