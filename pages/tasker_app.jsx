import React, { useReducer, useState } from 'react';
import styles from '../styles/app/tasker_app.module.scss'
import Image from 'next/image'
import TabNav from '../components/tasker_app/TabNav.jsx'
import Card from '../components/tasker_app/Card.jsx'
import Settings from '../components/tasker_app/Settings.jsx'
import { getTabsData } from '../lib/tabs';
import { getCardsData } from '../lib/cards';
import { tabsReducer } from '../reducers/tabsReducer';
import { cardsReducer } from '../reducers/cardsReducer';
import SideNav from '../components/tasker_app/SideNav';
import { useMediaQuery } from '../lib/useMediaQuery'



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

    const isDesktop = useMediaQuery('(min-width: 769px')


    return (
        <>
        <div className={darkMode ? [styles.bkgContainer, styles.darkMode].join(" ") : styles.bkgContainer}>
        </div>
        <div className={styles.container}>
            <nav className={styles.tabs}>
                <TabNav darkMode={darkMode} tabsState={tabsState} dispatch={dispatch}/>
            </nav>
            { isDesktop &&
                <aside className={styles.sideNavWrapper}>
                    <SideNav darkMode={darkMode} />
                </aside>
            }
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
