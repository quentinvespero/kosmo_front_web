import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import TopMenu from '../components/TopMenu'
import AddPostButton from '../components/buttons/AddPostButton'
import { ScreenProps } from '../interfaces/interfaces'
import InnerSection from '../components/innerSections/InnerSection'
import { HomeProps } from '../interfaces/screensInterface'

const Home: React.FC< HomeProps & ScreenProps> = ({ animation, setAnimation, screenFormat, currentScreen }) => {

    // defining if top menu is sticky or not
    const [topmenuIsSticky, setTopmenuIsSticky] = useState(false)

    // animation when entering this screen
    useEffect(() => {
        if (animation && setAnimation) {
            setTimeout(() => {
                setAnimation(false)
            }, 500)
        }
    })

    // managing feeds selection
    const [selectedFeed, setSelectedFeed] = useState('feed1')

    // managing inner screens
    // 31/12/23 : not really used at the moment. will think about using it to switch between the different feed
    // const [currentInnerScreen, setCurrentInnerScreen] = useState({selectedFeed})

    return (
        <div 
            className={`home ${screenFormat ? 'screenAnimation-fadeIn' : ''}`}
            style={{
                rowGap: screenFormat === 'mobile' ? '2rem' : '4rem'
            }}
        >
            <Header 
                screenFormat={screenFormat}
                selectedFeed={selectedFeed}
                currentScreen={currentScreen}
            />
            {topmenuIsSticky && <div className="fillTheGap"></div>}
            <TopMenu 
                setTopmenuIsSticky={setTopmenuIsSticky} 
                topmenuIsSticky={topmenuIsSticky} 
                screenFormat={screenFormat} 
                selectedFeed={selectedFeed}
                setSelectedFeed={setSelectedFeed}
            />
            <InnerSection screenFormat={screenFormat} selectedFeed={selectedFeed}/>
            {screenFormat ==='mobile' && <AddPostButton />}
        </div>
    )
}

export default Home