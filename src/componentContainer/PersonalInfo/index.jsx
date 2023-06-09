import React from "react";

import imgCV from "../../img/fotoCV.jpg"
import {Separator, Terminal} from "../../components"
import "./style.css"



const PersonalInfo = () => {

    const personal_text = {
        spanish: {
            title: "Hola! Bienvenidos a mi CV \nMi nombre es Joaquin Gutierrez",
            subtitle: "Fullstack Developer in progress",
            p: "Soy un desarrollador frontend que está actualmente estudiando backend. \nSoy un apasionado de la tecnología, siempre aprendiendo nuevas cosas y practicando para mejorar. \nEn la sección de proyectos pueden encontrar los diferentes trabajos que he realizado, algunos reales y otros sólo con fines de aprendizaje.",
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


    return (
        <>
        <Separator />
            <section className="personalInfoContainer">
                <Terminal text={personal_text.spanish} />
                <div className="imgContainerCV">
                    <img src={imgCV} alt="Imagen de perfil" />
                </div>
            </section>
        </>
    )

}

export default PersonalInfo