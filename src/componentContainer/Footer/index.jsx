import React, { useContext } from "react";

import "./style.css"
import githubLogo from "../../img/signo-de-github.png"
import emailLogo from "../../img/email.png"
import linkedinLogo from "../../img/logotipo-de-linkedin.png"
import { SettingsContext } from "../../context"


const Footer = () => {

    const { lightMode } = useContext(SettingsContext)

    const contactInfo = {
        github: "https://github.com/joaquingutierrez",
        email: "joaquinguty@gmail.com",
        linkedin: "https://www.linkedin.com/in/joaquin-gutierrez-5a1116232/"
    }

    return (
        <footer id="footer">
            <a href={contactInfo.github} target="_blank" rel="noreferrer">
                <div className={`logoFooterContainer ${lightMode ? "logoFooterContainer-light" : "logoFooterContainer-dark"}`}>
                    <img src={githubLogo} alt="" />
                </div>
            </a>
            <a href={contactInfo.email} target="_blank" rel="noreferrer">
                <div className={`logoFooterContainer ${lightMode ? "logoFooterContainer-light" : "logoFooterContainer-dark"}`}>
                    <img src={emailLogo} alt="" />
                </div>
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer">
                <div className={`logoFooterContainer ${lightMode ? "logoFooterContainer-light" : "logoFooterContainer-dark"}`}>
                    <img src={linkedinLogo} alt="" />
                </div>
            </a>
        </footer>
    )
}

export default Footer