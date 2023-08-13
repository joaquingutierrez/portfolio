import React from "react";

import "./style.css"

const ButtonSwitch = ({activated = false, handleButton, textOn = "ON", textOff = "OFF" }) => {

    return (
        <label className="switch">
            <div className="checkboxSwitch">
                <input type="checkbox" className="checkbox" onChange={handleButton} checked={activated} />
                <div className="switchONContainer">
                    <span className="textSlider switchON">{textOn}</span>
                </div>
                <div className="switchOFFContainer">
                    <span className="textSlider switchOFF">{textOff}</span>
                </div>
            </div>
        </label>
    )
}

export default ButtonSwitch