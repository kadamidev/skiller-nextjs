import React, { useState } from 'react';
import styles from '../../styles/app/Card.module.scss'
import Image from 'next/image'
import CheckBox from './CheckBox';


const Card = (props) => {
    // list collapse
    const [collapsed, setCollapsed] = useState(props.collapsed)
    // edit and set header
    const [header, setHeader] = useState(props.header)
    const [editHeader, setEditHeader] = useState(false)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const editClick = () => {
        setEditHeader(!editHeader)
    } 

    const headerInput = (event) => {
        setHeader(event.target.value)
    }

    

    return (
        <>
            <div className={!collapsed ? styles.cardContainer : [styles.cardContainer, styles.collapsed].join(" ")}>
                <header>
                    { !editHeader ?
                    <span>{header}</span>
                    :
                    <input className={styles.edit} type="text" value={header} onChange={headerInput} onBlur={editClick}/>
                    }
                    <div className={styles.editBtn} onClick={editClick}><Image src='/img/app/edit.svg' height={16} width={16} /></div>
                    <div className={styles.collapseBtn} onClick={toggleCollapsed}> <Image src={!collapsed ? '/img/app/minus.svg': '/img/app/plus.svg'} height={16} width={16} /> </div>
                </header>
                <section className={styles.cardBody}>
                    <ul>
                        { props.items.map((item, index) => {
                            return (
                                <li key={index}>
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
