import React from 'react';
import styles from '../styles/app/tasker_app.module.scss'
import Image from 'next/image'
import TabNav from '../components/TabNav.jsx'

const tasker_app = () => {
    return (
        <>
        <div className={styles.container}>
            <nav className={styles.tabs}>
                <TabNav />
            </nav>

            <div className={styles.settingsWrap}>
                <Image src="/img/app/settings.svg" width={30} height={30}/>
            </div>

            <div className={styles.newCardWrap}>
                <Image src="/img/app/new-card.svg" width={100} height={100}/>
            </div>

            <div className={styles.cardContainer}>
                <ul className={styles.cards}>
                    <li className={styles.card}></li>
                    <li className={styles.card}></li>
                    <li className={styles.card}></li>
                    <li className={styles.card}></li>
                    <li className={styles.card}></li>
                    <li className={styles.card}></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default tasker_app;
