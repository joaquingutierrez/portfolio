import React, { useContext } from "react";

import "./style.css"
import { SettingsContext } from "../../context"


const Terminal = ({ text }) => {

    const { lightMode } = useContext(SettingsContext)

    return (
        <div className={`terminal ${lightMode ? "terminal-light" : "terminal-dark"}`}>
            <div className="terminalNav">
                <div className="actionButtonsTerminal">
                    <div className="closeButtonTerminal"></div>
                    <div className="maxButtonTerminal"></div>
                    <div className="minButtonTerminal"></div>
                </div>
                <h2 className="terminalTitle">Terminal</h2>
            </div>
            <div className={`infoTerminal ${lightMode ? "infoTerminal-light" : "infoTerminal-dark"}`}>
                <h2>{text.title}</h2>
                <h3>{text.subtitle}</h3>
                <p>{text.p}</p>
                <div>
                    <h4>Skills: {text.skills.join(" - ")}</h4>
                </div>
            </div>
        </div>
    )

}

export default Terminal