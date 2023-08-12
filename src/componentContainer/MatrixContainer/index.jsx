import { useContext } from "react"

import { SettingsContext } from "../../context"
import { Matrix } from "../../components"

const MatrixContainer = () => {

    const {animation, lightMode} = useContext(SettingsContext)

    return (
        <>
            {animation && <Matrix lightMode={lightMode} />}
        </>
    )
}

export default MatrixContainer