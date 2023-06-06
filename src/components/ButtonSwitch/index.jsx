import React from "react";

import "./style.css"

const ButtonSwitch = ({ handleButton }) => {



    return (
        <label className="switch" onChange={handleButton}>
            <input type="checkbox" className="checkbox" />
            <span className="textSlider"></span>
        </label>
    )
}

export default ButtonSwitch