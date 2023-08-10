import React from "react";

import "./style.css"
import ButtonSwitch from "../ButtonSwitch";
import CustomButton from "../CustomButton";

const Options = ({ handleLanguage, handleAnimation, handleLightDark }) => {


    const openMenu = () => {
        const myDialog = document.getElementById("myDialog")
        myDialog.showModal()
    }

    return (
        <>
            <CustomButton title="Options" handleButton={openMenu} />
            <dialog id="myDialog">
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
                        <ButtonSwitch handleButton={handleLightDark} textOn="Dark" textOff="Light" />
                    </div>
                    <button className="modalButton">Cerrar</button>
                </form>
            </dialog>
        </>
    )
}

export default Options