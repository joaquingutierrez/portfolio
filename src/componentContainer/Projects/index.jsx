import React, { useEffect } from "react";

import { portfolio } from "../../data/portfolio"
import "./style.css"


const Projects = () => {


    const render = (data) => {
        return (
            data.map((item, index) => {
                return (
                    <div key={item.name} className={index % 2 === 0 ? "cardContainer" : "cardContainer row-reverse"} id={"project-" + index} >
                        <div className="infoProjectContainer">
                            <h3>{item.name}</h3>
                            <div className="techsContainer">
                                {item.technology.map(tec => {
                                    return <p key={tec}>{tec}</p>
                                })}
                            </div>
                            <a href={item.linkToRepo} target="_blank" rel="noreferrer"><h4>Link to repo</h4></a>
                        </div>
                        <div className="imgProjectContainer initialPosition-right">
                            <a href={item.linkToWebSite} target="_blank" rel="noreferrer"><img src={item.image} alt="Modificar despues" /></a>
                        </div>
                    </div>
                )
            })
        )
    }


    useEffect(() => {
        let options = {
            root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 0.1,
        };
        const projectImgAnimation = (entries) => {
            entries.forEach(entry => {
                const projectImgContainer = entry.target.querySelector(".imgProjectContainer")
                const projectTextContainer = entry.target.querySelector(".infoProjectContainer")
                if (entry.isIntersecting) {
                    projectImgContainer.classList.remove("invisible")
                    projectTextContainer.classList.remove("invisible")
                    return projectImgContainer.classList.add("imgProjectAnimation-right")
                }
                projectImgContainer.classList.add("invisible")
                projectTextContainer.classList.add("invisible")
                projectImgContainer.classList.remove("imgProjectAnimation-right")
            })
        }

        let observer = new IntersectionObserver(projectImgAnimation, options);

        let target = document.querySelectorAll(".cardContainer");
        target.forEach(item => {
            observer.observe(item);
        })
    }, [])

    return (
        <section id="projects">
            {render(portfolio)}
        </section>
    )
}

export default Projects