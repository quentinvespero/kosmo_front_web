import React, { useEffect, useState } from "react"
import ButtonType1 from "../components/buttons/ButtonType1"
import Header from "../components/header/Header"
// import { EntryPageProps } from "../interfaces/pagesInterfaces"
import { ScreenProps } from "../interfaces/interfaces"
import LoginAndRegister from "../components/loginAndRegister/LoginAndRegister"
import { delayBooleanResponse } from "../functions/delayedToggle"
import { AppProps } from "../App"

export interface EntryPageProps {
    // pageSelection: () => void
    screenFormat?: ScreenProps['screenFormat']
    lightFadingDesktop?: boolean
    currentPage: AppProps['currentPage']
    setCurrentPage: AppProps['setCurrentPage']
}

const EntryPage: React.FC<EntryPageProps & ScreenProps> = ({ animation, screenFormat, currentPage, setCurrentPage }) => {

    // 
    const [colorLightAnimation, setColorLightAnimation] = useState(false)

    const [entryPageAnimation, setEntryPageAnimation] = useState(false)

    const [hasClickedOnEnter, setHasClickedOnEnter] = useState(false)

    const [showingLoginAndRegister, setShowingLoginAndRegister] = useState(false)

    const delayPageTransition = delayBooleanResponse(currentPage == 'entry', 900)

    useEffect(() => {
        if (animation) {
            setColorLightAnimation(true)
            setTimeout(() => {
                setEntryPageAnimation(true)
            }, 600)
            // setEntryPageAnimation(delayBooleanResponse(!animation,600))
        }
        else {
            setEntryPageAnimation(false)
            setTimeout(() => {
                setColorLightAnimation(false)
            }, 600)
        }
    }, [animation])

    // show the login and register panels
    const handleClick = () => {
        setShowingLoginAndRegister(true)
        setTimeout(() => {
            setHasClickedOnEnter(true)
        }, 250)
    }

    return (
        <div className={`entryPage ${entryPageAnimation ? 'pageAnimationFadeOut' : ''}`}>
            <div className={`entryPage-colorLight ${colorLightAnimation && 'colorLight-off'}`}></div>
            <div className="entryPage-backgroundLayer">
                <div className="entryPage-innerElements">
                    
                    <Header screenFormat={screenFormat} currentPage={currentPage} currentInnerSection=""/>
                    
                    <div className="entryPage-centerSection">
                        
                        {!hasClickedOnEnter && <div 
                            className={`entryPage-buttonSection ${showingLoginAndRegister ? 'entryPage-buttonSection-hidding' : ''}`}
                            onClick={handleClick}
                        >
                            <ButtonType1 buttonText='Enter Kosmo_' interactionType="entryButton"/>
                        </div>}
                        
                        {hasClickedOnEnter && <LoginAndRegister setCurrentPage={setCurrentPage} screenFormat={screenFormat}/>}
                    
                    </div>
                    
                    {!hasClickedOnEnter && 
                    
                    <div 
                        className={`entryPage-description ${showingLoginAndRegister ? 'entryPage-description-hidding' : ''}`}
                    >
                        <p className="entryPage-description-texts">Get into the Field.</p>
                        <div className="verticalSpace"></div>
                        <p className="entryPage-description-texts entryPage-description-text-personalized-1">Kosmo aims to be a quality-focused social network, providing a comfortable and enriching space.</p>
                        <p className="entryPage-description-texts entryPage-description-text-personalized-2">A space where your time would feel well-spent.</p>
                        <div className="verticalSpace"></div>
                        <p className="entryPage-description-texts">By putting humans first in my reflections, I designed the features to encourage online civility and reduce influence and hatred.</p>
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default EntryPage