import React from 'react';
import styles from '../styles/app/tasker_app.module.scss'
import Image from 'next/image'
import TabNav from '../components/tasker_app/TabNav.jsx'
import Card from '../components/tasker_app/Card.jsx'

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
                    <li className={styles.card}><Card collapsed={true}/></li>
                    <li className={styles.card}><Card/></li>

                </ul>
            </div>
        </div>
        </>
    );
}

export default tasker_app;
