//tabs

export const fetchTabsRequest = async () => {
  try {
    const response = await fetch(`/api/tasker_app/tab/`)

    const { tabs: tabsData } = await response.json()
    return await tabsData
  } catch (error) {
    console.log(`failed fetching tabs: ${error}`)
  }
}

export async function createTabRequest(user_id) {
  try {
    const tab = { tab: { user_id: user_id } }
    const response = await fetch("/api/tasker_app/tab/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tab),
    })
    return await response.json()
  } catch (e) {
    console.log(`failed persisting new tab to db: ${e}`)
  }
}

export async function deleteTabRequest(tab) {
  try {
    const response = await fetch("/api/tasker_app/tab/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tab: { id: tab.id },
      }),
    })
  } catch (e) {
    console.log(`failed to delete tab from db, error: ${e}`)
  }
}

export async function updateTabRequest(tab) {
  try {
    const response = await fetch("api/tasker_app/tab/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tab: {
          id: tab.id,
          name: tab.name,
        },
      }),
    })
  } catch (e) {
    console.log(`failed to update tab in the db, error: ${e}`)
  }
}

//////cards//////////cards//////////cards//////////cards//////////cards////////

export async function createCardRequest(tab_id, card) {
  try {
    const response = await fetch("/api/tasker_app/card/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        card: {
          tab_id: tab_id,
          header: card.header,
        },
      }),
    })
    return await response.json()
  } catch (e) {
    console.log(`failed saving new card to the db, error: ${e}`)
  }
}

export async function deleteCardRequest(card) {
  try {
    const response = await fetch("/api/tasker_app/card/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        card: { id: card.id },
      }),
    })
  } catch (e) {
    console.log(`failed to delete card from db, error: ${e}`)
  }
}

export async function updateCardRequest(card) {
  try {
    const response = await fetch("/api/tasker_app/card/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        card: {
          id: card.id,
          header: card.header,
          collapsed: card.collapsed,
        },
      }),
    })
    return await response.json()
  } catch (e) {
    console.log(`failed saving new card to the db, error: ${e}`)
  }
}

//////items////////items////////items////////items////////items////////items//////
export async function createItemRequest(card_id, item) {
  try {
    const response = await fetch("/api/tasker_app/item/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cardItem: {
          card_id: card_id,
          text: item.text,
        },
      }),
    })
    return await response.json()
  } catch (e) {
    console.log(`failed saving new item to the db, error: ${e}`)
  }
}

export async function deleteItemRequest(item) {
  try {
    const response = await fetch("/api/tasker_app/item/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cardItem: { id: item.id },
      }),
    })
  } catch (e) {
    console.log(`failed to delete item from db, error: ${e}`)
  }
}

export async function updateItemRequest(item) {
  try {
    const response = await fetch("/api/tasker_app/item/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item: {
          id: item.id,
          text: item.text,
          checked: item.checked,
        },
      }),
    })
    return await response.json()
  } catch (e) {
    console.log(`failed saving new card to the db, error: ${e}`)
  }
}
