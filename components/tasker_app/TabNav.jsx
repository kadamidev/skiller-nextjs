import React, { useState } from 'react';
import styles from '../../styles/app/TabNav.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import TabsMenu from './TabsMenu';

const TabNav = ({tabs, dispatch}) => {
    // const [tabsState, dispatch] = useReducer(reducer, [tabPreset])

    const [tabEdit, setTabEdit] = useState(false)

    // const [tabs, setTabs] = useState(props.tabs)
    const [currentTab, setCurrentTab] = useState(2)
    
    const toggleTabEdit = () => { setTabEdit(!tabEdit) }
    
    const handleTabInput = (event) => { setCurrentTabName(event.target.value) }
    
    const [showTabMenu, setShowTabMenu] = useState(false)
    const toggleTabMenu = () => setShowTabMenu(!showTabMenu)
    return (
        <>
        <nav className={styles.container}>
            <div className={styles.homeWrap}>
                <Link href='/menu'><a><Image src="/img/app/home.svg" width={30} height={30}/></a></Link>
            </div>  

            <div className={styles.tab}>
                { !tabEdit ?
                    <span>{tabs[currentTab].name}</span>
                    :
                    <input className={styles.tabInput} type="text" value={tabs[currentTab].name} onChange={ (event) => dispatch({type: 'changeTabName', payload: { id: tabs[currentTab].id, name: event.target.value} }) } onBlur={toggleTabEdit}/>
                }
                <div className={styles.edit}><Image src='/img/app/edit.svg' height={16} width={16} onClick={toggleTabEdit} /></div>
            </div>
            
            <div className={styles.tabsWrap}>
                <Image src="/img/app/tabs.svg" width={30} height={30} onClick={toggleTabMenu} />
            </div>

        </nav>     
        <div className={showTabMenu ? styles.showTabMenu : styles.hideTabMenu}>
            <TabsMenu tabs={tabs} dispatch={dispatch}/>
        </div>
        {/* { showTabMenu && <TabsMenu /> } */}
        </>
    );
}

export default TabNav;
