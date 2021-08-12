import React, { useReducer } from 'react';
import styles from '../styles/app/tasker_app.module.scss'
import Image from 'next/image'
import TabNav from '../components/tasker_app/TabNav.jsx'
import Card from '../components/tasker_app/Card.jsx'
import  {v4 as uuidv4 } from 'uuid'

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

// const [cardsState, cardsDispatch] = useReducer(cardsReducer, { 0: cardsPreset })

const cardsReducer = (cardsState, action) => {
    switch(action.type) {
        case 'addNewCard':
            console.log(cardsState)

            const newCards = {...cardsState}
            if (!newCards[action.payload.tabid]) {
                newCards[action.payload.tabid] = new Array
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
            return cardsState

        case 'changeHeader':
            const changedCards = {...cardsState}
            changedCards[action.payload.tabid][action.payload.cardidx].header = action.payload.value
            return changedCards


        case 'newCardItem': //recode passing card idx
            console.log(cardsState)

            const updatedCards = {...cardsState}

            for (let i = 0; i < updatedCards[action.payload.tabid].length; i++) {    //finding the card idx
                if (updatedCards[action.payload.tabid][i].id == action.payload.id) {
                    updatedCards[action.payload.tabid][i]['items'] = [...updatedCards[action.payload.tabid][i]['items'],
                     { 
                        id: uuidv4(),
                        checked: false,
                        text:''
                     }]
                     break
                }
            }
            return updatedCards


        case 'removeCardItem': //recode passing card idx
            const removedCards = {...cardsState}
            for (let i = 0; i < removedCards[action.payload.tabid].length; i++) {
                if (removedCards[action.payload.tabid][i].id == action.payload.cardid) {
                    removedCards[action.payload.tabid][i]['items'] = removedCards[action.payload.tabid][i]['items'].filter((item) => item.id != action.payload.itemid)
                    return removedCards
                }
            }

        case 'toggleCardItem': //recode passing card idx
            const toggledCards = {...cardsState}
            console.log(`card id:${action.payload.cardid} tabid:${action.payload.tabid} itemidx:${action.payload.idx}`)
            for (let i = 0; i < toggledCards[action.payload.tabid].length; i++) { //find correct card
                if (toggledCards[action.payload.tabid][i].id == action.payload.cardid) {
                    toggledCards[action.payload.tabid][i]['items'][action.payload.idx]['checked'] = !action.payload.checked
                    return toggledCards
                }
            }

        case 'editCardItem' : //recode passing card idx
            return cardsState

        default:
            console.log('default')

            return cardsState
    }
}

const Tasker_app = () => {

    const tabPreset = [
        { id: 1, name: 'School', current: false },
        { id: 2, name: 'Work', current: false },
        { id: 3, name: 'Daily', current: true },
        { id: 4, name: 'Exams', current: false },
        { id: 5, name: 'Gym', current: false },
    ]

    const [tabsState, dispatch] = useReducer(tabsReducer, { tabs: tabPreset, currentTabIdx: 0  })

    const cardItems1 = [
        { id: 1, checked: false, text: 'add cross off'},
        { id: 2, checked: true, text: 'New item 2'},
        { id: 3, checked: true, text: 'fix item length overflow'},
        { id: 4, checked: false, text: 'fix header length overflow'},
    ]
    
    const cardItems2 = [
        { id: 5, checked: true, text: 'Homework'},
        { id: 6, checked: false, text: 'Exercise'},
        { id: 7, checked: false, text: 'Walk dog'},
    ]

    const cardsPreset = [
        { id: 111, header: 'Shopping List', items: cardItems1},
        { id: 222, header: 'Tasks', items: cardItems2},
    ]


    const [cardsState, cardsDispatch] = useReducer(cardsReducer, { 1: cardsPreset })
    const currentTabId = tabsState.tabs[tabsState.currentTabIdx].id
    const currentTabIdStr = `${tabsState.tabs[tabsState.currentTabIdx].id}`
    return (
        <>
        <div className={styles.container}>
            <nav className={styles.tabs}>
                <TabNav tabsState={tabsState} dispatch={dispatch}/>
            </nav>

            <div className={styles.settingsWrap}>
                <Image src="/img/app/settings.svg" width={30} height={30}/>
            </div>

            <div className={styles.newCardWrap} onClick={() => cardsDispatch({ type: 'addNewCard', payload: { tabid: currentTabId } })}>
                <Image src="/img/app/new-card.svg" width={100} height={100}/>
            </div>

            <div className={styles.cardContainer}>
                <ul className={styles.cards}>
                    {
                        cardsState[currentTabIdStr] && cardsState[currentTabId].map((card, index) => {
                            return (
                            <li key={card.id} className={styles.card}> <Card card={card} cardidx={index} cardsState={cardsState} cardsDispatch={cardsDispatch} tabid={currentTabId}/> </li>
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
