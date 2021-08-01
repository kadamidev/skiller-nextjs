import React from 'react';
import styles from '../../styles/app/Card.module.scss'
import Image from 'next/image'
import CheckBox from './CheckBox';

const Card = () => {

    const cardItems = [
        { checked: false, text: 'New item'},
        { checked: true, text: 'New item 2'},
        { checked: true, text: 'New item 3'},
        { checked: false, text: 'New item 4'},


    ]

    return (
        <>
            <div className={styles.cardContainer}>
                <header>
                    <span>New Card</span>
                    <div className={styles.edit}><Image src='/img/app/edit.svg' height={16} width={16} /></div>
                    <div className={styles.collapseBtn}><Image src='/img/app/minus.svg' height={16} width={16} /></div>
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
