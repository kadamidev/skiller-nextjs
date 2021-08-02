import React, { useState } from 'react';
import styles from '../../styles/app/Card.module.scss'
import Image from 'next/image'
import CheckBox from './CheckBox';


const Card = (props) => {

    const [collapsed, setCollapsed] = useState(props.collapsed)

    const cardItems = [
        { checked: false, text: 'New item'},
        { checked: true, text: 'New item 2'},
        { checked: true, text: 'New item 3'},
        { checked: false, text: 'New item 4'},
    ]

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <>
            <div className={!collapsed ? styles.cardContainer : [styles.cardContainer, styles.collapsed].join(" ")}>
                <header>
                    <span>New Card</span>
                    <div className={styles.edit}><Image src='/img/app/edit.svg' height={16} width={16} /></div>
                    <div className={styles.collapseBtn} onClick={toggleCollapsed}> <Image src={!collapsed ? '/img/app/minus.svg': '/img/app/plus.svg'} height={16} width={16} /> </div>
                </header>
                <section className={styles.cardBody}>
                    <ul>
                        { cardItems.map(item => {
                            return (
                                <li>
                                    <div className={styles.checkBox}>
                                        <CheckBox checked={item.checked || false}/>
                                    </div>
                                    <p className={styles.itemText}>{item.text}</p>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </div>
        </>
    );
}

export default Card;
