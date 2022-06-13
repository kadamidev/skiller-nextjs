import React, { useEffect, useState } from "react"
import styles from "../../styles/app/Card.module.scss"
import Image from "next/image"
import {
  deleteCardRequest,
  deleteItemRequest,
  updateCardRequest,
  updateItemRequest,
  createItemRequest,
} from "../../lib/tasker_api_requests"
import { v4 as uuidv4 } from "uuid"
import queuedDbCall from "../../lib/queuedDbCall"
import ProgressBar from "./ProgressBar"
import TextareaAutosize from "react-textarea-autosize"

const Card = (props) => {
  // list collapse
  const [collapsed, setCollapsed] = useState(props.collapsed)
  // edit and set header
  const [editHeader, setEditHeader] = useState(false)
  const [editItem, setEditItem] = useState(false)

  const [checkedCount, setCheckedCount] = useState(0)

  useEffect(() => {
    let count = 0
    props.card.items.forEach((item) => {
      if (item.checked) count++
    })
    setCheckedCount(count)
  }, [props.card.items])

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const editItemToggle = () => {
    setEditItem(!editItem)
  }

  const editHeaderToggle = () => {
    setEditHeader(!editHeader)
  }

  function handleDeleteCardClick() {
    props.cardsDispatch({
      type: "deleteCard",
      payload: { cardidx: props.cardidx, tabid: props.tabid },
    })
    if (!props.guestMode) {
      //delete card in db
      // deleteCardRequest(props.card.id)
      queuedDbCall(props.card, deleteCardRequest, props.card)
    }
  }

  function handleDeleteItemClick(item) {
    props.cardsDispatch({
      type: "removeCardItem",
      payload: { cardidx: props.cardidx, tabid: props.tabid, itemid: item.id },
    })
    if (!props.guestMode) {
      //delete item in db
      // deleteItemRequest(item.id)
      queuedDbCall(item, deleteItemRequest, item)
    }
  }

  function handleCardUpdate() {
    // updateCardRequest(props.card)
    queuedDbCall(props.card, updateCardRequest, props.card)
  }

  function handleItemUpdate(item) {
    queuedDbCall(item, updateItemRequest, item)
    // updateItemRequest(item)
  }

  function handleItemToggle(item, flag) {
    item.checked = flag
    queuedDbCall(item, updateItemRequest, item)
  }

  async function handleNewItemClick() {
    const newItem = {
      id: "T" + uuidv4(),
      checked: false,
      text: "",
    }
    const newItemIndex = props.card.items.length.valueOf()
    props.cardsDispatch({
      type: "newCardItem",
      payload: {
        id: props.card.id,
        tabid: props.tabid,
        cardidx: props.cardidx,
        newItem: newItem,
      },
    })
    if (!props.guestMode) {
      dbItemCreation(newItem, newItemIndex)
    }
  }

  async function dbItemCreation(newItem, newItemIndex) {
    if (props.card.id[0] == "T") {
      setTimeout(() => {
        dbItemCreation(newItem, newItemIndex)
      }, 500)
      return
    }
    const item = await createItemRequest(props.card.id, newItem) //queue this part
    props.cardsDispatch({
      type: "updateItemId",
      payload: {
        tabid: props.tabid,
        cardidx: props.cardidx,
        itemidx: newItemIndex,
        newid: item.dbid,
      },
    })
  }

  let cardClass = styles.cardContainer
  if (props.darkMode)
    cardClass = [styles.cardContainer, styles.darkMode].join(" ")

  return (
    <>
      <div
        className={
          !collapsed
            ? cardClass
            : [styles.cardContainer, styles.collapsed].join(" ")
        }
      >
        <header>
          {props.layoutSetting && !editHeader ? (
            <div className={styles.headerTextContainer}>
              <div className={styles.headerText}>{props.card.header}</div>
              <div className={styles.editBtn} onClick={editHeaderToggle}>
                <Image src="/img/app/edit.svg" height={16} width={16} />
              </div>
            </div>
          ) : (
            <div className={styles.headerTextContainer}>
              <input
                className={styles.edit}
                type="text"
                value={props.card.header}
                onChange={(event) =>
                  props.cardsDispatch({
                    type: "changeHeader",
                    payload: {
                      tabid: props.tabid,
                      cardidx: props.cardidx,
                      value: event.target.value,
                    },
                  })
                }
                onBlur={() => {
                  editHeaderToggle()
                  if (!props.guestMode) handleCardUpdate()
                }}
              />
            </div>
          )}

          <div className={styles.collapseBtn} onClick={toggleCollapsed}>
            {" "}
            <Image
              src={!collapsed ? "/img/app/minus.svg" : "/img/app/plus.svg"}
              height={16}
              width={16}
            />{" "}
          </div>
          <div className={styles.deleteCardBtn} onClick={handleDeleteCardClick}>
            {" "}
            <Image src={"/img/app/circled-x.svg"} height={16} width={16} />{" "}
          </div>
        </header>
        <section className={styles.cardBody}>
          <ul>
            {props.card.items.map((item, index) => {
              let pClass = !item.checked
                ? styles.itemText
                : [styles.itemText, styles.crossed].join(" ")
              let textAreaClass = !item.checked
                ? styles.editText
                : [styles.editText, styles.crossed].join(" ")
              return (
                <li key={item.id}>
                  <div className={styles.checkBox}>
                    {item.checked ? (
                      <Image
                        src="/img/app/checked.svg"
                        width={16}
                        height={16}
                        index={index}
                        onClick={() => {
                          props.cardsDispatch({
                            type: "toggleCardItem",
                            payload: {
                              tabid: props.tabid,
                              idx: index,
                              checked: item.checked,
                              cardidx: props.cardidx,
                            },
                          })
                          if (!props.guestMode) handleItemToggle(item, false)
                          setCheckedCount(checkedCount - 1)
                        }}
                      />
                    ) : (
                      <Image
                        src="/img/app/unchecked.svg"
                        width={16}
                        height={16}
                        index={index}
                        onClick={() => {
                          props.cardsDispatch({
                            type: "toggleCardItem",
                            payload: {
                              tabid: props.tabid,
                              idx: index,
                              checked: item.checked,
                              cardidx: props.cardidx,
                            },
                          })
                          if (!props.guestMode) handleItemToggle(item, true)
                          setCheckedCount(checkedCount + 1)
                        }}
                      />
                    )}
                  </div>
                  <p
                    onClick={editItemToggle}
                    className={!editItem ? pClass : styles.hide}
                  >
                    {item.text}
                  </p>
                  <TextareaAutosize
                    className={editItem ? textAreaClass : styles.hide}
                    type="text"
                    onBlur={() => {
                      editItemToggle()
                      if (!props.guestMode) handleItemUpdate(item)
                    }}
                    value={item.text}
                    onChange={(e) => {
                      props.cardsDispatch({
                        type: "editCardItem",
                        payload: {
                          idx: index,
                          cardidx: props.cardidx,
                          tabid: props.tabid,
                          value: e.target.value,
                        },
                      })
                    }}
                  />

                  <div
                    className={styles.deleteWrapper}
                    onClick={() => handleDeleteItemClick(item)}
                  >
                    <Image src="/img/app/delete.svg" height={10} width={10} />
                  </div>
                </li>
              )
            })}
          </ul>
          <div className={styles.addItemWrapper} onClick={handleNewItemClick}>
            <Image src="/img/app/plus-item.svg" height={10} width={10} />
          </div>
        </section>
      </div>
      {props.settingsState.progress && (
        <div className={styles.progressWrapper}>
          <ProgressBar
            percent={(checkedCount / props.card.items.length) * 100}
            darkMode={props.darkMode}
          />
        </div>
      )}
    </>
  )
}

export default Card
