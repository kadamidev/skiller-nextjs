import React, { useState }  from 'react';
import styles from '../../styles/app/TabsMenu.module.scss'
import Image from 'next/image'


const TabsMenu = ({ handleDeleteTabClick, handleNewTabClick, darkMode, tabsState, dispatch }) => {

    return (
        <>
        <div className={styles.container}>
            <div className={darkMode ? [styles.tabsContainer, styles.darkMode].join(" ") : styles.tabsContainer}>
                <ul className={styles.tabsList}>
                    { tabsState.tabs.map((tab, idx) => {
                        return (
                            <li key={idx} listid={idx} className={(idx == tabsState.currentTabIdx) ? styles.current : styles.none}>
                                <div className={styles.tabClickSurface} onClick={ () => dispatch({type: 'changeCurrentTab', payload: {id: tab.id, idx: idx} }) }></div>
                                <span>{tab.name}</span>
                                <div className={styles.deleteTabWrapper} onClick={() => handleDeleteTabClick(tab, idx)}>
                                    <Image src='/img/app/delete.svg' height={10} width={10}  />
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
                <div className={styles.newTabWrapper}>
                        <Image src='/img/app/new-tab.svg' height={35} width={35} onClick={handleNewTabClick} />
                        
                </div>
            </div>     
        </div> 
        </>
    );
}

export default TabsMenu;

