import React from "react";

import imgCV from "../../img/fotoCV.jpg"
import "./style.css"



const PersonalInfo = () => {

    const personal_text = {
        spanish: {
            title1: "Hola! Bienvenidos a mi CV",
            title2: "Mi nombre es Joaquin Gutierrez",
            subtitle: "Fullstack Developer in progress",
            p1: "Soy un desarrollador frontend que está actualmente estudiando backend.",
            p2: "Soy un apasionado de la tecnología, siempre aprendiendo nuevas cosas y practicando para mejorar.",
            p3: "En la sección de proyectos pueden encontrar los diferentes trabajos que he realizado, algunos reales y otros sólo con fines de aprendizaje.",
            skills: ["HTML", "CSS", "JavaScript", "React JS", "React Native", "Node JS", "Express", "MongoDB", "FireBase", "Redux"]
        },
        english: {
            title1: "Hola! Bienvenidos a mi CV",
            title2: "Mi nombre es Joaquin Gutierrez",
            subtitle: "Fullstack Developer in progress",
            p1: "Soy un desarrollador frontend que está actualmente estudiando backend.",
            p2: "Soy un apasionado de la tecnología, siempre aprendiendo nuevas cosas y practicando para mejorar.",
            p3: "En la sección de proyectos pueden encontrar los diferentes trabajos que he realizado, algunos reales y otros sólo con fines de aprendizaje.",
            skills: ["HTML", "CSS", "JavaScript", "React JS", "React Native", "Node JS", "Express", "MongoDB", "FireBase", "Redux"]
        }
    }

    const render = (text) => {
        return (
            <section className="personalInfoContainer">
                <div className="textContainerCV holo">
                    <h2>{text.title1}</h2>
                    <h2>{text.title2}</h2>
                    <h3>{text.subtitle}</h3>
                    <p>{text.p1}</p>
                    <p>{text.p2}</p>
                    <p>{text.p3}</p>
                    <div>
                        <h4>Skills: {text.skills.join(" - ")}</h4>
                    </div>
                </div>
                <div className="imgContainerCV">
                    <img src={imgCV} alt="Imagen de perfil" />
                </div>
            </section>
        )
    }

    return (
        <>
            {render(personal_text.spanish)}
        </>
    )

}

export default PersonalInfo