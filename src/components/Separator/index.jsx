import React, { useContext } from "react";
import keyboardDark from "../../img/keyboard.png"
import keyboardLight from "../../img/keyboard-light.png"

import "./style.css"
import { SettingsContext } from "../../context";

const Separator = ({title}) => {

    const {lightMode} = useContext(SettingsContext)

    return (
        <div className="separatorContainer" id={title}>
            <div className={`separator ${lightMode ? "separator-light" : "separator-dark"}`}></div>
            <img className="separatorImg" src={lightMode ? keyboardLight : keyboardDark} alt="keyboard" loading="lazy" />
            <h2>{title}</h2>
            <img className="separatorImg" src={lightMode ? keyboardLight : keyboardDark} alt="keyboard" loading="lazy" />
            <div className={`separator ${lightMode ? "separator-light" : "separator-dark"}`}></div>
        </div>
    )
}

export default Separator