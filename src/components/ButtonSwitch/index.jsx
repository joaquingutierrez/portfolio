import React from "react";

import "./style.css"

const ButtonSwitch = ({ handleButton, textOn = "ON", textOff = "OFF" }) => {


    return (
        <label className="switch" onChange={handleButton}>
            <div className="checkboxSwitch">
                <input type="checkbox" className="checkbox" />
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