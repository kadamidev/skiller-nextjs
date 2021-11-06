import  {v4 as uuidv4 } from 'uuid'
import { deleteCardRequest, deleteItemRequest } from '../lib/tasker_api_requests'

export const cardsReducer = (cardsState, action) => {
    switch(action.type) {
        case 'setCards':
            console.log(`preset cards ${cardsState}`)
            console.log(`postset cards ${action.payload.cards}`)

            return action.payload.cards

        case 'addNewCard':
            console.log('add new card hit')
            const newCards = {...cardsState}
            if (!newCards[action.payload.tabid]) {
                newCards[action.payload.tabid] = []
            }
            newCards[action.payload.tabid] = [...newCards[action.payload.tabid], action.payload.card]
            return newCards

        case 'updateCardTabId':

            const updatedCardsTabId = {...cardsState}
            console.log(`[updateCardTabId]payload: ${JSON.stringify(action.payload)}`)
            updatedCardsTabId[action.payload.newId] = updatedCardsTabId[action.payload.oldId]
            delete updatedCardsTabId[action.payload.oldId]
            console.log(`[updateCardTabId]current cardState: ${JSON.stringify(updatedCardsTabId[action.payload.newId])}`)
            console.log('[updateCardTabId]card Tab Id updated finished')
            return updatedCardsTabId


        case 'updateCardId':
            console.log(`entered updateCardId reducer tabid: ${action.payload.tabid} idx:${action.payload.idx} dbid:${action.payload.newid}`)
            console.log(`current cardState: ${JSON.stringify(cardsState[action.payload.tabid])}`)
            const updatedCardsId = {...cardsState}
            if (updatedCardsId[action.payload.tabid][action.payload.idx]) {
                updatedCardsId[action.payload.tabid][action.payload.idx].id = action.payload.newid
            } else {
                console.log(`card nolonger exists, deleting from db`)
                deleteCardRequest({id: action.payload.newid})
            }
            return updatedCardsId

        case 'updateItemId':
            const updatedItemIds = {...cardsState}
            // console.log(`does the card still exist?: ${JSON.stringify(cardsState[action.payload.tabid][action.payload.cardidx])}`)
            // console.log(`does the item still exist?: ${JSON.stringify(cardsState[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx])}`)
            // console.log(`${JSON.stringify(action.payload)}`)
            if (cardsState[action.payload.tabid][action.payload.cardidx]) { //does the card still exist
                if (cardsState[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx]) { //does the item still exist
                    updatedItemIds[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx].id = action.payload.newid
                } else {
                    deleteItemRequest({id: action.payload.newid})
                }
            } 
            return updatedItemIds


        case 'deleteCard':
            const deletedCards = {...cardsState}
            deletedCards[action.payload.tabid].splice(action.payload.cardidx, 1)
            return deletedCards

        case 'changeHeader':
            const changedCards = {...cardsState}
            changedCards[action.payload.tabid][action.payload.cardidx].header = action.payload.value
            return changedCards


        case 'newCardItem':
            const updatedCards = {...cardsState}
            updatedCards[action.payload.tabid][action.payload.cardidx]['items'] = [...updatedCards[action.payload.tabid][action.payload.cardidx]['items'],
                action.payload.newItem]
                console.log(`new item added, new item idx: ${updatedCards[action.payload.tabid][action.payload.cardidx]['items'].length - 1 }`)
            return updatedCards


        case 'removeCardItem': 
            const removedCards = {...cardsState}
            removedCards[action.payload.tabid][action.payload.cardidx]['items'] = removedCards[action.payload.tabid][action.payload.cardidx]['items'].filter((item) => item.id != action.payload.itemid)
            return removedCards


        case 'toggleCardItem': 
            const toggledCards = {...cardsState}
            // console.log(`card idx:${action.payload.cardidx} tabid:${action.payload.tabid} itemidx:${action.payload.idx}`)
            toggledCards[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['checked'] = !action.payload.checked
            console.log('item toggle complete')
            return toggledCards
        

        case 'editCardItem':
            const edittedItems = {...cardsState}
            edittedItems[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['text'] = action.payload.value
            return edittedItems

        default:
            console.log('default')

            return cardsState
    }
}