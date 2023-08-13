import { createContext, useState, useEffect } from "react";

export const SettingsContext = createContext()

const SettingsProvider = ({ children }) => {
    const [animation, setAnimation] = useState(false)
    const [engLanguage, setEngLanguage] = useState(false)
    const [lightMode, setLightMode] = useState(false)

    useEffect(()=>{
        setAnimation(localStorage.getItem("animation") === "true" || animation)
        setEngLanguage(localStorage.getItem("engLanguage") === "true" || engLanguage)
        setLightMode(localStorage.getItem("lightMode") === "true" || lightMode)
    },[animation, engLanguage, lightMode])

    const changeAnimationState = () => {
        setAnimation(!animation)
        localStorage.setItem("animation", !animation)
    }
    const changeEngLanguageState = () => {
        setEngLanguage(!engLanguage)
        localStorage.setItem("engLanguage", !engLanguage)
    }
    const changeLightModeState = () => {
        setLightMode(!lightMode)
        localStorage.setItem("lightMode", !lightMode)
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