// import { useEffect } from "react"


export default async function queuedDbCall(item, cb, ...cbParams) {
    // console.log(`queued db call enter, called on: ${item}, callback: ${cb}(${cbParams})`)
    if (item.id[0] != 'T') { //if an items ID isn't a temporary set one denoted by T at the start
        // console.log(`id: ${item.id} doesn't start with T, calling the cb and exitting`)
        cb(...cbParams)
        return
    }

    const retry = setTimeout(() => {
        queuedDbCall(item, cb, ...cbParams)
    }, 500)
    // let firstRun = true
    // let finished = false
    // useEffect(() => {
    //     if (firstRun) {
    //         console.log(`useEffect active and first run cancelled, waiting for change in item.id`)
    //         firstRun = false
    //         return
    //     }
    
    //     console.log(`change in item.id triggered, calling hook again, id: ${id}`)
    //     useQueuedDbCall(item, cb, cbParams)
    //     finished = true
    //     console.log(`completed and now returning the function`)
    //     return
    // },[item.id])

    // if (finished) return
}