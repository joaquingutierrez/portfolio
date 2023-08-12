import React, { useContext, useEffect } from "react";

import { portfolio } from "../../data/portfolio"
import "./style.css"
import { SettingsContext } from "../../context"
import CustomButton from "../../components/CustomButton"


const Projects = () => {

    const { lightMode } = useContext(SettingsContext)

    const render = (data) => {
        return (
            data.map((item, index) => {
                return (
                    <div key={item.name} className={`cardContainer ${index % 2 === 0 ? "border-radius-img-right" : "row-reverse border-radius-img-left"} ${lightMode ? "cardContainer-light" : "cardContainer-dark"}`} id={"project-" + index} >
                        <div className="infoProjectContainer invisible">
                            <h3 className={`projectTitle ${lightMode ? "projectTitle-light" : "projectTitle-dark"}`}>{item.name}</h3>
                            <div className={`techsContainer ${lightMode ? "techsContainer-light" : "techsContainer-dark"}`}>
                                {item.technology.map(tec => {
                                    return <p key={tec}>{tec}</p>
                                })}
                            </div>
                            <a href={item.linkToRepo} className="link" target="_blank" rel="noreferrer"><CustomButton title="Link to Repo"/></a>
                        </div>
                        <div className="imgProjectContainer" project-img-ref={index}>
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
                    const projectNumber = projectImgContainer.getAttribute("project-img-ref")
                    if (projectNumber % 2 === 0) {
                        return projectImgContainer.classList.add("imgProjectAnimation-right")
                    }
                    return projectImgContainer.classList.add("imgProjectAnimation-left")
                }
                projectImgContainer.classList.add("invisible")
                projectTextContainer.classList.add("invisible")
                projectImgContainer.classList.remove("imgProjectAnimation-right")
                projectImgContainer.classList.remove("imgProjectAnimation-left")

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