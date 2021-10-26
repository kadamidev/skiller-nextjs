export const settingsReducer = (settings, action) => {
    switch(action.type) {
        case 'setSettings':
            console.log('settings set hit')
            // console.log(`settings: ${action.payload.settings}`)
            return action.payload.settings
        case 'toggleDarkMode':
            const darkModeToggledSettings = {...settings}
            darkModeToggledSettings.darkMode = !settings.darkMode
            return darkModeToggledSettings

        case 'setLayout':
            const layoutChangedSettings = {...settings}
            layoutChangedSettings.layout = action.payload.layout
            return layoutChangedSettings

        case 'toggleProgressBars':
            const toggledProgressSettings = {...settings}
            toggledProgressSettings.progress = !settings.progress
            return toggledProgressSettings

        default:
            console.log('hit default')
            return settings
    }
}