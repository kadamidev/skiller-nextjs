import  {v4 as uuidv4 } from 'uuid'


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

        case 'updateCardId':
            const updatedCardsId = {...cardsState}
            updatedCardsId[action.payload.tabid][action.payload.idx].id = action.payload.newid
            return updatedCardsId

        case 'updateItemId':
            const updatedItemIds = {...cardsState}
            updatedItemIds[action.payload.tabid][action.payload.cardidx]['items'][action.payload.itemidx].id = action.payload.newid
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
                console.log('called newCardItem reducer')
            return updatedCards


        case 'removeCardItem': 
            const removedCards = {...cardsState}
            removedCards[action.payload.tabid][action.payload.cardidx]['items'] = removedCards[action.payload.tabid][action.payload.cardidx]['items'].filter((item) => item.id != action.payload.itemid)
            return removedCards


        case 'toggleCardItem': 
            const toggledCards = {...cardsState}
            // console.log(`card idx:${action.payload.cardidx} tabid:${action.payload.tabid} itemidx:${action.payload.idx}`)
            toggledCards[action.payload.tabid][action.payload.cardidx]['items'][action.payload.idx]['checked'] = !action.payload.checked
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