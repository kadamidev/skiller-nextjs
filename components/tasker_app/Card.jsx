import React, { useEffect, useState, useRef } from 'react';
import styles from '../../styles/app/Card.module.scss'
import Image from 'next/image'
import { deleteCardRequest, deleteItemRequest, updateCardRequest,
        updateItemRequest, createItemRequest } from '../../lib/tasker_api_requests';
import  {v4 as uuidv4 } from 'uuid'
import useQueuedDbCall from '../../lib/useQueuedDbCall';




const Card = (props) => {
    // list collapse
    const [collapsed, setCollapsed] = useState(props.collapsed)
    // edit and set header
    const [editHeader, setEditHeader] = useState(false)
    const [editItem, setEditItem] = useState(false)

    // async function useQueuedDbCall(item, cb, ...cbParams) {
    //     console.log(`queued db call enter, called on: ${item}, callback: ${cb}(${cbParams})`)
    //     if (item.id[0] != 'T') { //if an items ID isn't a temporary set one denoted by T at the start
    //         console.log(`id: ${item.id} doesn't start with T, calling the cb and exitting`)
    //         cb(...cbParams)
    //         return
    //     }
        
    //     let firstRun = true
    //     let finished = false
    //     useEffect(() => {
    //         console.log('use effect triggered')
    //         return
    //         // if (firstRun) {
    //         //     console.log(`useEffect active and first run cancelled, waiting for change in item.id`)
    //         //     firstRun = false
    //         //     return
    //         // }
        
    //         // console.log(`change in item.id triggered, calling hook again, id: ${id}`)
    //         // useQueuedDbCall(item, cb, cbParams)
    //         // finished = true
    //         // console.log(`completed and now returning the function`)
    //         // return
    //     },[item])
    
    //     if (finished) return
    // }




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
    

    function handleDeleteCardClick() {
        props.cardsDispatch({ type: 'deleteCard', payload: {cardidx: props.cardidx, tabid: props.tabid} })
        if (!props.guestMode) { //delete card in db
            deleteCardRequest(props.card.id)
        }
    }

    function handleDeleteItemClick(id) {
        props.cardsDispatch({ type: 'removeCardItem', payload:{cardidx: props.cardidx, tabid: props.tabid, itemid: id}})
        if (!props.guestMode) { //delete item in db
            deleteItemRequest(id)
        }
    }

    function handleCardUpdate() {
        updateCardRequest(props.card)
    }




    function handleItemUpdate(item) {
        useQueuedDbCall(item, updateItemRequest, item)
        // updateItemRequest(item)
    }

    function handleItemToggle(item) {
        item.checked = !item.checked
        console.log(item)
        updateItemRequest(item)
    }

    async function handleNewItemClick() {
        const newItem = {
            id: 'T' + uuidv4(),
            checked: false,
            text:'' 
        }
        props.cardsDispatch({type: 'newCardItem', payload: {id: props.card.id, tabid: props.tabid, cardidx: props.cardidx, newItem: newItem} })
        if (!props.guestMode) {
            const newItemIndex = props.card.items.length
            const item = await createItemRequest(props.card.id, newItem)
            console.log(item)
            props.cardsDispatch({type: 'updateItemId', payload: { tabid: props.tabid, cardidx: props.cardidx, itemidx: newItemIndex, newid: item.dbid }})
        }
    }

    
    let cardClass = styles.cardContainer 
    if (props.darkMode)
        cardClass = [styles.cardContainer, styles.darkMode].join (" ")
        
    return (
        <>
            <div className={!collapsed ? cardClass : [styles.cardContainer, styles.collapsed].join(" ") }>
                <header>
                    { (props.layoutSetting && !editHeader) ?
                    <div className={styles.headerTextContainer}>
                        <div className={styles.headerText}>{props.card.header}</div>
                        <div className={styles.editBtn} onClick={editHeaderToggle}><Image src='/img/app/edit.svg' height={16} width={16} /></div>
                    </div>
                    :
                    <div className={styles.headerTextContainer}>
                        <input className={styles.edit} type="text" value={props.card.header} onChange={(event) => props.cardsDispatch({ type: 'changeHeader', payload:{ tabid: props.tabid, cardidx: props.cardidx, value: event.target.value} }) } 
                        onBlur={() => {
                            editHeaderToggle()
                            if (!props.guestMode) handleCardUpdate()
                        }}/>
                    </div>
                    }

                    <div className={styles.collapseBtn} onClick={toggleCollapsed}> <Image src={!collapsed ? '/img/app/minus.svg': '/img/app/plus.svg'} height={16} width={16} /> </div>
                    <div className={styles.deleteCardBtn} onClick={handleDeleteCardClick} > <Image src={'/img/app/circled-x.svg'} height={16} width={16} /> </div>

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
                                        <Image src='/img/app/checked.svg' width={16} height={16} index={index} 
                                        onClick={() =>  {
                                            props.cardsDispatch({ type: 'toggleCardItem', payload: {tabid: props.tabid, idx: index, checked: item.checked, cardidx: props.cardidx} })
                                            if (!props.guestMode) handleItemToggle(item)
                                        }} />
                                        :
                                        <Image src='/img/app/unchecked.svg' width={16} height={16} index={index} onClick={() => {
                                            props.cardsDispatch({ type: 'toggleCardItem', payload: {tabid: props.tabid, idx: index, checked: item.checked, cardidx: props.cardidx} })
                                            if (!props.guestMode) handleItemToggle(item)
                                        }} />
                                        }
                                    </div>
                                    <p onClick={editItemToggle} className={!editItem ? pClass : styles.hide}>{item.text}</p>
                                    <textarea onInput={handleTextareaResize} className={editItem ? textAreaClass : styles.hide} type="text" 
                                    onBlur={() => {
                                        editItemToggle()
                                        if (!props.guestMode) handleItemUpdate(item)
                                    }}
                                    value={item.text} onChange={(e) => props.cardsDispatch({ type: 'editCardItem', payload: {idx: index, cardidx: props.cardidx, tabid: props.tabid, value: e.target.value} }) } 
                                    onFocus={handleTextareaResizeAll}/>

                                    <div className={styles.deleteWrapper} onClick={() => handleDeleteItemClick(item.id)}>
                                        <Image src='/img/app/delete.svg' height={10} width={10}/>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <div className={styles.addItemWrapper} onClick={handleNewItemClick}>
                        <Image src='/img/app/plus-item.svg' height={10} width={10}/>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Card;
