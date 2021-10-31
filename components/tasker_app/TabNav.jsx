import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/app/TabNav.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import TabsMenu from './TabsMenu';
import { useMediaQuery } from '../../lib/useMediaQuery';
import  {v4 as uuidv4 } from 'uuid'
import { createTabRequest, deleteTabRequest, updateTabRequest } from '../../lib/tasker_api_requests';
import queuedDbCall from '../../lib/queuedDbCall';



const TabNav = ({guestMode, user_id, darkMode, tabsState, dispatch}) => {

    const [tabEdit, setTabEdit] = useState(false)
    const [editableTabIdx, setEditableTabIdx] = useState(false)
    
    const toggleTabEdit = () => { setTabEdit(!tabEdit) }
    
    const [showTabMenu, setShowTabMenu] = useState(false)
    const toggleTabMenu = () => setShowTabMenu(!showTabMenu)
    
    const currentTab = tabsState.tabs[tabsState.currentTabIdx]
    
    const isDesktop = useMediaQuery('(min-width: 769px)')
    
    const editNode = useRef(null)
    const [editNodeVisible, setEditNodeVisible] = useState(false)

    async function handleNewTabClick() {
        const newTabIndex = tabsState.tabs.length.valueOf()
        const newTab = {
            id: 'T' + uuidv4(),
            name: 'Untitled'
        }
        dispatch({type: 'addNewTab', payload: {tab: newTab}}) //optimistically add a new tab
        if (!guestMode) { //persist tab to db
        const tab = await createTabRequest(user_id)
        console.log(tab)

        dispatch({type: 'updateTabId', payload: {newTabIdx: newTabIndex, tabDbId: tab.dbid}})
        }
    }

    function handleDeleteTabClick (tab, idx) {
        dispatch({ type: 'deleteTab', payload: {id: tab.id, idx: idx} }) // optimistic delete
        if (!guestMode && tabsState.tabs.length > 1) { //delete tab in db
            // deleteTabRequest(tab)
            queuedDbCall(tab, deleteTabRequest, tab)
        }
    }

    function handleTabUpdate(tab) {
        // if (!guestMode) updateTabRequest(tab)
        if (!guestMode) queuedDbCall(tab, updateTabRequest, tab)

    }


    useEffect(() => {
        if (!editNodeVisible)
            return
        editNode.current.focus()
      }, [editNodeVisible]);

    
    return (
        <>
        <nav className={styles.container}>
            {/* ------------------------- mobile --------------------------- */}
            { !isDesktop && <>
            <div className={styles.homeWrap}>
                <Link href='/menu'><a><Image src="/img/app/home.svg" width={30} height={30}/></a></Link>
            </div>  
            <div className={styles.tab}>
                { !tabEdit ?
                    <>
                    <span>{currentTab.name}</span>
                    <div className={styles.edit}><Image src='/img/app/edit.svg' height={16} width={16} onClick={toggleTabEdit} /></div>
                    </>
                    :
                    <input className={styles.tabInput} type="text" value={currentTab.name} onChange={ (event) => dispatch({type: 'changeTabName', payload: { tabId: currentTab.id, name: event.target.value} }) } onBlur={() => {
                        toggleTabEdit
                        handleTabUpdate(currentTab)}
                    }/>
                }
            </div>
            
            <div className={styles.tabsWrap}>
                <Image src="/img/app/tabs.svg" width={30} height={30} onClick={toggleTabMenu} />
            </div>
            </> }
            {/* ------------------------- Desktop --------------------------- */}
            { isDesktop && <>
            <ul className={styles.tabsList}>
                {tabsState.tabs.map( (tab, index) => {
                    return (
                    <li key={tab.id} className={(tabsState.currentTabIdx == index) ? [styles.desktopTab, styles.desktopCurrent].join(" ") : styles.desktopTab } onClick={ () => dispatch({type: 'changeCurrentTab', payload: {id: tab.id, idx: index} }) } >
                        { (tabEdit && editableTabIdx == index) ?
                        <input ref={el => { editNode.current = el; setEditNodeVisible(!!el);}} className={styles.tabInput} type="text" value={tab.name} onChange={ (event) => dispatch({type: 'changeTabName', payload: { tabId: tab.id, name: event.target.value} }) } onBlur={() => {
                            toggleTabEdit
                            handleTabUpdate(tab)
                        } } onClick={(e) => {e.stopPropagation()}}/>
                        :
                        <span>{tab.name}</span>
                        }
                        <div className={styles.tabButtons}>
                            <div className={styles.deleteTabWrapper} onClick={(e) => {
                                e.stopPropagation()
                                handleDeleteTabClick(tab, index)
                            }}>
                                <Image src='/img/app/circled-x.svg' height={20} width={20}  />
                            </div>
                            <div className={styles.edit}>
                                <Image src='/img/app/edit.svg' height={20} width={20} onClick={(e) => {
                                    e.stopPropagation()
                                    toggleTabEdit()
                                    setEditableTabIdx(index)
                                }} />
                            </div>
                        </div>
                    </li>
                    )
                })}
            </ul>

            <div className={styles.newTabWrapper}>
                <Image src='/img/app/new-tab.svg' height={30} width={30} onClick={handleNewTabClick} />
            </div>
            </>}

        </nav>     
        <div className={showTabMenu ? styles.showTabMenu : styles.hideTabMenu}>
            <TabsMenu handleNewTabClick={handleNewTabClick} handleDeleteTabClick={handleDeleteTabClick} darkMode={darkMode} tabsState={tabsState} dispatch={dispatch}/>
        </div>
        </>
    );
}

export default TabNav;
