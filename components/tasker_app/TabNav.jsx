import React, { useState } from 'react';
import styles from '../../styles/app/TabNav.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import TabsMenu from './TabsMenu';

const TabNav = ({tabsState, dispatch}) => {

    const [tabEdit, setTabEdit] = useState(false)

    
    const toggleTabEdit = () => { setTabEdit(!tabEdit) }
    
    const [showTabMenu, setShowTabMenu] = useState(false)
    const toggleTabMenu = () => setShowTabMenu(!showTabMenu)

    // tabsState.tabs[tabsState.currentTabKey]
    return (
        <>
        <nav className={styles.container}>
            <div className={styles.homeWrap}>
                <Link href='/menu'><a><Image src="/img/app/home.svg" width={30} height={30}/></a></Link>
            </div>  

            <div className={styles.tab}>
                { !tabEdit ?
                    <span>{tabsState.tabs[tabsState.currentTabKey].name}</span>
                    :
                    <input className={styles.tabInput} type="text" value={tabsState.tabs[tabsState.currentTabKey].name} onChange={ (event) => dispatch({type: 'changeTabName', payload: { id: tabsState.tabs[tabsState.currentTabKey].id, name: event.target.value} }) } onBlur={toggleTabEdit}/>
                }
                <div className={styles.edit}><Image src='/img/app/edit.svg' height={16} width={16} onClick={toggleTabEdit} /></div>
            </div>
            
            <div className={styles.tabsWrap}>
                <Image src="/img/app/tabs.svg" width={30} height={30} onClick={toggleTabMenu} />
            </div>

        </nav>     
        <div className={showTabMenu ? styles.showTabMenu : styles.hideTabMenu}>
            <TabsMenu tabsState={tabsState} dispatch={dispatch}/>
        </div>
        {/* { showTabMenu && <TabsMenu /> } */}
        </>
    );
}

export default TabNav;
