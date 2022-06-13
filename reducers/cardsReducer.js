import { v4 as uuidv4 } from "uuid"
import {
  deleteCardRequest,
  deleteItemRequest,
} from "../lib/tasker_api_requests"

export const cardsReducer = (cardsState, action) => {
  switch (action.type) {
    case "setCards":
      return action.payload.cards

    case "addNewCard":
      const newCards = { ...cardsState }
      if (!newCards[action.payload.tabid]) {
        newCards[action.payload.tabid] = []
      }
      newCards[action.payload.tabid] = [
        ...newCards[action.payload.tabid],
        action.payload.card,
      ]
      return newCards

    case "updateCardTabId":
      const updatedCardsTabId = { ...cardsState }
      updatedCardsTabId[action.payload.newId] =
        updatedCardsTabId[action.payload.oldId]
      delete updatedCardsTabId[action.payload.oldId]
      return updatedCardsTabId

    case "updateCardId":
      const updatedCardsId = { ...cardsState }
      if (updatedCardsId[action.payload.tabid][action.payload.idx]) {
        updatedCardsId[action.payload.tabid][action.payload.idx].id =
          action.payload.newid
      } else {
        deleteCardRequest({ id: action.payload.newid })
      }
      return updatedCardsId

    case "updateItemId":
      const updatedItemIds = { ...cardsState }
      if (cardsState[action.payload.tabid][action.payload.cardidx]) {
        //does the card still exist
        if (
          cardsState[action.payload.tabid][action.payload.cardidx]["items"][
            action.payload.itemidx
          ]
        ) {
          //does the item still exist
          updatedItemIds[action.payload.tabid][action.payload.cardidx]["items"][
            action.payload.itemidx
          ].id = action.payload.newid
        } else {
          deleteItemRequest({ id: action.payload.newid })
        }
      }
      return updatedItemIds

    case "deleteCard":
      const deletedCards = { ...cardsState }
      deletedCards[action.payload.tabid].splice(action.payload.cardidx, 1)
      return deletedCards

    case "changeHeader":
      const changedCards = { ...cardsState }
      changedCards[action.payload.tabid][action.payload.cardidx].header =
        action.payload.value
      return changedCards

    case "newCardItem":
      const updatedCards = { ...cardsState }
      updatedCards[action.payload.tabid][action.payload.cardidx]["items"] = [
        ...updatedCards[action.payload.tabid][action.payload.cardidx]["items"],
        action.payload.newItem,
      ]
      return updatedCards

    case "removeCardItem":
      const removedCards = { ...cardsState }
      removedCards[action.payload.tabid][action.payload.cardidx]["items"] =
        removedCards[action.payload.tabid][action.payload.cardidx][
          "items"
        ].filter((item) => item.id != action.payload.itemid)
      return removedCards

    case "toggleCardItem":
      const toggledCards = { ...cardsState }

      toggledCards[action.payload.tabid][action.payload.cardidx]["items"][
        action.payload.idx
      ]["checked"] = !action.payload.checked
      return toggledCards

    case "editCardItem":
      const edittedItems = { ...cardsState }
      edittedItems[action.payload.tabid][action.payload.cardidx]["items"][
        action.payload.idx
      ]["text"] = action.payload.value
      return edittedItems

    default:
      console.log("default")

      return cardsState
  }
}
