import React from 'react';
import styles from '../styles/app/TabNav.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const TabNav = () => {
    return (
        <>
        <nav className={styles.container}>
            <div className={styles.homeWrap}>
                <Link href='menu'><a><Image src="/img/app/home.svg" width={30} height={30}/></a></Link>
            </div>  
            <span>Current Tab</span>
            <div className={styles.tabsWrap}>
                <Image src="/img/app/tabs.svg" width={30} height={30}/>
            </div>

        </nav>     
        </>
    );
}

export default TabNav;
