//tabs

export const fetchTabsRequest = async (id) => {
    try {
        const response = await fetch(`/api/tasker_app/tab/${id}`)
        console.log('sent fetch')

        const { tabs: tabsData } = await response.json()
        console.log(tabsData)
        return await tabsData
    } catch(error) {
        console.log(`failed fetching tabs: ${error}`)
    }
}

export async function createTabRequest(user_id) {
    try {
    const tab = { tab: { user_id: user_id } }
    const response = await fetch('/api/tasker_app/tab/create', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tab),
    })
    return await response.json()
    } catch(e) {
        console.log(`failed persisting new tab to db: ${e}`)
    }
}

export async function deleteTabRequest(user_id, tab) {
    try {
    const response = await fetch('/api/tasker_app/tab/delete', {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            tab: { user_id: user_id, id: tab.id }
        }),
    })
    if (response.ok) console.log('successfully deleted')
    } catch(e) {
        console.log(`failed to delete tab from db, error: ${e}`)
    }
}

export async function updateTabRequest(tab) {
    try {
        const response = await fetch('api/tasker_app/tab/update', {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                tab: {
                    id: tab.id,
                    name: tab.name
                }
            })
        })
    } catch(e) {
        console.log(`failed to update tab in the db, error: ${e}`)
    }
}


//////cards//////////cards//////////cards//////////cards//////////cards////////

export async function createCardRequest(tab_id, card) {
    try {
        const response = await fetch('/api/tasker_app/card/create', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                { card: {
                    tab_id: tab_id,
                    header: card.header,
                }}
            )
        })
        return await response.json()
    } catch(e) {
        console.log(`failed saving new card to the db, error: ${e}`)
    }
}

export async function deleteCardRequest(id) {
    try {
    const response = await fetch('/api/tasker_app/card/delete', {
        method: 'DELETE',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            card: {id: id}
        }),
    })
    if (response.ok) console.log('successfully deleted card')
    } catch(e) {
        console.log(`failed to delete card from db, error: ${e}`)
    }
}




//////items////////items////////items////////items////////items////////items//////
export async function createItemRequest(card_id, item) {
    try {
        const response = await fetch('/api/tasker_app/item/create', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(
                { cardItem: {
                    card_id: card_id,
                    text: item.text,
                }}
            )
        })
        return await response.json()
    } catch(e) {
        console.log(`failed saving new item to the db, error: ${e}`)
    }
}