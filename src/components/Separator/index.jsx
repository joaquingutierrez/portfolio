import React, { useContext } from "react";
import keyboard from "../../img/keyboard.png"

import "./style.css"
import { SettingsContext } from "../../context";

const Separator = ({title}) => {

    const {lightMode} = useContext(SettingsContext)

    return (
        <div className="separatorContainer" id={title}>
            <div className={`separator ${lightMode ? "separator-light" : "separator-dark"}`}></div>
            <img className="separatorImg" src={keyboard} alt="keyboard" />
            <h2>{title}</h2>
            <img className="separatorImg" src={keyboard} alt="keyboard" />
            <div className={`separator ${lightMode ? "separator-light" : "separator-dark"}`}></div>
        </div>
    )
}

export default Separator