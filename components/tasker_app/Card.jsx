import React, { useState, useRef } from 'react';
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

    const editHeaderToggle = () => {
        setEditHeader(!editHeader)
    } 

    const textAreaGrandParent = useRef(null) //pointing to the ul with all the card items

    const handleTextareaResizeAll = () => { //setting the textarea size to fit the content
        textAreaGrandParent.current.childNodes.forEach((li) => {
            let textAreaNode = li.childNodes[2]
            textAreaNode.style.height = `${textAreaNode.scrollHeight}px`
        })

    }

    const handleTextareaResize = (e) => { //increases the size of the text area as more text is added to fit
        e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`
    }
    

    return (
        <>
            <div className={!collapsed ? styles.cardContainer : [styles.cardContainer, styles.collapsed].join(" ")}>
                <header>
                    { (props.layoutSetting && !editHeader) ?
                    <div className={styles.headerTextContainer}>
                        <div className={styles.headerText}>{props.card.header}</div>
                        <div className={styles.editBtn} onClick={editHeaderToggle}><Image src='/img/app/edit.svg' height={16} width={16} /></div>
                    </div>
                    :
                    <div className={styles.headerTextContainer}>
                        <input className={styles.edit} type="text" value={props.card.header} onChange={(event) => props.cardsDispatch({ type: 'changeHeader', payload:{ tabid: props.tabid, cardidx: props.cardidx, value: event.target.value} }) } onBlur={editHeaderToggle}/>
                    </div>
                    }

                    <div className={styles.collapseBtn} onClick={toggleCollapsed}> <Image src={!collapsed ? '/img/app/minus.svg': '/img/app/plus.svg'} height={16} width={16} /> </div>
                    <div className={styles.deleteCardBtn} onClick={() => props.cardsDispatch({ type: 'deleteCard', payload: {cardidx: props.cardidx, tabid: props.tabid} })} > <Image src={'/img/app/circled-x.svg'} height={16} width={16} /> </div>

                </header>
                <section className={styles.cardBody}>
                    <ul ref={textAreaGrandParent}>
                        { props.card.items.map((item, index) => {
                            let pClass = !item.checked ? styles.itemText : [styles.itemText, styles.crossed].join(' ')
                            let textAreaClass = !item.checked ? styles.editText : [styles.editText, styles.crossed].join(" ")
                            return (
                                <li key={item.id}>
                                    <div className={styles.checkBox}>
                                        { item.checked ?
                                        <Image src='/img/app/checked.svg' width={16} height={16} index={index} onClick={() => props.cardsDispatch({ type: 'toggleCardItem', payload: {tabid: props.tabid, idx: index, checked: item.checked, cardidx: props.cardidx} })} />
                                        :
                                        <Image src='/img/app/unchecked.svg' width={16} height={16} index={index} onClick={() => props.cardsDispatch({ type: 'toggleCardItem', payload: {tabid: props.tabid, idx: index, checked: item.checked, cardidx: props.cardidx} })} />
                                        }
                                    </div>
                                    <p onClick={editItemToggle} className={!editItem ? pClass : styles.hide}>{item.text}</p>
                                    <textarea onInput={handleTextareaResize} className={editItem ? textAreaClass : styles.hide} type="text" onBlur={editItemToggle} value={item.text} onChange={(e) => props.cardsDispatch({ type: 'editCardItem', payload: {idx: index, cardidx: props.cardidx, tabid: props.tabid, value: e.target.value} }) } onFocus={handleTextareaResizeAll}/>
                                    <div className={styles.deleteWrapper} onClick={() => props.cardsDispatch({ type: 'removeCardItem', payload:{cardidx: props.cardidx, tabid: props.tabid, itemid: item.id} })}>
                                        <Image src='/img/app/delete.svg' height={10} width={10}/>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <div className={styles.addItemWrapper} onClick={() => props.cardsDispatch({type: 'newCardItem', payload: {id: props.card.id, tabid: props.tabid, cardidx: props.cardidx} })}>
                    {/* <div className={styles.addItemWrapper} onClick={addNewItem}> */}
                        <Image src='/img/app/plus-item.svg' height={10} width={10}/>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Card;
