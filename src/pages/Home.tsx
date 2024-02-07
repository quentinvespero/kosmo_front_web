import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import TopMenu from '../components/topMenu/TopMenu'
import AddPostButton from '../components/buttons/AddPostButton'
import { ScreenProps } from '../interfaces/interfaces'
import InnerSection from '../components/innerSections/InnerSection'
import { HomeProps } from '../interfaces/pagesInterfaces'

const Home: React.FC< HomeProps & ScreenProps> = ({ animation, setAnimation, screenFormat, currentPage }) => {

    // defining if top menu is sticky or not
    const [topmenuIsSticky, setTopmenuIsSticky] = useState(false)

    // managing feeds selection
    const [selectedFeed, setSelectedFeed] = useState('feed1')

    // managing inner sections
    // 14/01/24 : not really used at the moment. will think about using it to keep track of the innerSection, same as for currentPage for a lower level
    const [currentInnerSection, setCurrentInnerSection] = useState({})

    // animation when entering this screen
    useEffect(() => {
        if (animation && setAnimation) {
            setTimeout(() => {
                setAnimation(false)
            }, 500)
        }
    })

    return (
        <div 
            className={`home ${screenFormat ? 'pageAnimationFadeIn' : ''}`}
            style={{
                rowGap: screenFormat === 'mobile' ? '2rem' : '4rem'
            }}
        >
            <Header 
                screenFormat={screenFormat}
                selectedFeed={selectedFeed}
                currentPage={currentPage}
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