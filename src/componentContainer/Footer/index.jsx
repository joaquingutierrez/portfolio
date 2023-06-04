import React from "react";


const Footer = () => {

    const contactInfo = {
        github: "https://github.com/joaquingutierrez",
        email: "joaquinguty@gmail.com",
        linkedin: "https://www.linkedin.com/in/joaquin-gutierrez-5a1116232/"
    }

    return (
        <>
            <a href={contactInfo.github}>github</a>
            <a href={contactInfo.email}>email</a>
            <a href={contactInfo.linkedin}>linkedin</a>
        </>
    )
}

export default Footer