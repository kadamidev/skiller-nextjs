import React from 'react';
import styles from '../styles/LaunchAppBtn.module.scss'
import Image from 'next/image'

const LaunchAppBtn = (props) => {
        const imageSize = props.textSize.split('r')[0] * 18
    return (
        <div>
            <div className={styles.btn}>
                <span style={{ fontSize: props.textSize }} >LAUNCH APP</span>
                <div className={styles.imgWrapper}><Image className={styles.rocket} src="/img/index/rocket.svg" width={imageSize} height={imageSize} /></div>
            </div>
        </div>
    );
}

export default LaunchAppBtn;
