import { useContext } from "react"

import { Header, PersonalInfo, Projects, Footer, MatrixContainer } from "../index"
import { Separator } from "../../components"
import "./style.css"
import { SettingsContext } from "../../context"

const Main = () => {

    const {lightMode} = useContext(SettingsContext)

    return (
        <main className={`mainContent ${lightMode ? "main-light" : "main-dark"}`}>
            <Header />
            <MatrixContainer />
            <Separator title="Inicio" />
            <PersonalInfo />
            <Separator title="Proyectos" />
            <Projects />
            <Separator title="Contacto" />
            <Footer />
        </main>
    )
}

export default Main