import React, { useState, useRef } from 'react';
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

    // reference to the <ul> item list, used to focus in on new list items
    const listRef = useRef(null) 

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

    // Listening for enter key and backspace key when inside item edit mode
    const itemKeyPress = (event) => {
        // enter keycode = 13
        // backspace keycode = 8
        
        switch (event.keyCode) {
            case 13: //enter - add items
            let parentIndex = event.target.attributes.data.value
            listRef.current = listRef.current.childNodes[parentIndex]
            addNewItem(parentIndex)
            let newIdx = 1 + parentIndex
            listRef.current = listRef.current.nextSibling
            // console.log(listRef.current.children)
            // console.log(listRef.current.children[2])

            // listRef.current.focus()


            break
            case 8: //backspace - remove items if cursor at position 0

            break
        }
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
                    <ul ref={listRef}>
                        { items.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className={styles.checkBox}>
                                        <CheckBox checked={item.checked || false}/>
                                    </div>
                                    <p onClick={editItemToggle} className={!editItem ? styles.itemText : styles.hide}>{item.text}</p>
                                    <input className={editItem ? styles.editText : styles.hide} data={index} type="text" onBlur={editItemToggle} value={item.text} onChange={itemInput} onKeyDown={itemKeyPress} />
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
