import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LaunchAppBtn from './LaunchAppBtn'
import styles from '../styles/IndexNav.module.scss'
import { useMediaQuery } from '../lib/useMediaQuery'

const IndexNav = () => {
    
    const [showNav, setShowNav] = useState(false)
    const [current, setCurrent] = useState('Home')

    const handleMenuClick = () => {
        setShowNav(!showNav)
    }

    const handleCurrentClick = (e) => {
        setCurrent(e.target.textContent)
        handleMenuClick()
        // console.log(e.target)
    }

    const isMobile = useMediaQuery('(max-width: 767px)')

    
    
    return (
        <>
        <nav className={showNav ? [styles.fixed, styles.navbar].join(" ") : styles.navbar}>
                <div className={styles.container}>
                    <h1 className="logo">Skiller</h1>

                    <div className={[(showNav ? styles.show : styles.hide), styles.navItems].join(' ')}>
                        <div className={styles.grid}>
                            <ul className={[(showNav ? styles.show : styles.hide), styles.navList].join(' ')}>
                                <li><a  onClick={handleCurrentClick} className={current == 'Home' ? styles.current : styles.none} href="#hero-section">Home</a></li>
                                <li><a  onClick={handleCurrentClick} className={current == 'Features' ? styles.current : styles.none} href="#features-section">Features</a></li>
                                <li><a  onClick={handleCurrentClick} className={current == 'Contact' ? styles.current : styles.none} href="#contact-section">Contact</a></li>
                            </ul>


                            <div className={[(showNav ? styles.show : styles.hide), styles.launchBtnWrap].join(" ")}>
                                <Link href="menu"> 
                                    <a><LaunchAppBtn textSize={ isMobile ? '2.4rem' : '1.4rem'} /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
            <div className={styles.menuBtn} onClick={handleMenuClick}>
                    <div className={ showNav ? styles.hide : styles.show }>
                    <Image src='/img/index/hamburger-menu.svg' width={35} height={25} />
                    </div>

                    <div className={ showNav ? styles.show : styles.hide }>
                    <Image src='/img/index/close.svg' width={25} height={25} />
                    </div>
            </div>
        </div>
    </nav>
    </>
    );
}

export default IndexNav;
