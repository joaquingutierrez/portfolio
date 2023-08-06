import React from "react";
import keyboard from "../../img/keyboard.png"

import "./style.css"

const Separator = ({title}) => {
    return (
        <div className="separatorContainer">
            <div className="separator"></div>
            <img src={keyboard} alt="keyboard" />
            <h2>{title}</h2>
            <img src={keyboard} alt="keyboard" />
            <div className="separator"></div>
        </div>
    )
}

export default Separator