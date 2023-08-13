import { useContext } from "react"

import { Header, PersonalInfo, Projects, Footer, MatrixContainer } from "../index"
import { Separator } from "../../components"
import "./style.css"
import { SettingsContext } from "../../context"

const Main = () => {

    const { lightMode, engLanguage } = useContext(SettingsContext)

    return (
        <main className={`mainContent ${lightMode ? "main-light" : "main-dark"}`}>
            <Header />
            <MatrixContainer />
            <Separator title={engLanguage ? "Home" : "Inicio"} />
            <PersonalInfo />
            <Separator title={engLanguage ? "Projects" : "Proyectos"} />
            <Projects />
            <Separator title={engLanguage ? "Contact" : "Contacto"} />
            <Footer />
        </main>
    )
}

export default Main