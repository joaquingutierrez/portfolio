import React, { useContext } from "react";

import imgCV from "../../img/fotoCV.jpg"
import { Terminal } from "../../components"
import "./style.css"
import { SettingsContext } from "../../context";
import CustomButton from "../../components/CustomButton";



const PersonalInfo = () => {

    const { lightMode, engLanguage } = useContext(SettingsContext)

    const personal_text = {
        spanish: {
            title: "Hola! Bienvenidos a mi CV \nMi nombre es Joaquin Gutierrez",
            subtitle: "Fullstack Developer",
            p: "Soy un desarrollador fullstack. \nSoy un apasionado de la tecnología, siempre aprendiendo nuevas cosas y practicando para mejorar. \nEn la sección de proyectos pueden encontrar los diferentes trabajos que he realizado, algunos reales y otros sólo con fines de aprendizaje.",
            skills: ["HTML", "CSS", "JavaScript", "React JS", "React Native", "Node JS", "Express", "MongoDB", "FireBase", "Redux"]
        },
        english: {
            title: "Hello there! Welcome to my CV\nMy name is Joaquin Gutierrez",
            subtitle: "Fullstack Developer",
            p: "I`m a fullstack developer. \nI`m vey apasionate about technology, I always learning new things and practicing for improbe myself. \nIn the projects section, you can find some of my work. Somes reals, some invented for me to practice.",
            skills: ["HTML", "CSS", "JavaScript", "React JS", "React Native", "Node JS", "Express", "MongoDB", "FireBase", "Redux"]
        }
    }


    return (
        <section className="personalInfoContainer">
            {engLanguage ? (
                <Terminal text={personal_text.english} />
            ) : (
                <Terminal text={personal_text.spanish} />
            )}
            <div className={`imgContainerCV  ${lightMode ? "imgContainerCV-light" : "imgContainerCV-dark"}`}>
                <img src={imgCV} alt="Imagen de perfil" loading="lazy" />
                <a href="https://drive.google.com/file/d/1kliyHZkRIrt0fSe-py9y3wCHI6v85e5j/view?usp=sharing" target="_blank" rel="noreferrer"><CustomButton title="Curriculum Vitae" /></a>
            </div>
        </section>
    )

}

export default PersonalInfo