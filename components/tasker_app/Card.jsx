import React, { useState } from 'react';
import styles from '../../styles/app/Card.module.scss'
import Image from 'next/image'



const Card = (props) => {
    // list collapse
    const [collapsed, setCollapsed] = useState(props.collapsed)
    // edit and set header
    const [editHeader, setEditHeader] = useState(false)
    const [editItem, setEditItem] = useState(false)




    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const editItemToggle = () => { setEditItem(!editItem) }

    const editClick = () => {
        setEditHeader(!editHeader)
    } 

    const headerInput = (event) => {
        setHeader(event.target.value)
    }

    const itemInput = (event) => {
        let newItems = [...items]
        newItems[event.target.attributes.data.value]['text'] = event.target.value
        setItems(newItems)
    }



 
    

    return (
        <>
            <div className={!collapsed ? styles.cardContainer : [styles.cardContainer, styles.collapsed].join(" ")}>
                <header>
                    { !editHeader ?
                    <span>{props.card.header}</span>
                    :
                    <input className={styles.edit} type="text" value={props.card.header} onChange={(event) => props.cardsDispatch({ type: 'changeHeader', payload:{ tabid: props.tabid, cardidx: props.cardidx, value: event.target.value} }) } onBlur={editClick}/>
                    }
                    <div className={styles.editBtn} onClick={editClick}><Image src='/img/app/edit.svg' height={16} width={16} /></div>
                    <div className={styles.collapseBtn} onClick={toggleCollapsed}> <Image src={!collapsed ? '/img/app/minus.svg': '/img/app/plus.svg'} height={16} width={16} /> </div>
                </header>
                <section className={styles.cardBody}>
                    <ul>
                        { props.card.items.map((item, index) => {
                            let pClass = !item.checked ? styles.itemText : [styles.itemText, styles.crossed].join(' ')
                            return (
                                <li key={item.id}>
                                    <div className={styles.checkBox}>
                                        { item.checked ?
                                        <Image src='/img/app/checked.svg' width={16} height={16} index={index} onClick={() => props.cardsDispatch({ type: 'toggleCardItem', payload: {cardid: props.card.id, tabid: props.tabid, idx: index, checked: item.checked} })} />
                                        :
                                        <Image src='/img/app/unchecked.svg' width={16} height={16} index={index} onClick={() => props.cardsDispatch({ type: 'toggleCardItem', payload: {cardid: props.card.id, tabid: props.tabid, idx: index} })} />
                                        }
                                    </div>
                                    <p onClick={editItemToggle} className={!editItem ? pClass : styles.hide}>{item.text}</p>
                                    <input className={editItem ? styles.editText : styles.hide} data={index} type="text" onBlur={editItemToggle} value={item.text} onChange={itemInput} />
                                    <div className={styles.deleteWrapper} onClick={() => props.cardsDispatch({ type: 'removeCardItem', payload:{cardid: props.card.id, tabid: props.tabid, itemid: item.id} })}>
                                        <Image src='/img/app/delete.svg' height={10} width={10}/>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <div className={styles.addItemWrapper} onClick={() => props.cardsDispatch({type: 'newCardItem', payload: {id: props.card.id, tabid: props.tabid} })}>
                    {/* <div className={styles.addItemWrapper} onClick={addNewItem}> */}
                        <Image src='/img/app/plus-item.svg' height={10} width={10}/>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Card;
