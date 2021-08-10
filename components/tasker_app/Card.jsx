import React, { useState } from 'react';
import styles from '../../styles/app/Card.module.scss'
import Image from 'next/image'



const Card = (props) => {
    // list collapse
    const [collapsed, setCollapsed] = useState(props.collapsed)
    // edit and set header
    const [header, setHeader] = useState(props.header)
    const [editHeader, setEditHeader] = useState(false)
    const [editItem, setEditItem] = useState(false)

    const[items, setItems] = useState(props.items)
    const [checked, setChecked] = useState(props.checked) // list item checked state


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


    const addNewItem = () => {
            setItems([...items, { checked: false, text: '' }])
    }

    const removeItem = (idx) => {
        let newArr = [...items]
        newArr.splice(idx, 1)
        setItems(newArr)
    }



    const handleDeleteClick = (event) => {
        const itemIndex = event.currentTarget.attributes.itemkey.value
        removeItem(itemIndex)
    }

    const handleCheckboxClick = (event) => {
        const newArr = [...items]
        const idx = event.currentTarget.attributes.index.value
        newArr[idx] = { checked: !items[idx].checked, text:items[idx].text }

        setItems(newArr)
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
                            let pClass = !item.checked ? styles.itemText : [styles.itemText, styles.crossed].join(' ')
                            return (
                                <li key={index}>
                                    <div className={styles.checkBox}>
                                        { item.checked ?
                                        <Image src='/img/app/checked.svg' width={16} height={16} index={index} onClick={handleCheckboxClick} />
                                        :
                                        <Image src='/img/app/unchecked.svg' width={16} height={16} index={index} onClick={handleCheckboxClick} />
                                        }
                                    </div>
                                    <p onClick={editItemToggle} className={!editItem ? pClass : styles.hide}>{item.text}</p>
                                    <input className={editItem ? styles.editText : styles.hide} data={index} type="text" onBlur={editItemToggle} value={item.text} onChange={itemInput} />
                                    <div itemkey={index} className={styles.deleteWrapper} onClick={handleDeleteClick}>
                                        <Image src='/img/app/delete.svg' height={10} width={10}/>
                                    </div>
                                    {/* <CardItem handleCheckboxClick={handleCheckboxClick} editItemToggle={editItemToggle} checked={item.checked} itemtext={item.text} itemInput={itemInput} itemKey={index} handleDeleteClick={handleDeleteClick} editItem={editItem} /> */}
                                </li>
                            )
                        })}
                    </ul>
                    <div className={styles.addItemWrapper} onClick={addNewItem}>
                        <Image src='/img/app/plus-item.svg' height={10} width={10}/>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Card;
