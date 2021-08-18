import React from 'react';
import styles from '../../styles/app/SideNav.module.scss'
import Image from 'next/image'
import Link from 'next/link'


const SideNav = ({ darkMode }) => {

    return (
        <>
        <div className={darkMode ? [styles.sideNavContainer, styles.darkMode].join(" ") : styles.sideNavContainer}>
            <ul>
                <li><Link href='/menu'><a><Image src="/img/app/side-home.svg" width={65} height={60}/></a></Link></li>
                <li className={styles.current}><Image src="/img/app/side-tasker.svg" width={65} height={65}/></li>
            </ul>
        </div>
        </>
    );
}

export default SideNav;