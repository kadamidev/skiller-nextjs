import React, { useReducer, useState, useEffect, useRef } from 'react'
import styles from '../styles/app/tasker_app.module.scss'
import Image from 'next/image'
import TabNav from '../components/tasker_app/TabNav.jsx'
import Card from '../components/tasker_app/Card.jsx'
import Settings from '../components/tasker_app/Settings.jsx'
import { getTabsData } from '../lib/tabs'
import { getCardsData } from '../lib/cards'
import { tabsReducer } from '../reducers/tabsReducer'
import { cardsReducer } from '../reducers/cardsReducer'
import { settingsReducer } from '../reducers/settingsReducer'
import SideNav from '../components/tasker_app/SideNav'
import { useMediaQuery } from '../lib/useMediaQuery'
import { ReactQueryDevtools } from 'react-query-devtools'
// import { useQuery, useMutation, queryCache } from 'react-query'



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

//   export async function getServerSideProps() {
//       const tabs = await prisma.tab.findMany({
//           where: {
//               user_id: user_id //update with session id
//           }
//       })
//       return {
//           props: {
              
//           }
//       }
//   }

const fetchTabsRequest = async (id) => {
    try {
        const response = await fetch(`/api/tasker_app/tab/${id}`)
        console.log('sent fetch')

        const { tabs: tabsData } = await response.json()
        console.log(tabsData)
        return await tabsData
    } catch(error) {
        console.log(`failed fetching tabs: ${error}`)
    }
}


const Tasker_app = ({ allTabsData, allCardsData }) => {
    const [tabsState, dispatch] = useReducer(tabsReducer, { tabs: allTabsData, currentTabIdx: 0  })
    const [cardsState, cardsDispatch] = useReducer(cardsReducer, {1: allCardsData})
    const [settings, settingsDispatch] = useReducer(settingsReducer, { darkMode: false, layout: 2 } )

    const [guestMode, setGuestMode] = useState(false)

    const user_id = 1

    // data persistence process
    // 1. loading data check if guestMode
        //  yes - load data from local store
        //  no - load data from db getServerSideProps
    // 2. updating data if guestmode
        //  yes - save to local storage
        //  no - add debouncer on data changes to not constantly request
    
    useEffect(() => { //Load data
        async function getData() {
        let tabData = null
        let tabIdxData = 0
        if (guestMode) { 
            tabData = await JSON.parse(localStorage.getItem('tabs'))
            tabIdxData = await JSON.parse(localStorage.getItem('tabsIdx'))
        } else { //fetch from db
            console.log('not guestmode')
            tabData = await JSON.parse(localStorage.getItem('tabs'))
            tabIdxData = await JSON.parse(localStorage.getItem('tabsIdx'))
            tabData = await fetchTabsRequest(user_id)
        }
        if (tabData) dispatch({type: 'setTabs', payload: {tabs: tabData, currentTabIdx: tabIdxData}})

        let cardsData = await JSON.parse(localStorage.getItem('cards'))
        if (cardsData) cardsDispatch({type: 'setCards', payload: {cards: cardsData}}) 

        let settingsData = await localStorage.getItem('settings')
        settingsData = await JSON.parse(settingsData)
        if (settingsData) settingsDispatch({type: 'setSettings', payload: {settings: settingsData}})
        }
        getData()
    }, [])


    ////localstoring updates //////////////////////////////////////////////////////////////////
    const firstRunTabs = useRef(true)
    useEffect(() => { //localstoring tabs data
        if (firstRunTabs.current) {
            firstRunTabs.current = false
            return
        }
        localStorage.setItem('tabs', JSON.stringify(tabsState.tabs))
        localStorage.setItem('tabsIdx', tabsState.currentTabIdx)

    }, [tabsState])

    const firstRunCards = useRef(true)
    useEffect(() => { //localstoring card data
        if (firstRunCards.current) {
            firstRunCards.current = false
            return
        }
        localStorage.setItem('cards', JSON.stringify(cardsState))
    }, [cardsState])
    
    const firstRunSettings = useRef(true)
    useEffect(() => {
        if (firstRunSettings.current) {
            firstRunSettings.current = false
            console.log('avoided first settings run')
            return
        }
        console.log('stored settings')
        localStorage.setItem('settings', JSON.stringify(settings))
    }, [settings])
//////////////////////////////////////////////////////////////////////////////////////////////

    async function saveTab(tab) {
        const response = await fetch('/api/tasker_app/tab', {
            method: 'POST',
            body: JSON.stringify(tab)
        })

        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return await response.json() 
    }

    useEffect( () => {
        (async () => {
            const dbTabs = await fetchTabsRequest(1)
            dispatch({type: 'setTabs', payload: { tabs: dbTabs, currentTabIdx: 1 }})
        })()
    }, [])


    const currentTabId = tabsState.tabs[tabsState.currentTabIdx].id

    //ui state
    const [showSettings, setShowSettings] = useState(false)
    const toggleShowSettings = () => { setShowSettings(!showSettings) }



    const darkMode = settings.darkMode
    const toggleDarkMode = () => { settingsDispatch({type: 'toggleDarkMode'}) }

    const isDesktop = useMediaQuery('(min-width: 769px')


    return (
        <>
        <div className={darkMode ? [styles.bkgContainer, styles.darkMode].join(" ") : styles.bkgContainer}>
        </div>
        <div className={styles.container}>
            <nav ref={firstRunTabs} className={styles.tabs}>
                <TabNav guestMode={guestMode} user_id={user_id} darkMode={darkMode} tabsState={tabsState} dispatch={dispatch} dbsave={saveTab}/>
            </nav>

            <aside className={styles.sideNavWrapper}>
                <SideNav darkMode={darkMode} />
            </aside>
            
            <div className={styles.settingsWrap} onClick={toggleShowSettings}>
                <Image src="/img/app/settings.svg" width={30} height={30} layout="responsive" />
            </div>
            <div ref={firstRunSettings} className={showSettings ? styles.settingsPanelWrapper : styles.hideSettingsPanel}>
                { <Settings toggleDarkMode={toggleDarkMode} darkMode={darkMode} layoutSetting={settings.layout} setLayoutSetting={(layout) => {settingsDispatch({type: 'setLayout', payload: {layout: layout}})} } /> }
            </div>

            <div className={styles.newCardWrap} onClick={() => cardsDispatch({ type: 'addNewCard', payload: { tabid: currentTabId } })}>
                <Image src="/img/app/new-card.svg" width={100} height={100}/>
            </div>

            <div className={styles.cardContainer}>
                <ul ref={firstRunCards} className={styles.cards} style={{columnCount: settings.layout}}> 
                    {
                        cardsState[currentTabId] && cardsState[currentTabId].map((card, index) => {
                            return (
                            <li key={card.id} className={styles.card}> <Card darkMode={darkMode} card={card} layoutSetting={settings.layout} cardidx={index} cardsState={cardsState} cardsDispatch={cardsDispatch} tabid={currentTabId}/> </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </>
    )
}

export default Tasker_app;
