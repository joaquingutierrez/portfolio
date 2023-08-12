import { createContext, useState } from "react";

export const SettingsContext = createContext()

const SettingsProvider = ({ children }) => {
    const [animation, setAnimation] = useState(false)
    const [engLanguage, setEngLanguage] = useState(false)
    const [lightMode, setLightMode] = useState(false)

    const changeAnimationState = () => {
        setAnimation(!animation)
    }
    const changeEngLanguageState = () => {
        setEngLanguage(!engLanguage)
    }
    const changeLightModeState = () => {
        setLightMode(!lightMode)
    }

    return (
        <SettingsContext.Provider value={{
            animation,
            engLanguage,
            lightMode,
            changeAnimationState,
            changeEngLanguageState,
            changeLightModeState
        }}>
            {children}
        </SettingsContext.Provider>
    )
}

export default SettingsProvider