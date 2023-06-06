import React from "react";

import "./style.css"
import { ButtonSwitch } from "../../components";


const Header = ({handleButton}) => {

    const sections = {
        spanish: ["Inicio", "Projectos", "Contacto"],
        english: ["Home", "Projects", "Contact"]
    }


    return (
        <header className="headerContainer">
            <div className="diagonal diagonalLeft"></div>
            <h3 className="logo">LOGO</h3>
            <nav className="navbar">
                {sections.spanish.map(item => {
                    return <h3 key={item}>{item}</h3>
                })}
            </nav>
            <div className="utils">
                <h3>English Version</h3>
                <ButtonSwitch handleButton={handleButton} />
            </div>
            <div className="diagonal diagonalRight"></div>
        </header>
    )

}

export default Header