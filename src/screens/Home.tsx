import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Feed from '../components/Feed'
import TopMenu from '../components/TopMenu'
import AddPostButton from '../components/buttons/AddPostButton'
import { ScreenProps } from '../interfaces/interfaces'
import RightPanel from '../components/rightPanel/RightPanel'
import Profile from '../components/innerSections/Profile'

const Home: React.FC<ScreenProps> = ({ animation, setAnimation, screenFormat }) => {

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
    const [currentInnerScreen, setCurrentInnerScreen] = useState({selectedFeed})

    return (
        <div className={`home ${screenFormat ? 'screenAnimation-fadeIn' : ''}`}>
            <Header 
                headerScreen='home' 
                screenFormat={screenFormat}
                selectedFeed={selectedFeed}     
            />
            {/* <div className="fillTheGap" style={{height: topmenuIsSticky ? '3.9rem' : '0rem'}}></div> */}
            {topmenuIsSticky && <div className="fillTheGap"></div>}
            <TopMenu 
                setTopmenuIsSticky={setTopmenuIsSticky} 
                topmenuIsSticky={topmenuIsSticky} 
                screenFormat={screenFormat} 
                selectedFeed={selectedFeed}
                setSelectedFeed={setSelectedFeed}
            />
            <div className="innerHome">
                {selectedFeed.includes('feed') && <Feed screenFormat={screenFormat}/>}
                {screenFormat === 'desktop' && selectedFeed.includes('feed') && <RightPanel/>}
                {selectedFeed === 'profile' && <Profile/>}
            </div>
            <AddPostButton />
        </div>
    )
}

export default Home