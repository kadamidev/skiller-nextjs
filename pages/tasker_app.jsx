import React, { useReducer, useState } from 'react';
import styles from '../styles/app/tasker_app.module.scss'
import Image from 'next/image'
import TabNav from '../components/tasker_app/TabNav.jsx'
import Card from '../components/tasker_app/Card.jsx'
import  {v4 as uuidv4 } from 'uuid'
import Settings from '../components/tasker_app/Settings.jsx'
import { getTabsData } from '../lib/tabs';
import { getCardsData } from '../lib/cards';

const tabsReducer = (tabsState, action) => {
    switch(action.type) {
        case 'addNewTab':
            return {tabs: [...tabsState.tabs, { id: uuidv4(), name: 'Untitled'}],
                    currentTabIdx: tabsState.currentTabIdx}
                    
        case 'deleteTab':
            if (tabsState.tabs.length <= 1)  //can't delete a tab if it's the only one
                return {currentTabIdx: tabsState.currentTabIdx, tabs: tabsState.tabs}

            const currentTabId = tabsState.tabs[tabsState.currentTabIdx].id //capture id of currentTab
            const newArr = tabsState.tabs.filter(tab => tab.id != action.payload.id)
            // maintaining current tab pointer
            if (action.payload.id == currentTabId) { //if the deleted tab is the currentTab
                return { tabs: newArr, currentTabIdx: 0 }
            }

            if (action.payload.idx < tabsState.currentTabIdx) { //check for currentTab pointer shift
                for (let idx = 0; idx < tabsState.tabs.length; idx++) { //update pointer
                    if (newArr[idx].id == currentTabId)
                        return { tabs: newArr, currentTabIdx: idx }
                }
            }
            
            return { tabs: newArr, currentTabIdx: tabsState.currentTabIdx }
            
        case 'changeTabName':
            const nameChangedTabs = tabsState.tabs.map(tab => {
                if (tab.id == action.payload.tabId)
                    return { id: tab.id, name: action.payload.name }
                return tab
            })
            return {currentTabIdx: tabsState.currentTabIdx, tabs: nameChangedTabs }

        case 'changeCurrentTab':
            return {currentTabIdx: action.payload.idx, tabs: tabsState.tabs}

        default:
            console.log('default hit')
            return tabsState
    }
}


const cardsReducer = (cardsState, action) => {
    switch(action.type) {
        case 'addNewCard':

            const newCards = {...cardsState}
            if (!newCards[action.payload.tabid]) {
                newCards[action.payload.tabid] = []
            }

            newCards[action.payload.tabid] = [...newCards[action.payload.tabid], {
                id: uuidv4(),
                header: 'New Card',
                items: [{
                         id: uuidv4(),
                         checked: false,
                         text:'New Item' 
                        }]
                }]
            return newCards

        case 'deleteCard':
            const deletedCards = {...cardsState}
            deletedCards[action.payload.tabid].splice(action.payload.cardidx, 1)
            return deletedCards

        case 'changeHeader':
            const changedCards = {...cardsState}
            changedCards[action.payload.tabid][action.payload.cardidx].header = action.payload.value
            return changedCards


        case 'newCardItem':
            const updatedCards = {...cardsState}
            updatedCards[action.payload.tabid][action.payload.cardidx]['items'] = [...updatedCards[action.payload.tabid][action.payload.cardidx]['items'],
                {  
                id: uuidv4(),
                checked: false,
                text:''
                }]
            return updatedCards


        case 'removeCardItem': 
            const removedCards = {...cardsState}
            removedCards[action.payload.tabid][action.payload.cardidx]['items'] = removedCards[action.payload.tabid][action.payload.cardidx]['items'].filter((item) => item.id != action.payload.itemid)
            return removedCards


        case 'toggleCardItem': 
            const toggledCards = {...cardsState}
            // console.log(`card idx:${action.payload.cardidx} tabid:${action.payload.tabid} itemidx:${action.payload.idx}`)
            toggledCards[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['checked'] = !action.payload.checked
            return toggledCards
        

        case 'editCardItem':
            const edittedItems = {...cardsState}
            edittedItems[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['text'] = action.payload.value
            return edittedItems

        default:
            console.log('default')

            return cardsState
    }
}

export async function getStaticProps() {
    const allTabsData = getTabsData()
    const allCardsData = getCardsData()

    return {
      props: {
        allTabsData,
        allCardsData
      }
    }
  }

const Tasker_app = ({ allTabsData, allCardsData }) => {
    const [tabsState, dispatch] = useReducer(tabsReducer, { tabs: allTabsData, currentTabIdx: 0  })
    const [cardsState, cardsDispatch] = useReducer(cardsReducer, { 1: allCardsData })
    
    const currentTabId = tabsState.tabs[tabsState.currentTabIdx].id
    const currentTabIdStr = `${tabsState.tabs[tabsState.currentTabIdx].id}`


    //ui state
    const [showSettings, setShowSettings] = useState(false)
    const toggleShowSettings = () => { setShowSettings(!showSettings) }
    const [layoutSetting, setLayoutSetting] = useState(2)

    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => { setDarkMode(!darkMode) }


    return (
        <>
        <div className={darkMode ? [styles.container, styles.darkMode].join(" ") : styles.container}>
            <nav className={styles.tabs}>
                <TabNav darkMode={darkMode} tabsState={tabsState} dispatch={dispatch}/>
            </nav>

            <div className={styles.settingsWrap} onClick={toggleShowSettings}>
                <Image src="/img/app/settings.svg" width={30} height={30}/>
            </div>
            <div className={showSettings ? styles.settingsPanelWrapper : styles.hideSettingsPanel}>
                { <Settings toggleDarkMode={toggleDarkMode} darkMode={darkMode} layoutSetting={layoutSetting} setLayoutSetting={setLayoutSetting} /> }
            </div>

            <div className={styles.newCardWrap} onClick={() => cardsDispatch({ type: 'addNewCard', payload: { tabid: currentTabId } })}>
                <Image src="/img/app/new-card.svg" width={100} height={100}/>
            </div>

            <div className={styles.cardContainer}>
                <ul className={styles.cards} style={{columnCount: layoutSetting}}> 
                    {
                        cardsState[currentTabIdStr] && cardsState[currentTabId].map((card, index) => {
                            return (
                            <li key={card.id} className={styles.card}> <Card darkMode={darkMode} card={card} layoutSetting={layoutSetting} cardidx={index} cardsState={cardsState} cardsDispatch={cardsDispatch} tabid={currentTabId}/> </li>
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
