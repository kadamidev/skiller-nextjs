import  {v4 as uuidv4 } from 'uuid'
import { deleteTabRequest } from '../lib/tasker_api_requests'


export const tabsReducer = (tabsState, action) => {
    switch(action.type) {
        case 'setTabs':
            const currentIdx = action.payload.currentIdx || tabsState.currentTabIdx
            return {tabs: action.payload.tabs, currentTabIdx: action.payload.currentTabIdx}

        case 'addNewTab':
            return {tabs: [...tabsState.tabs, action.payload.tab],
                    currentTabIdx: tabsState.currentTabIdx}

        case 'updateTabId':
            if (tabsState.tabs[action.payload.newTabIdx]) {
                const updatedIdTabs = [...tabsState.tabs]
                const updatedTab = {...tabsState.tabs[action.payload.newTabIdx]}
                updatedTab.id = action.payload.tabDbId
                updatedIdTabs[action.payload.newTabIdx] = updatedTab
                return {tabs: updatedIdTabs, currentTabIdx: tabsState.currentTabIdx}
            } else {
                console.log(`tab deleted: ${tabsState.tabs[action.payload.newTabIdx]} deleting frmo db`)
                deleteTabRequest({id: action.payload.tabDbId})
            }
            
        case 'deleteTab':
            if (tabsState.tabs.length <= 1)  //can't delete a tab if it's the only one
                return {currentTabIdx: tabsState.currentTabIdx, tabs: tabsState.tabs}

            const currentTabId = tabsState.tabs[tabsState.currentTabIdx].id //capture id of currentTab
            const newArr = tabsState.tabs.filter(tab => tab.id != action.payload.id)
            // maintaining current tab pointer
            if (action.payload.id == currentTabId) { //if the deleted tab is the currentTab
                return { tabs: newArr, currentTabIdx: 0 }
            }

            if (action.payload.idx < tabsState.currentTabIdx) { //check for currentTab pointer shift
                for (let idx = 0; idx < tabsState.tabs.length; idx++) { //update pointer
                    if (newArr[idx].id == currentTabId)
                        return { tabs: newArr, currentTabIdx: idx }
                }
            }
            
            return { tabs: newArr, currentTabIdx: tabsState.currentTabIdx }
            
        case 'changeTabName':
            const nameChangedTabs = tabsState.tabs.map(tab => {
                if (tab.id == action.payload.tabId)
                    return { id: tab.id, name: action.payload.name }
                return tab
            })
            return {currentTabIdx: tabsState.currentTabIdx, tabs: nameChangedTabs }

        case 'changeCurrentTab':
            return {currentTabIdx: action.payload.idx, tabs: tabsState.tabs}

        default:
            console.log('default hit')
            return tabsState
    }
}