import React from "react";

import "./style.css"

const ButtonSwitch = ({handleButton}) => {

    

    return (
        <label onChange={handleButton} htmlFor="switch">
            <input type="checkbox" name="switch" id="switch" />
            <span></span>
        </label>
    )
}

export default ButtonSwitch