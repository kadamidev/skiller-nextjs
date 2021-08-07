import React, { useState } from 'react';
import styles from '../../styles/app/TabNav.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import TabsMenu from './TabsMenu';

const TabNav = (props) => {

    const [currentTabName, setCurrentTabName] = useState(props.currentTabName)
    const [tabEdit, setTabEdit] = useState(false)
    
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
                    <span>{currentTabName}</span>
                    :
                    <input className={styles.tabInput} type="text" value={currentTabName} onChange={handleTabInput} onBlur={toggleTabEdit}/>
                }
                <div className={styles.edit}><Image src='/img/app/edit.svg' height={16} width={16} onClick={toggleTabEdit} /></div>
            </div>
            
            <div className={styles.tabsWrap}>
                <Image src="/img/app/tabs.svg" width={30} height={30} onClick={toggleTabMenu} />
            </div>
        </nav>     
        <div className={showTabMenu ? styles.showTabMenu : styles.hideTabMenu}>
            <TabsMenu />
        </div>
        {/* { showTabMenu && <TabsMenu /> } */}
        </>
    );
}

export default TabNav;
