import React from "react";

import { portfolio } from "../../data/portfolio"
import "./style.css"


const Projects = () => {


    const render = (data) => {
        return (
            data.map(item => {
                return (
                    <div key={item.name} className="cardContainer">
                        <a href={item.linkToWebSite} target="_blank" rel="noreferrer"><img src={item.image} alt="Modificar despues" /></a>
                        <h3>{item.name}</h3>
                        <div className="techsContainer">
                            {item.technology.map(tec => {
                                return <p key={tec}>{tec}</p>
                            })}
                        </div>
                        <a href={item.linkToRepo} target="_blank" rel="noreferrer"><h4>Link to repo</h4></a>
                    </div>
                )
            })
        )
    }

    return (
        <section id="projects">
            {render(portfolio)}
        </section>
    )
}

export default Projects