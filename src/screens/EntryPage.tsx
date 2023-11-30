import { useEffect, useState } from "react"
import ButtonType1 from "../components/buttons/ButtonType1"
import Header from "../components/header/Header"

const EntryPage = () => {

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <div className="entryPage">
            <div className='entryPage-colorLight'></div>
            <div className="entryPage-backgroundLayer">
                <Header headerScreen="entryPage"/>
                <div className="entryPage-centerSection">
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <ButtonType1 buttonText='Enter Kosmo_' interactionType="entryButton"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntryPage