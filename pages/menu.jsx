import React from 'react';
import Link from 'next/link'
import styles from '../styles/menu/menu.module.scss'
import Image from 'next/image'


const menu = () => {
    return (
        <>
            <div className={styles.container}>
                <ul>
                    <li className={styles.tasker}>
                        <Link href='tasker_app'>
                            <a>
                                <div className={styles.svgCont}>
                                    <Image src='/img/menu/tasker.svg' width={94} height={74} layout='responsive'/>
                                </div>
                                <span>Tasker</span>
                            </a>
                        </Link>
                    </li>
                    <li className={styles.none}><Link href='#'><a><span>Coming Soon</span></a></Link></li>
                    <li className={styles.none}><Link href='#'><a><span>Coming Soon</span></a></Link></li>
                    <li className={styles.none}><Link href='#'><a><span>Coming Soon</span></a></Link></li>
                    <li className={styles.none}><Link href='#'><a><span>Coming Soon</span></a></Link></li>
                    <li className={styles.none}><Link href='#'><a><span>Coming Soon</span></a></Link></li>

                </ul>
            </div>
        </>
    );
}

export default menu;
