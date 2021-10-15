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
import LoadingOverlay from '../components/LoadingOverlay'
import Signup from '../components/Signup'


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

    const [loadingOverlay, setLoadingOverlay] = useState(false)

    const [showLogin, setShowLogin] = useState(false)
    function toggleShowLogin() { 
        setShowLogin(!showLogin)
        setShowSignup(false)
    }

    const [showSignup, setShowSignup] = useState(false)
    function toggleShowSignup() { 
        setShowSignup(!showSignup)
        setShowLogin(false)
    }

    const [user, setUser] = useState({username: 'guest', id: 0})
    // const user_id = 1 //change this to update when user is set
    
    useEffect(() => { //Load data
        const getData = async () => {
            setLoadingOverlay(true)
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
                tabData = await fetchTabsRequest()
                await tabData.forEach((tab) => {
                    cardsData[tab.id] = tab.Card
                })
            }
            if (tabData && tabData !== null) dispatch({type: 'setTabs', payload: {tabs: tabData, currentTabIdx: tabIdxData}})
            if (cardsData && cardsData !== null) cardsDispatch({type: 'setCards', payload: {cards: cardsData}}) 


            let settingsData = await localStorage.getItem('settings')
            settingsData = await JSON.parse(settingsData)
            if (settingsData) settingsDispatch({type: 'setSettings', payload: {settings: settingsData}})
            setLoadingOverlay(false)
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
        setShowGuestDialog(false)
    }

    function logoutUser() {
        //clear local storage
        localStorage.removeItem(`[${user.id}]cards`)
        localStorage.removeItem(`[${user.id}]tabs`)
        localStorage.removeItem(`[${user.id}]tabsIdx`)

        setUser({username: 'guest', id: 0})
        setGuestMode(true)
        Cookies.remove('auth')
    }
    
    async function handleNewCardClick(currentTabId) {
        let newCardIndex = 0
        if (cardsState[currentTabId]) newCardIndex = cardsState[currentTabId].length
        // const newCardIndex = cardsState[currentTabId].length
        const snapshotTabId = currentTabId
        const newItem = {
            id: 'T' + uuidv4(),
            checked: false,
            text:'' 
           }
        const newCard = {
            id: 'T' + uuidv4(),
            header: 'New Card',
            items: [newItem],
        }
        cardsDispatch({ type: 'addNewCard', payload: { tabid: currentTabId, card: newCard } })
        if (!guestMode) {
            const card = await createCardRequest(snapshotTabId, newCard)
            cardsDispatch({type: 'updateCardId', payload: { tabid: snapshotTabId, idx: newCardIndex, newid: card.cardDbId }}) //update id after db returns
            cardsDispatch({type: 'updateItemId', payload: { tabid: snapshotTabId, cardidx: newCardIndex, itemidx: 0, newid: card.itemDbId }})
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
        <div className={styles.toggleBtn}>
            <button onClick={() => { setLoadingOverlay(!loadingOverlay) }}>toggle overlay</button>
        </div>
        
        <div className={styles.loadingOverlayWrapper}>
            <LoadingOverlay show={loadingOverlay} darkMode={darkMode} />
        </div>

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
                    You&apos;re using the app in Guest Mode, you may lose all your progress.</Dialog>
            </div>
            }
        

            <div className={showLogin ? styles.loginWrapper : styles.loginWrapperHide}>
                <Login loginUser={loginUser} toggleShow={toggleShowLogin} darkMode={darkMode} setUser={setUser} />
            </div>

            <div className={showSignup ? styles.loginWrapper : styles.loginWrapperHide}>
                <Signup toggleShow={toggleShowSignup} darkMode={darkMode} />
            </div>
        </div>
        </>
    )
}

export default Tasker_app;
