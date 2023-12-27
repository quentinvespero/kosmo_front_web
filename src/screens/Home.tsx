import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Feed from '../components/Feed'
import TopMenu from '../components/TopMenu'
import AddPostButton from '../components/buttons/AddPostButton'
import SearchField from '../components/header/SearchField'
import { ScreenProps } from '../interfaces/interfaces'
import RightPanel from '../components/rightPanel/RightPanel'

const Home: React.FC<ScreenProps> = ({ mobileLayout, animation, setAnimation, screenFormat }) => {

    // defining if top menu is sticky or not
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        if (animation && setAnimation) {
            setTimeout(() => {
                setAnimation(false)
            }, 500)
        }
    })

    return (
        // <div className='home'>
        <div className={`home ${screenFormat ? 'screenAnimation-fadeIn' : ''}`}>
            <Header headerScreen='home' mobileLayout={screenFormat}/>
            {isSticky && <div className="fillTheGap"></div>}
            <TopMenu setIsSticky={setIsSticky} isSticky={isSticky} mobileLayout={screenFormat} />
            {/* {mobileLayout && <SearchField/>} */}
            <div className="innerHome">
                <Feed />
                {screenFormat === 'desktop' && <RightPanel/>}
            </div>
            <AddPostButton />
        </div>
    )
}

export default Home