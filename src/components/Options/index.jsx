import React, { useContext } from "react";

import "./style.css"
import ButtonSwitch from "../ButtonSwitch";
import CustomButton from "../CustomButton";
import { SettingsContext } from "../../context";

const Options = ({ handleLanguage, handleAnimation, handleLightDark }) => {

    const { lightMode, engLanguage } = useContext(SettingsContext)

    const openMenu = () => {
        const myDialog = document.getElementById("myDialog")
        myDialog.showModal()
    }

    return (
        <>
            <CustomButton title={engLanguage ? "Settings" : "Configuraciones"} handleButton={openMenu} />
            <dialog id="myDialog" className={`${lightMode ? "myDialog-light" : "myDialog-dark"}`}>
                <form method="dialog">
                    <div className="option">
                        <h3>Language</h3>
                        <ButtonSwitch handleButton={handleLanguage} textOn="Esp" textOff="Eng" />
                    </div>
                    <div className="option">
                        <h3>Matrix</h3>
                        <ButtonSwitch handleButton={handleAnimation} />
                    </div>
                    <div className="option">
                        <h3>Mode</h3>
                        <ButtonSwitch handleButton={handleLightDark} textOn="Light" textOff="Dark" />
                    </div>
                    <CustomButton title="Cerrar" />
                </form>
            </dialog>
        </>
    )
}

export default Options