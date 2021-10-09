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
// import { ReactQueryDevtools } from 'react-query-devtools'
// import { useQuery, useMutation, queryCache } from 'react-query'
import  {v4 as uuidv4 } from 'uuid'
import { fetchTabsRequest, createCardRequest, createItemRequest } from '../lib/tasker_api_requests'
import Dialog from '../components/Dialog'
import UserPanel from '../components/UserPanel'
import Login from '../components/Login'
import Cookies from 'js-cookie'


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
    const [cardsState, cardsDispatch] = useReducer(cardsReducer, {1: allCardsData})
    const [settings, settingsDispatch] = useReducer(settingsReducer, { darkMode: false, layout: 2 } )

    const [guestMode, setGuestMode] = useState(true)
    const [showGuestDialog, setShowGuestDialog] = useState(true)

    const [showLogin, setShowLogin] = useState(false)
    function toggleShowLogin() { setShowLogin(!showLogin) }

    const [showSignup, setShowSignup] = useState(false)
    function toggleShowSignup() { setShowSignup(!showSignup) }

    const [user, setUser] = useState({username: 'guest', id: 0})
    // const user_id = 1 //change this to update when user is set
    
    useEffect(() => { //Load data
        const getData = async () => {
        let tabData = null
        let tabIdxData = 0
        let cardsData = {}
        if (guestMode) { 
            console.log('guestmode')
            if (localStorage.getItem('tabs') !== null) {
                tabData = await JSON.parse(localStorage.getItem('tabs'))
                tabIdxData = await JSON.parse(localStorage.getItem('tabsIdx'))
                cardsData = await JSON.parse(localStorage.getItem('cards'))
            }
        } else { //fetch from db
            console.log('not guestmode')
            tabData = await JSON.parse(localStorage.getItem(`[${user.id}]tabs`))
            const storedTabIdx = await JSON.parse(localStorage.getItem(`[${user.id}]tabsIdx`))
            if (storedTabIdx !== null) {
                tabIdxData = storedTabIdx
            } else {
                tabIdxData = 0
            }
            tabData = await fetchTabsRequest(user.id)
            await tabData.forEach((tab) => {
                cardsData[tab.id] = tab.Card
            })
        }
        if (tabData && tabData !== null) dispatch({type: 'setTabs', payload: {tabs: tabData, currentTabIdx: tabIdxData}})
        if (cardsData && cardsData !== null) cardsDispatch({type: 'setCards', payload: {cards: cardsData}}) 


        let settingsData = await localStorage.getItem('settings')
        settingsData = await JSON.parse(settingsData)
        if (settingsData) settingsDispatch({type: 'setSettings', payload: {settings: settingsData}})
        }
        getData()
    }, [guestMode])



    ////localstoring updates //////////////////////////////////////////////////////////////////
    const firstRunTabs = useRef(true)
    useEffect(() => { //localstoring tabs data
        if (firstRunTabs.current) {
            firstRunTabs.current = false
            return
        }
        if (!guestMode) {
            localStorage.setItem(`[${user.id}]tabs`, JSON.stringify(tabsState.tabs))
            localStorage.setItem(`[${user.id}]tabsIdx`, tabsState.currentTabIdx)
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

        if (!guestMode) {
            localStorage.setItem(`[${user.id}]cards`, JSON.stringify(cardsState))
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


    function loginUser(user) {
        setUser(user)
        setGuestMode(false)
    }

    function logoutUser() {
        //remove cookie thats httponly
        setUser({username: 'guest', id: 0})
        setGuestMode(true)
        Cookies.remove('auth')
    }

    // {
    //     httpOnly: true, 
    //     secure: process.env.NODE_ENV !== 'development',
    //     sameSite: 'strict',
    //     path: '/'
    // }
    
    async function handleNewCardClick(currentTabId) {
        let newCardIndex = 0
        if (cardsState[currentTabId]) newCardIndex = cardsState[currentTabId].length
        // const newCardIndex = cardsState[currentTabId].length
        const snapshotTabId = currentTabId
        const newItem = {
            id: uuidv4(),
            checked: false,
            text:'' 
           }
        const newCard = {
            id: uuidv4(),
            header: 'New Card',
            items: [newItem],
        }
        cardsDispatch({ type: 'addNewCard', payload: { tabid: currentTabId, card: newCard } })
        if (!guestMode) {
            const card = await createCardRequest(snapshotTabId, newCard)
            const item = await createItemRequest(card.dbid, newItem)
            console.log(card)
            console.log(item)
            cardsDispatch({type: 'updateCardId', payload: { tabid: snapshotTabId, idx: newCardIndex, newid: card.dbid }}) //update id after db returns
            cardsDispatch({type: 'updateItemId', payload: { tabid: snapshotTabId, cardidx: newCardIndex, itemidx: 0, newid: item.dbid }})
        }
    }

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
                <TabNav guestMode={guestMode} user_id={user.id} darkMode={darkMode} tabsState={tabsState} dispatch={dispatch}/>
            </nav>

            <aside className={styles.sideNavWrapper}>
                <SideNav darkMode={darkMode} />
            </aside>
            
            <div className={styles.userPanelWrap}>
                <UserPanel guestMode={guestMode} darkMode={darkMode} username={user.username} toggleLogin={toggleShowLogin} toggleSignup={toggleShowSignup} logoutUser={logoutUser}/>
            </div>

            <div className={styles.settingsWrap} onClick={toggleShowSettings}>
                <Image src="/img/app/settings.svg" width={30} height={30} layout="responsive" />
            </div>
            <div ref={firstRunSettings} className={showSettings ? styles.settingsPanelWrapper : styles.hideSettingsPanel}>
                { <Settings toggleDarkMode={toggleDarkMode} darkMode={darkMode} layoutSetting={settings.layout} setLayoutSetting={(layout) => {settingsDispatch({type: 'setLayout', payload: {layout: layout}})} } /> }
            </div>

            <div className={styles.newCardWrap} onClick={() => handleNewCardClick(currentTabId)}>
                <Image src="/img/app/new-card.svg" width={100} height={100}/>
            </div>

            <div className={styles.cardContainer}>
                <ul ref={firstRunCards} className={styles.cards} style={{columnCount: settings.layout}}> 
                    {
                        cardsState[currentTabId] && cardsState[currentTabId].map((card, index) => {
                            return (
                            <li key={card.id} className={styles.card}> <Card guestMode={guestMode} darkMode={darkMode} card={card} layoutSetting={settings.layout} cardidx={index} cardsState={cardsState} cardsDispatch={cardsDispatch} tabid={currentTabId}/> </li>
                            )
                        })
                    }
                </ul>
            </div>
            {showGuestDialog && <div className={styles.guestModeMessage}>
                <Dialog darkMode={darkMode} show={showGuestDialog} setShow={setShowGuestDialog}>
                    <span style={{color: '#e77777'}}>Warning!</span><br></br>
                    You're using the app in Guest Mode, you may lose all your progress.</Dialog>
            </div>
            }

            <div className={showLogin ? styles.loginWrapper : styles.loginWrapperHide}>
                <Login loginUser={loginUser} toggleShow={toggleShowLogin} darkMode={darkMode} setUser={setUser} />
            </div>
        </div>
        </>
    )
}

export default Tasker_app;
