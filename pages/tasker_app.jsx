import React, { useState, useReducer } from 'react';
import styles from '../styles/app/tasker_app.module.scss'
import Image from 'next/image'
import TabNav from '../components/tasker_app/TabNav.jsx'
import Card from '../components/tasker_app/Card.jsx'

const reducer = (tabsState, action) => {
    switch(action.type) {
        case 'addNewTab':
            return {tabs: [...tabsState.tabs, { id: Date.now(), name: 'Untitled', current: false }],
                    currentTabKey: tabsState.currentTabKey}
                    
        case 'deleteTab':
            if (tabsState.tabs.length <= 1)  //can't delete a tab if it's the only one
                return {currentTabKey: tabsState.currentTabKey, tabs: tabsState.tabs}
            const newArr = tabsState.tabs.filter(tab => tab.id != action.payload.id)
            let tabKey = tabsState.currentTabKey
            if (tabKey == action.payload.tabKey)
                tabKey = 0
            return { currentTabKey: tabKey, tabs: newArr }
            
        case 'changeTabName':
                const nameChangedTabs = [...tabsState.tabs]
                    nameChangedTabs[tabsState.currentTabKey].name = action.payload.name
            return {currentTabKey: tabsState.currentTabKey, tabs: nameChangedTabs }

        default:
            return tabsState
    }
}

// nameChangedTabs = tabsState.tabs.map(tab => {
//     if (tab.id === action.payload.id) {
//         { id: tab.id, name: action.payload.name, current: tab.current}



const Tasker_app = () => {

    const tabPreset = [
        { id: 1, name: 'School', current: false },
        { id: 2, name: 'Work', current: false },
        { id: 3, name: 'Daily', current: true },
        { id: 4, name: 'Exams', current: false },
        { id: 5, name: 'Gym', current: false },
    ]

    const [tabsState, dispatch] = useReducer(reducer, { currentTabKey: 2, tabs: tabPreset })

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



    
    return (
        <>
        <div className={styles.container}>
            <nav className={styles.tabs}>
                <TabNav tabsState={tabsState} dispatch={dispatch}/>
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
