import Image from 'next/image';
import React from 'react';
import { useMediaQuery } from '../lib/useMediaQuery';
import styles from '/styles/Waves.module.scss'

const Waves = () => {
    const isMobile = useMediaQuery('(max-width: 767px)')
    const isTablet = useMediaQuery('(max-width: 1080px)')
    const isComp = useMediaQuery('(min-width: 1080px)')
    return (
        <div className={styles.container}>
            <div className={styles.waveContainer}>

            {true && <Image src="/img/index/back-wave.svg" layout="fill" />}
            {true && <Image src="/img/index/front-wave.svg" layout="fill" />}
            </div>



        </div>
    )
}

export default Waves;
