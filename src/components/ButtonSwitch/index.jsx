import React from "react";

import "./style.css"

const ButtonSwitch = ({ handleButton }) => {

    const animationSwitch = () => {
        handleButton()
        /*         const checkboxSwitch = document.getElementById("checkboxSwitch")
                checkboxSwitch.classList.add("animationForSwitchOn") */
    }

    return (
        <label className="switch" onChange={animationSwitch}>
            <div className="checkboxSwitch">
                <input type="checkbox" className="checkbox" />
                <div className="switchONContainer">
                    <span className="textSlider switchON">ON</span>
                </div>
                <div className="switchOFFContainer">
                    <span className="textSlider switchOFF">OFF</span>
                </div>
            </div>
        </label>
    )
}

export default ButtonSwitch