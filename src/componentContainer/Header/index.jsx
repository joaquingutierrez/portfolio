import React from "react";

import "./style.css"
import { Options } from "../../components";
import { SettingsContext } from "../../context";


const Header = () => {

    const { changeAnimationState, changeEngLanguageState, changeLightModeState, lightMode, engLanguage } = React.useContext(SettingsContext)


    const sections = {
        spanish: ["Inicio", "Proyectos", "Contacto"],
        english: ["Home", "Projects", "Contact"]
    }

    const smoothScroll = (target) => {
        const element = document.querySelector(target)
        element.scrollIntoView({
            behavior: "smooth"
        })
    }

    const handleNavLink = (e) => {
        e.preventDefault()
        smoothScroll(e.target.getAttribute("href"))
    }


    return (
        <header className={`headerContainer boxShadow ${lightMode ? "headerContainer-light" : "headerContainer-dark"}`}>
            <div className={`diagonal diagonalLeft ${lightMode ? "diagonalLeft-light" : "diagonalLeft-dark"}`}></div>
            <h3 className="logo">LOGO</h3>
            <nav className="navbar">
                <ul className="navLinks">
                    {engLanguage ?
                        (
                            sections.english.map(item => {
                                return <li key={item}><a onClick={handleNavLink} href={"#" + item}>{item}</a></li>
                            })
                        )
                        :
                        (
                            sections.spanish.map(item => {
                                return <li key={item}><a onClick={handleNavLink} href={"#" + item}>{item}</a></li>
                            })
                        )
                    }
                </ul>
            </nav>
            <div className="utils">
                <h3>LOGO</h3>
                <div className="utilsAnimation">
                    <Options handleLanguage={changeEngLanguageState} handleAnimation={changeAnimationState} handleLightDark={changeLightModeState} />
                </div>
            </div>
            <div className={`diagonal diagonalRight ${lightMode ? "diagonalRight-light" : "diagonalRight-dark"}`}></div>
        </header>
    )

}

export default Header