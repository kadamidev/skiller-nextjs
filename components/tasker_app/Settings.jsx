import React from 'react';
import styles from '../../styles/app/Settings.module.scss'
import Image from 'next/image'


const Settings = (props) => {


    const handleLayoutClick = (e) => {
        props.setLayoutSetting(e.currentTarget.attributes.mode.value)
    }
    
    return (
        <div>
            <div className={styles.settingsContainer}>
                <ul className={styles.optionsList}>
                    <li className={styles.darkModeOption}>
                        <Image src="/img/app/unchecked.svg" width={16} height={16}/>
                        <span>Dark Mode</span>
                    </li>

                    <li className={styles.layoutSettingContainer}>
                        <span>Layout</span>
                        <ul className={styles.layoutModes}>
                            <li className={(props.layoutSetting == 1) ? styles.currentLayout : styles.layoutSvgWrap} mode={1} onClick={handleLayoutClick}><Image src="/img/app/Single.svg" width={32} height={28}/></li>
                            <li className={(props.layoutSetting == 2) ? styles.currentLayout : styles.layoutSvgWrap} mode={2} onClick={handleLayoutClick}><Image src="/img/app/Double.svg" width={32} height={28}/></li>
                            <li className={(props.layoutSetting == 3) ? styles.currentLayout : styles.layoutSvgWrap} mode={3} onClick={handleLayoutClick}><Image src="/img/app/Tripple.svg" width={32} height={28}/></li>
                        </ul>

                    </li>




                </ul>
            </div>
        </div>
    );
}

export default Settings;
