import React from 'react';
import styles from '../styles/app/Dialog.module.scss'
import Image from 'next/image'


const Dialog = ({children, darkMode, show, setShow}) => {

    function toggleShow() { setShow(!show) }
    
    
    return (
        <div>
            <div className={darkMode ? [styles.dialogContainer, styles.darkMode].join(' ') : styles.dialogContainer}>
                <div className={styles.closeButton} onClick={toggleShow}>
                    <Image src='/img/app/delete.svg' height={10} width={10}/>
                </div>
                <span className={styles.guestModeMessage}>{children}</span>
            </div>
        </div>
    );
}

export default Dialog;
