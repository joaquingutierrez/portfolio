import { useContext } from "react"

import "./style.css"
import { SettingsContext } from "../../context"

const CustomButton = ({ title, handleButton }) => {

    const { lightMode } = useContext(SettingsContext)

    return (
        <button className={`customButton ${lightMode ? "customButton-light" : "customButton-dark"}`} onClick={handleButton}>{title}</button>
    )
}

export default CustomButton