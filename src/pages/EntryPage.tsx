import React, { useEffect, useState } from "react"
import ButtonType1 from "../components/buttons/ButtonType1"
import Header from "../components/header/Header"
import { ScreenProps } from "../interfaces/interfaces"
import LoginAndRegister from "../components/loginAndRegister/LoginAndRegister"
import { AppProps } from "../App"
import { PagesProps } from "../interfaces/pagesInterfaces"

export interface EntryPageProps {
    screenFormat?: ScreenProps['screenFormat']
    currentPage: AppProps['currentPage']
    setCurrentPage: AppProps['setCurrentPage']
}

const EntryPage: React.FC<EntryPageProps & ScreenProps & PagesProps> = ({ animation, screenFormat, currentPage, setCurrentPage, transitionBetweenPagesTriggered }) => {

    // variable to follow the state of the background light (on / off)
    const [backgroundLightState, setBackgroundLightState] = useState(false)

    // variable to follow the state of the page (if it's currently transitionning to an other page or not)
    const [entryPageAnimationTriggered, setEntryPageAnimationTriggered] = useState<null | boolean>(null)

    // state for keeping track of whether the user has clicked on the "enter Kosmo" button or not.
    const [hasClickedOnEnterKosmo, setHasClickedOnEnterKosmo] = useState(false)

    // state to keep track of whether the component LoginAndRegister has to be displayed or not depending on the state of hasClickedOnEnterKosmo
    const [showingLoginAndRegister, setShowingLoginAndRegister] = useState(false)

    // animations that shows up depending on whether the transition between pages has been triggered with a change on currentPage state
    useEffect(() => {
        if (transitionBetweenPagesTriggered) {
            setBackgroundLightState(false)
            setTimeout(() => setEntryPageAnimationTriggered(true), 500)
        }
        else {
            setEntryPageAnimationTriggered(false)
            setTimeout(() => setBackgroundLightState(true), 1100)
        }
    }, [transitionBetweenPagesTriggered])

    // show the login and register panels
    const handleClick = () => {
        setShowingLoginAndRegister(true)
        setTimeout(() => setHasClickedOnEnterKosmo(true), 250)
    }

    return (
        // <div className={`entryPage ${entryPageAnimationTriggered ? 'pageTransitionDisappearing' : 'pageTransitionAppearing'}`}>
        <div className={`entryPage ${entryPageAnimationTriggered !== null ? entryPageAnimationTriggered === true ? 'pageTransitionDisappearing' : 'pageTransitionAppearing' : ''}`}>
            
            <div className={`entryPage-colorLight ${backgroundLightState ? 'colorLight-on' : 'colorLight-off'}`}></div>
            
            <div className="entryPage-backgroundLayer">
                <div className="entryPage-innerElements">
                    
                    <Header screenFormat={screenFormat} currentPage={currentPage}/>
                    
                    <div className="entryPage-centerSection">
                        
                        {!hasClickedOnEnterKosmo && <div 
                            className={`entryPage-buttonSection ${showingLoginAndRegister ? 'entryPage-buttonSection-hidding' : ''}`}
                            onClick={handleClick}
                        >
                            <ButtonType1 buttonText='Enter Kosmo_' interactionType="entryButton"/>
                        </div>}
                        
                        {hasClickedOnEnterKosmo && <LoginAndRegister setCurrentPage={setCurrentPage} screenFormat={screenFormat}/>}
                    
                    </div>
                    
                    {!hasClickedOnEnterKosmo && 
                    
                        <div className={`entryPage-description ${showingLoginAndRegister ? 'entryPage-description-hidding' : ''}`}>
                            <p className="entryPage-description-texts">Get into the Field.</p>
                            <div className="verticalSpace"></div>
                            <p className="entryPage-description-texts entryPage-description-text-personalized-1">Kosmo aims to be a quality-focused social network, providing a comfortable and enriching space.</p>
                            <p className="entryPage-description-texts entryPage-description-text-personalized-2">A space where your time would feel well-spent.</p>
                            <div className="verticalSpace"></div>
                            <p className="entryPage-description-texts">By putting humans first in my reflections, I designed the features to encourage online civility and reduce influence and hatred.</p>
                        </div>

                    }

                </div>
            </div>
        </div>
    )
}

export default EntryPage