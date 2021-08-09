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
                            <li key={idx} listid={idx} className={(idx == tabsState.currentTabKey) ? styles.current : styles.none}>
                                {tab.name}
                                <div className={styles.deleteTabWrapper}>
                                    <Image src='/img/app/delete.svg' height={10} width={10} onClick={() => dispatch({ type: 'deleteTab', payload: {id: tab.id, tabKey: idx} })} />
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

