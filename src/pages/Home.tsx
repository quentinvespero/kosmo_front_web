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

export interface HomeProps {
    currentPage: AppProps['currentPage']
    setCurrentPage: AppProps['setCurrentPage']
}

const Home: React.FC<HomeProps & ScreenProps> = ({ animation, setAnimation, screenFormat, currentPage }) => {

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
    useEffect(() => {
        if (animation && setAnimation) {
            setTimeout(() => {
                setAnimation(false)
            }, 500)
        }
    })

    const classesToApply = () : string => {
        let classes = 'home'

        if (currentPage === 'home') classes += ''

        return classes
    }

    return (
        <div 
            className={`home 
                ${screenFormat ? 'pageAnimationFadeIn' : ''}
                ${screenFormat === 'mobile' ? 'home-mobileScreen' : ''}
                
                // rules relative to the feed views
                ${selectedViewType === 'columnsView' ? 'home-columnsView' : ''}
                ${selectedViewType === 'detailsView' ? 'home-detailsView' : ''}
                ${selectedViewType === 'regularView' ? 'home-regularView' : ''}

                // 16/05/24 temporary, while setting up currentInnerSection
                ${selectedFeed === 'profile' ? 'home-innerSection-profile' : ''}
                // 16/05/24 the definite rule that will be used when currentInnerSection will be operational
                ${currentInnerSection ==='profile' ? 'home-innerSection-profile' : ''}
            `}
        >
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