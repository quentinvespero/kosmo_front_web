import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import TopMenu from '../components/topMenu/TopMenu'
import AddPostButton from '../components/buttons/AddPostButton'
import { ScreenProps } from '../interfaces/interfaces'
import InnerSection from '../components/innerSections/InnerSection'
// import { HomeProps } from '../interfaces/pagesInterfaces'
import { ViewTypeSelectorProps } from '../interfaces/logicComponents'
import BackgroundLayer from './BackgroundLayer'
import { InnerSectionProps } from '../interfaces/innerSectionsInterfaces'
import { delayBooleanResponse } from '../functions/delayedToggle'
import { AppProps } from '../App'
import { PagesProps } from '../interfaces/pagesInterfaces'

// export interface HomeProps {
//     currentPage: AppProps['currentPage']
//     setCurrentPage: AppProps['setCurrentPage']
// }

const Home: React.FC<PagesProps> = ({ screenFormat, currentPage, transitionBetweenPagesTriggered }) => {

    // defining if top menu is sticky or not
    const [topmenuIsSticky, setTopmenuIsSticky] = useState(false)

    // managing feeds selection
    const [selectedFeed, setSelectedFeed] = useState('feed1')

    // managing inner sections
    // 14/01/24 : not really used at the moment. will think about using it to keep track of the innerSection, same as for currentPage for a lower level
    const [currentInnerSection, setCurrentInnerSection] = useState<InnerSectionProps['currentInnerSection']>('feed')

    // following state of the view selected in feed
    const [selectedViewType, setSelectedViewType] = useState<ViewTypeSelectorProps['selectedViewType']>('regularView')

    // delay when transitionning to an other page
    // const delayHomeTransition = delayBooleanResponse(currentPage !== 'home',900)

    // searching for a way to reset the view to regularView when switching to mobile screen
    useEffect(() => {
        if (screenFormat === 'mobile') {
            setSelectedViewType('regularView')
        }
    }, [screenFormat])

    // animation when entering this screen
    // useEffect(() => {
    //     if (animation && setAnimation) {
    //         setTimeout(() => {
    //             setAnimation(false)
    //         }, 500)
    //     }
    // })

    // the classes that will be applied to the component
    const classesToApply = () : string => {
        let classes = 'home'

        // if we are on the page Home, and the transition to an other page is triggered, then the class to make it disapear via a fadeout, while be applied.
        // Otherwise, the usual pageTransition is apllied and add a fadeIn animation when the page component is loaded
        if (currentPage === 'home' && transitionBetweenPagesTriggered) classes += ' pageTransitionDisappearing'
        else classes += ' pageTransition'

        if (screenFormat === 'mobile') classes += ' home-mobileScreen'
        if (currentInnerSection === 'profile') classes += ' home-innerSection-profile'
        
        switch (selectedViewType) {
            case 'columnsView':
                classes += ' home-columnsView'
                break
            case 'detailsView':
                classes += ' home-detailsView'
                break
            case 'regularView':
                classes += ' home-regularView'
                break
        }

        return classes
    }

    return (
        <div className={classesToApply()}>
            {/* <BackgroundLayer isVisible={false} /> */}

            <Header 
                screenFormat={screenFormat}
                // selectedFeed={selectedFeed}
                currentPage={currentPage}
                currentInnerSection={currentInnerSection}
            />

            {/* {topmenuIsSticky && <div className="fillTheGap"></div>} */}
            
            <TopMenu 
                setTopmenuIsSticky={setTopmenuIsSticky} 
                topmenuIsSticky={topmenuIsSticky} 
                screenFormat={screenFormat} 
                selectedFeed={selectedFeed}
                setSelectedFeed={setSelectedFeed}
                selectedViewType={selectedViewType}
                setCurrentInnerSection={setCurrentInnerSection}
                currentInnerSection={currentInnerSection}
            />
            
            <InnerSection 
                screenFormat={screenFormat} 
                selectedFeed={selectedFeed}
                selectedViewType={selectedViewType}
                setSelectedViewType={setSelectedViewType}
                currentInnerSection={currentInnerSection}
                setCurrentInnerSection={setCurrentInnerSection}
            />
            
            {screenFormat ==='mobile' && <AddPostButton />}
        </div>
    )
}

export default Home