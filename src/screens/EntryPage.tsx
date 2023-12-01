import { useEffect, useState } from "react"
import ButtonType1 from "../components/buttons/ButtonType1"
import Header from "../components/header/Header"

const EntryPage = () => {

    // used to follow if the "enter kosmo" button is being hovered or not
    const [isButtonHovered, setButtonIsHovered] = useState(false)
    
    // used to follow the state of the position of the mouse
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleButtonHovering = () => {
        setButtonIsHovered(true)
    }

    const handleButtonLeaving = () => {
        setButtonIsHovered(false)
    }

    const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({
            x: -((window.innerWidth / 2) - event.clientX) / 100, 
            y: -((window.innerHeight / 2) - event.clientY) / 70
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <div className="entryPage">
            <div className='entryPage-colorLight'></div>
            <div className="entryPage-backgroundLayer">
                <div 
                    className="entryPage-innerElements" 
                    style={{ 
                        transformStyle:"preserve-3d", 
                        perspectiveOrigin:'center',
                        transform: `perspective(200rem) translate3d(0, 0, .5rem) rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)` }}
                >
                    <Header headerScreen="entryPage"/>
                    <div className="entryPage-centerSection">
                        <div className="entryPage-sideSection">
                            {/* <img src="src/assets/k.svg" alt="" srcSet="k.svg 2x" /> */}
                            <p>Get into the Field.</p>
                            <br />
                            <p className="entryPage-appDescription">Kosmo aims to be a quality-focused social network.</p>
                            <p>We offer features centered on human psychology to reduce online influence and hatred, and enhance post quality.</p>
                        </div>
                        <div 
                            className='entryPage-buttonSection' 
                            onMouseEnter={handleButtonHovering} 
                            onMouseLeave={handleButtonLeaving}
                            style={{ transform: `translateZ(200rem)`, zIndex:1 }}
                        >
                            <ButtonType1 buttonText='Enter Kosmo_' interactionType="entryButton"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntryPage
