import React, { useState } from 'react';
import styles from '../../styles/app/Card.module.scss'
import Image from 'next/image'
import CheckBox from './CheckBox';


// const cardItems1 = [    passed in as props.items
//     { checked: false, text: 'New item'},
//     { checked: true, text: 'New item 2'},
//     { checked: true, text: 'fix item length overflow'},
//     { checked: false, text: 'fix header length overflow'},
// ]



const Card = (props) => {
    // list collapse
    const [collapsed, setCollapsed] = useState(props.collapsed)
    // edit and set header
    const [header, setHeader] = useState(props.header)
    const [editHeader, setEditHeader] = useState(false)
    const [editItem, setEditItem] = useState(false)

    const[items, setItems] = useState(props.items)

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


    // Add a new item after the parent
    const addNewItem = (parentIndex) => {
        let newArr = [...items]
        newArr.splice(++parentIndex, 0, { checked: false, text: 'New Item' })
        setItems(newArr)
    }

    const removeItem = (idx) => {
        let newArr = [...items]
        newArr.splice(idx, 1)
        setItems(newArr)
    }

    // Listening for enter key and backspace key when inside item edit mode
    const itemKeyPress = (event) => {

        
        switch (event.keyCode) {
            case 13: //enter - add items
            const parentIndex = event.target.attributes.data.value
            addNewItem(parentIndex)
            break
        }
    }

    const handleDeleteClick = (event) => {
        const itemIndex = event.currentTarget.attributes.itemkey.value
        removeItem(itemIndex)
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
                        { items.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className={styles.checkBox}>
                                        <CheckBox checked={item.checked || false}/>
                                    </div>
                                    <p onClick={editItemToggle} className={!editItem ? styles.itemText : styles.hide}>{item.text}</p>
                                    <input className={editItem ? styles.editText : styles.hide} data={index} type="text" onBlur={editItemToggle} value={item.text} onChange={itemInput} onKeyUp={itemKeyPress} />
                                    <div itemkey={index} className={styles.deleteWrapper} onClick={handleDeleteClick}>
                                        <Image src='/img/app/delete.svg' height={10} width={10}/>
                                    </div>
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
