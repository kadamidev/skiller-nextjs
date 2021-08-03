import React, { useState } from 'react';
import styles from '../../styles/app/TabNav.module.scss'
import Image from 'next/image'
import Link from 'next/link'


const TabNav = (props) => {

    const [currentTabName, setCurrentTabName] = useState(props.currentTabName)
    const [tabEdit, setTabEdit] = useState(false)

    const toggleTabEdit = () => { setTabEdit(!tabEdit) }

    const handleTabInput = (event) => { setCurrentTabName(event.target.value) }
    
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
                <Image src="/img/app/tabs.svg" width={30} height={30}/>
            </div>

        </nav>     
        </>
    );
}

export default TabNav;
