import React, { useEffect, useState } from "react"
import ButtonType1 from "../components/buttons/ButtonType1"
import Header from "../components/header/Header"
import { EntryPageProps } from "../interfaces/screensInterface"
import { ScreenProps } from "../interfaces/interfaces"

const EntryPage: React.FC<EntryPageProps & ScreenProps> = ({ pageSelection, animation, screenFormat, currentScreen }) => {

    // used to follow if the "enter kosmo" button is being hovered or not
    // const [isButtonHovered, setButtonIsHovered] = useState(false)

    // const handleButtonHovering = () => {
    //     setButtonIsHovered(true)
    // }

    // const handleButtonLeaving = () => {
    //     setButtonIsHovered(false)
    // }

    const [colorLightAnimation, setColorLightAnimation] = useState(false)
    const [entryPageAnimation, setEntryPageAnimation] = useState(false)

    useEffect(() => {
        if (animation) {
            setColorLightAnimation(true)
            setTimeout(() => {
                setEntryPageAnimation(true)
            }, 500)
        }
        else {
            setEntryPageAnimation(false)
            setTimeout(() => {
                setColorLightAnimation(false)
            }, 500)
        }
    }, [animation])

    return (
        <div className={`entryPage ${entryPageAnimation ? 'screenAnimation-fadeOut' : ''}`}>
            {/* <div className='entryPage-colorLight'></div> */}
            <div className={`entryPage-colorLight ${colorLightAnimation && 'colorLight-off'}`}></div>
            <div className="entryPage-backgroundLayer">
                <div className="entryPage-innerElements">
                    <Header screenFormat={screenFormat} currentScreen={currentScreen}/>
                    <div className="entryPage-centerSection">
                        <div 
                            className='entryPage-buttonSection' 
                            // onMouseEnter={handleButtonHovering} 
                            // onMouseLeave={handleButtonLeaving}
                            onClick={pageSelection}
                        >
                            <ButtonType1 buttonText='Enter Kosmo_' interactionType="entryButton"/>
                        </div>
                    </div>
                    <div className="entryPage-description">
                        <p className="entryPage-description-texts">Get into the Field.</p>
                        <div className="verticalSpace"></div>
                        <p className="entryPage-description-texts">Kosmo aims to be a quality-focused social network, providing a comfortable and enriching space.</p>
                        <p className="entryPage-description-texts">A space where your time would feel well-spent.</p>
                        <div className="verticalSpace"></div>
                        <p className="entryPage-description-texts">By putting humans first in my reflections, I designed the features to encourage online civility and reduce influence and hatred.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntryPage