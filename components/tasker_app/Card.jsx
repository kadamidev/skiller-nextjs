import React from 'react';
import styles from '../../styles/app/Card.module.scss'
import Image from 'next/image'

const Card = () => {
    return (
        <>
            <div className={styles.cardContainer}>
                <header>
                    <span>New Card</span>
                    <div className={styles.edit}><Image src='/img/app/edit.svg' height={16} width={16} /></div>
                    <div className={styles.collapseBtn}><Image src='/img/app/minus.svg' height={16} width={16} /></div>
                </header>
                <body>
                    
                </body>
            </div>
        </>
    );
}

export default Card;
