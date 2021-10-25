export function getCardsData() {
    const cardItems1 = [
        { id: 'T1', checked: false, text: 'Welcome to Tasker'},
        // { id: 2, checked: true, text: 'fix tabmenu header overflow'},
        // { id: 3, checked: true, text: 'fix item length overflow'},
        // { id: 4, checked: false, text: 'fix header length overflow'},
    ]
    
    // const cardItems2 = [
    //     { id: 5, checked: true, text: 'Homework'},
    //     { id: 6, checked: false, text: 'Exercise'},
    //     { id: 7, checked: false, text: 'Walk dog'},
    // ]

    const cardsPreset = [
        { id: 'T111', header: 'New Card', items: cardItems1},
        // { id: 222, header: 'Tasks', items: cardItems2},
    ]

    return cardsPreset
}