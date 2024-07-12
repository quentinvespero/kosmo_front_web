import React, { useEffect, useState } from "react"
import ButtonType1 from "../components/buttons/ButtonType1"
import Header from "../components/header/Header"
import { ScreenProps } from "../interfaces/interfaces"
import LoginAndRegister from "../components/loginAndRegister/LoginAndRegister"
import { delayBooleanResponse } from "../functions/delayedToggle"
import { AppProps } from "../App"
import { PagesProps } from "../interfaces/pagesInterfaces"

export interface EntryPageProps {
    screenFormat?: ScreenProps['screenFormat']
    // lightFadingDesktop?: boolean
    currentPage: AppProps['currentPage']
    setCurrentPage: AppProps['setCurrentPage']
}

const EntryPage: React.FC<EntryPageProps & ScreenProps & PagesProps> = ({ animation, screenFormat, currentPage, setCurrentPage, transitionBetweenPagesTriggered }) => {

    // variable to follow the state of the background light (on / off)
    const [backgroundLightState, setBackgroundLightState] = useState(false)

    // variable to follow the state of the page (if it's currently transitionning to an other page or not)
    const [entryPageAnimation, setEntryPageAnimation] = useState(false)

    const [hasClickedOnEnter, setHasClickedOnEnter] = useState(false)

    const [showingLoginAndRegister, setShowingLoginAndRegister] = useState(false)

    // const delayPageTransition = delayBooleanResponse(currentPage == 'entry', 900)

    useEffect(() => {
        if (transitionBetweenPagesTriggered) {
            setBackgroundLightState(false)
            setTimeout(() => setEntryPageAnimation(true), 700)
        }
        else {
            setEntryPageAnimation(false)
            setTimeout(() => setBackgroundLightState(true), 500)
        }
    }, [transitionBetweenPagesTriggered])

    // show the login and register panels
    const handleClick = () => {
        setShowingLoginAndRegister(true)
        setTimeout(() => {
            setHasClickedOnEnter(true)
        }, 250)
    }

    return (
        <div className={`entryPage ${entryPageAnimation ? 'transitionDisappearing' : 'pageTransitionAppearing'}`}>
            <div className={`entryPage-colorLight ${backgroundLightState ? 'colorLight-on' : 'colorLight-off'}`}></div>
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