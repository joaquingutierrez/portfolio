import React from "react";
import { portfolio } from "../../data/portfolio"


const Projects = () => {


    const render = (data) => {
        return (
            data.map(item => {
                return (
                    <div key={item.name}>
                        <a href={item.linkToWebSite} target="_blank" rel="noreferrer">Link</a>
                        <h3>{item.name}</h3>
                        <div>
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
        <>
            {render(portfolio)}
        </>
    )
}

export default Projects