import React from "react";


const Header = () => {

    const sections = {
        spanish: ["Inicio", "Projectos", "Contacto"],
        english: ["Home", "Projects", "Contact"]
    }


    return (
        <>
            <h2>header</h2>
            {sections.spanish.map(item => {
                return <h3 key={item}>{item}</h3>
            })}
            <h3>English Version</h3>
            <h3>Boton (Parar animaciones)</h3>
        </>
    )

}

export default Header