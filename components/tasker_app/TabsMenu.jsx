import React, { useState }  from 'react';
import styles from '../../styles/app/TabsMenu.module.scss'
import Image from 'next/image'


const TabsMenu = ({tabsState, dispatch }) => {

    return (
        <>
        <div className={styles.container}>
            <div className={styles.tabsContainer}>
                <ul className={styles.tabsList}>
                    { tabsState.tabs.map((tab, idx) => {
                        return (
                            <li key={idx} listid={idx} className={(idx == tabsState.currentTabIdx) ? styles.current : styles.none}>
                                <div className={styles.tabClickSurface} onClick={ () => dispatch({type: 'changeCurrentTab', payload: {id: tab.id, idx: idx} }) }></div>
                                {tab.name}
                                <div className={styles.deleteTabWrapper} onClick={() => dispatch({ type: 'deleteTab', payload: {id: tab.id, idx: idx} })}>
                                    <Image src='/img/app/delete.svg' height={10} width={10}  />
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
                <div className={styles.newTabWrapper}>
                        <Image src='/img/app/new-tab.svg' height={35} width={35} onClick={ () => dispatch({type: 'addNewTab'}) } />
                        
                </div>
            </div>     
        </div> 
        </>
    );
}

export default TabsMenu;

