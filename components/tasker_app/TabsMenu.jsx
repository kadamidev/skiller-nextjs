import React, { useState }  from 'react';
import styles from '../../styles/app/TabsMenu.module.scss'
import Image from 'next/image'


const TabsMenu = (props) => {
        const tabPreset = [
            { name: 'School', current: false },
            { name: 'Work', current: false },
            { name: 'Daily', current: true },
        ]

        const [tabs, setTabs] = useState(tabPreset)
        
        const addNewTab = () => {
            setTabs([...tabs, { name: 'Untitled', current: false }])
        }

        const deleteTab = (idx) => {
            const newArr = [...tabs]
            newArr.splice(idx, 1)
            setTabs(newArr)
        }

        const handleDeleteClick = (event) => {
            const listId = event.currentTarget.attributes.listid.value
            deleteTab(listId)
        }

        const handleNewTabClick = (event) => {
            addNewTab()
        }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.tabsContainer}>
                <ul className={styles.tabsList}>
                    { tabs.map((tab, idx) => {
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
                        <Image src='/img/app/new-tab.svg' height={35} width={35} onClick={handleNewTabClick}/>
                </div>
            </div>     
        </div> 
        </>
    );
}

export default TabsMenu;
