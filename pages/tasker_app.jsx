import React, { useState } from 'react';
import styles from '../styles/app/tasker_app.module.scss'
import Image from 'next/image'
import TabNav from '../components/tasker_app/TabNav.jsx'
import Card from '../components/tasker_app/Card.jsx'

const Tasker_app = () => {
    
    const cardItems1 = [
        { checked: false, text: 'Add enter for new item, backspace to delete item'},
        { checked: true, text: 'New item 2'},
        { checked: true, text: 'fix item length overflow'},
        { checked: false, text: 'fix header length overflow'},
    ]
    
    const cardItems2 = [
        {checked: true, text: 'Homework'},
        {checked: false, text: 'Exercise'},
        {checked: false, text: 'Walk dog'},
    ]

    const cardsPreset = [
        { header: 'Shopping List', items: cardItems1},
        { header: 'Tasks', items: cardItems2},
    ]

    const [cards, setCards] = useState(cardsPreset)


    const addNewCard = () => {
         setCards(cards => [...cards, {header: 'New Card', items: [{checked: false, text: 'New Item'}]} ]) 
        }
    
    return (
        <>
        <div className={styles.container}>
            <nav className={styles.tabs}>
                <TabNav currentTabName='New tab'/>
            </nav>

            <div className={styles.settingsWrap}>
                <Image src="/img/app/settings.svg" width={30} height={30}/>
            </div>

            <div className={styles.newCardWrap} onClick={addNewCard}>
                <Image src="/img/app/new-card.svg" width={100} height={100}/>
            </div>

            <div className={styles.cardContainer}>
                <ul className={styles.cards}>
                    {
                        cards.map((card, index) => {
                            return (
                            <li key={index} className={styles.card}> <Card header={card.header} items={card.items}/> </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        </>
    );
}

export default Tasker_app;
