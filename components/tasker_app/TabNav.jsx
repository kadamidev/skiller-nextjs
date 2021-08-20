import React, { useState, useRef } from 'react';
import styles from '../../styles/app/TabNav.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import TabsMenu from './TabsMenu';
import { useMediaQuery } from '../../lib/useMediaQuery';

const TabNav = ({darkMode, tabsState, dispatch}) => {
    
    const [tabEdit, setTabEdit] = useState(false)
    const [editableTabIdx, setEditableTabIdx] = useState(false)
    const editNode = useRef(null)
    
    const toggleTabEdit = () => { setTabEdit(!tabEdit) }
    
    const [showTabMenu, setShowTabMenu] = useState(false)
    const toggleTabMenu = () => setShowTabMenu(!showTabMenu)

    const currentTab = tabsState.tabs[tabsState.currentTabIdx]

    const isDesktop = useMediaQuery('(min-width: 769px)')

    
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
                    <input className={styles.tabInput} type="text" value={currentTab.name} onChange={ (event) => dispatch({type: 'changeTabName', payload: { tabId: currentTab.id, name: event.target.value} }) } onBlur={toggleTabEdit}/>
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
                        <input ref={editNode} className={styles.tabInput} type="text" value={tab.name} onChange={ (event) => dispatch({type: 'changeTabName', payload: { tabId: tab.id, name: event.target.value} }) } onBlur={toggleTabEdit} onClick={(e) => {e.stopPropagation()}}/>
                        :
                        <span>{tab.name}</span>
                        }
                        <div className={styles.tabButtons}>
                            <div className={styles.deleteTabWrapper} onClick={(e) => {
                                e.stopPropagation()
                                dispatch({ type: 'deleteTab', payload: {id: tab.id, idx: index} })
                            }}>
                                <Image src='/img/app/circled-x.svg' height={20} width={20}  />
                            </div>
                            <div className={styles.edit}>
                                <Image src='/img/app/edit.svg' height={20} width={20} onClick={(e) => {
                                    e.stopPropagation()
                                    toggleTabEdit()
                                    setEditableTabIdx(index)
                                    console.log(editNode)
                                    // editNode.current.focus()
                                }} />
                            </div>
                        </div>
                    </li>
                    )
                })}
            </ul>
            <div className={styles.newTabWrapper}>
                <Image src='/img/app/new-tab.svg' height={30} width={30} onClick={ () => dispatch({type: 'addNewTab'}) } />
            </div>
            </>}

        </nav>     
        <div className={showTabMenu ? styles.showTabMenu : styles.hideTabMenu}>
            <TabsMenu darkMode={darkMode} tabsState={tabsState} dispatch={dispatch}/>
        </div>
        </>
    );
}

export default TabNav;
