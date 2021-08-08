import React, { useState }  from 'react';
import styles from '../../styles/app/TabsMenu.module.scss'
import Image from 'next/image'


const TabsMenu = ({tabsState, dispatch }) => {

        const [currentTab, setCurrentTab] = useState(2)
        

        // const deleteTab = (idx) => {
        //     const newArr = [...tabs]
        //     newArr.splice(idx, 1)
        //     setTabs(newArr)
        // }

        const handleDeleteClick = (event) => {
            const listId = event.currentTarget.attributes.listid.value
            deleteTab(listId)
        }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.tabsContainer}>
                <ul className={styles.tabsList}>
                    { tabsState.tabs.map((tab, idx) => {
                        return (
                            <li key={idx} listid={idx} className={tab.current ? styles.current : styles.none}>
                                {tab.name}
                                <div className={styles.deleteTabWrapper}>
                                    <Image listid={idx} src='/img/app/delete.svg' height={10} width={10} onClick={handleDeleteClick}/>
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

