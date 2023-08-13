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
        if (!element) {
            return document.querySelector("#root").scrollIntoView({
                behavior: "smooth"
            })
        }
        element.scrollIntoView({
            behavior: "smooth"
        })
    }

    const handleNavLink = (e) => {
        e.preventDefault()
        smoothScroll(e.target.getAttribute("href"))
    }


    return (
        <header className="headerContainer">
            <div className={` headerMenu ${lightMode ? "headerMenu-light" : "headerMenu-dark"}`}>
                <div className={`diagonal diagonalLeft ${lightMode ? "diagonalLeft-light" : "diagonalLeft-dark"}`}></div>
                <h3 className="logo logoLeft">LOGO</h3>
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
                <h3 className="logo logoRight">LOGO</h3>
                <div className="utils">
                    <div className="utilsAnimation">
                        <Options handleLanguage={changeEngLanguageState} handleAnimation={changeAnimationState} handleLightDark={changeLightModeState} />
                    </div>
                </div>
                <div className={`diagonal diagonalRight ${lightMode ? "diagonalRight-light" : "diagonalRight-dark"}`}></div>
            </div>
            <div className={`goUpButton ${lightMode ? "goUpButton-light" : "goUpButton-dark"}`} onClick={handleNavLink}>
                <div className={`arrow ${lightMode ? "arrow-light" : "arrow-dark"}`}></div>
                <div className={`arrow-stem ${lightMode ? "arrow-stem-light" : "arrow-stem-dark"}`}></div>
            </div>
        </header>
    )

}

export default Header