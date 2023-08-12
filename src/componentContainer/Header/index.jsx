import React from "react";

import "./style.css"
import { Options } from "../../components";
import { SettingsContext } from "../../context";


const Header = () => {

    const { changeAnimationState, changeEngLanguageState, changeLightModeState } = React.useContext(SettingsContext)


    const sections = {
        spanish: ["Inicio", "Projectos", "Contacto"],
        english: ["Home", "Projects", "Contact"]
    }


    return (
        <header className="headerContainer boxShadow">
            <div className="diagonal diagonalLeft"></div>
            <h3 className="logo">LOGO</h3>
            <nav className="navbar">
                {sections.spanish.map(item => {
                    return <h3 key={item}>{item}</h3>
                })}
            </nav>
            <div className="utils">
                <h3>LOGO</h3>
                <div className="utilsAnimation">
                    <Options handleLanguage={changeEngLanguageState} handleAnimation={changeAnimationState} handleLightDark={changeLightModeState} />
                </div>
            </div>
            <div className="diagonal diagonalRight"></div>
        </header>
    )

}

export default Header