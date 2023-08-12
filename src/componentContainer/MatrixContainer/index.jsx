import { useContext } from "react"

import { SettingsContext } from "../../context"
import { Matrix } from "../../components"

const MatrixContainer = () => {

    const {animation} = useContext(SettingsContext)

    return (
        <>
            {animation && <Matrix />}
        </>
    )
}

export default MatrixContainer