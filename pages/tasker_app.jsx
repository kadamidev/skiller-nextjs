import React, { useState } from 'react';
import styles from '../styles/app/tasker_app.module.scss'
import Image from 'next/image'
import TabNav from '../components/tasker_app/TabNav.jsx'
import Card from '../components/tasker_app/Card.jsx'

const Tasker_app = () => {
    
    const cardItems1 = [
        { checked: false, text: 'add cross off'},
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

    const tabPreset = [
        { name: 'School', current: false },
        { name: 'Work', current: false },
        { name: 'Daily', current: true },
        { name: 'Exams', current: false },
        { name: 'Gym', current: false },
    ]
    
    const [tabs, setTabs] = useState(tabPreset)
    const [currentTab, setCurrentTab] = useState(2)

    const findCurrentTab = () => {
        for (let idx = 0; i < tabs.length(); i++) {
            if (tabs[i].current == true) {
                setCurrentTab(i)
                break
            }
        }
    }


    const handleTabNameChange = (event) => {
        const newTabs = [...tabs]
        newTabs[currentTab].name = event.value
        setTabs(newTabs)
        console.log(event.value)
    }

    const handleNewTab = (event) => {
        setTabs([...tabs, { name: 'Untitled', current: false }])
        console.log(tabs)
    }
    
    return (
        <>
        <div className={styles.container}>
            <nav className={styles.tabs}>
                <TabNav tabs={tabs} currentTab={currentTab} onTabNameChange={handleTabNameChange} onNewTab={handleNewTab}/>
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
    )
}

export default Tasker_app;
