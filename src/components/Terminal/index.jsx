import React from "react";

import "./style.css"


const Terminal = ({ text }) => {
    return (
        <div className="terminal">
            <div className="terminalNav">
                <div className="actionButtonsTerminal">
                    <div className="closeButtonTerminal"></div>
                    <div className="maxButtonTerminal"></div>
                    <div className="minButtonTerminal"></div>
                </div>
                <h2 className="terminalTitle">Terminal</h2>
            </div>
            <div className="infoTerminal">
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