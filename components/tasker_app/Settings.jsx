import React from 'react';
import styles from '../../styles/app/Settings.module.scss'
import Image from 'next/image'
import { useMediaQuery } from '../../lib/useMediaQuery';

const Settings = (props) => {

    const isDesktop = useMediaQuery('(min-width: 769px)')
    
    const handleLayoutClick = (e) => {
        props.setLayoutSetting(e.currentTarget.attributes.mode.value)
    }
        
    const handleDropdownChange = (e) => {
        props.setLayoutSetting(e.target.value)
    }
    
    return (
        <div>
            <div className={props.darkMode ? [styles.settingsContainer, styles.darkMode].join(" ") : styles.settingsContainer}>
                <ul className={styles.optionsList}>
                    <li className={styles.darkModeOption}>
                        { !props.darkMode ? 
                        <Image src="/img/app/unchecked.svg" width={16} height={16} onClick={props.toggleDarkMode}/>
                        :
                        <Image src="/img/app/checked.svg" width={16} height={16} onClick={props.toggleDarkMode}/>
                        }
                        <span>Dark Mode</span>
                    </li>

                    <li className={styles.layoutSettingContainer}>
                        { isDesktop ? <>
                        <label htmlFor='column-selector'>Card Columns</label>
                        <select id='column-selector' name="layout" onChange={handleDropdownChange} value={props.layoutSetting}>
                            {
                                [...Array(12)].map((e, i) => {
                                    let val = i + 1
                                    return (
                                        <option key={i} mode={val} value={val} >{val}</option>
                                    )
                                })
                            }
                        </select>
                        </>
                        :
                        <><span>Layout</span>
                        <ul className={styles.layoutModes}>
                            <li className={(props.layoutSetting == 1) ? styles.currentLayout : styles.layoutSvgWrap} mode={1} onClick={handleLayoutClick}><Image src="/img/app/Single.svg" width={32} height={28}/></li>
                            <li className={(props.layoutSetting == 2) ? styles.currentLayout : styles.layoutSvgWrap} mode={2} onClick={handleLayoutClick}><Image src="/img/app/Double.svg" width={32} height={28}/></li>
                            <li className={(props.layoutSetting == 3) ? styles.currentLayout : styles.layoutSvgWrap} mode={3} onClick={handleLayoutClick}><Image src="/img/app/Tripple.svg" width={32} height={28}/></li>
                        </ul>
                        </>}
                    </li>




                </ul>
            </div>
        </div>
    );
}

export default Settings;
