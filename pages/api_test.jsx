import React, { useState } from 'react';


const fetchTabsRequest = async (id) => {
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


const api_test = () => {
    const [tabs, setTabs] = useState([{ id: 1, name: 'loading...' }, { id: 2, name: 'loading...' }])

    
    // setTabs(fetchTabsRequest(1))

    



    return (
        <div>
            hello world
            {/* <ul>
                {
                tabs.map(tab => {
                    return <li key={tab.id}>{tab.name}</li>
                })
                }
            </ul>
            <button onClick={async () => {
                const newTabs = await fetchTabsRequest(1)
                setTabs(newTabs)
            }
            }>Fetch tabs</button> */}
        </div>
    );
}

export default api_test;