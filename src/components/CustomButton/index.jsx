import "./style.css"

const CustomButton = ({title, handleButton}) => {
    return (
        <button className="customButton" onClick={handleButton}>{title}</button>
    )
}

export default CustomButton