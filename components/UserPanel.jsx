import React, { useState } from 'react';
import styles from '../styles/app/UserPanel.module.scss'


const UserPanel = ({username, guestMode, darkMode, toggleLogin, toggleSignup}) => {
    const [showPopup, setShowPopup] = useState(false)

    function toggleShowPopup() { setShowPopup(!showPopup) }

    const popupClass = showPopup ? styles.popupContainer : styles.hide

    function handleLoginClick() {
        toggleLogin()
        toggleShowPopup()
    }
    
    return (
        <div>
            <div className={styles.container}>
                <div 
                onClick={toggleShowPopup}
                className={guestMode ? [styles.userContainer, styles.guestIcon].join(' ') : styles.userContainer}>
                    <h1>{guestMode ? 'G' : username[0].toUpperCase()}</h1>
                </div>

                <div className={darkMode ? [popupClass, styles.darkMode].join(' ') : popupClass}>
                    <h1>{guestMode ? `Welcome Guest` : `Welcome back, ${username}`}</h1>
                    <div className={styles.buttons}>
                        {guestMode ? 
                        <>
                            <button onClick={handleLoginClick}>Login</button>
                            <button>Signup</button>
                        </>
                        :
                        <>
                            <button>Logout</button>
                        </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPanel;
