import React from 'react';
import styles from '../../styles/app/SideNav.module.scss'


const SideNav = ({ darkMode }) => {
    return (
        <>
        <div className={darkMode ? [styles.sideNavContainer, styles.darkMode].join(" ") : styles.sideNavContainer}>

        </div>
        </>
    );
}

export default SideNav;