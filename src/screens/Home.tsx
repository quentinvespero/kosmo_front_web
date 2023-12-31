import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Feed from '../components/Feed'
import TopMenu from '../components/TopMenu'
import AddPostButton from '../components/buttons/AddPostButton'
import { ScreenProps } from '../interfaces/interfaces'
import RightPanel from '../components/rightPanel/RightPanel'

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

    return (
        <div className={`home ${screenFormat ? 'screenAnimation-fadeIn' : ''}`}>
            <Header headerScreen='home' screenFormat={screenFormat}/>
            <div className="fillTheGap" style={{height: topmenuIsSticky ? '3.9rem' : '0rem'}}></div>
            <TopMenu 
                setTopmenuIsSticky={setTopmenuIsSticky} 
                topmenuIsSticky={topmenuIsSticky} 
                screenFormat={screenFormat} 
                selectedFeed={selectedFeed}
                setSelectedFeed={setSelectedFeed}
            />
            <div className="innerHome">
                <Feed screenFormat={screenFormat}/>
                {screenFormat === 'desktop' && <RightPanel/>}
            </div>
            <AddPostButton />
        </div>
    )
}

export default Home