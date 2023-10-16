import React from 'react'
import Header from '../components/header/Header'
import Feed from '../components/Feed'
import DesktopMenu from '../components/DesktopMenu'

const Home = () => {
    return (
        <div className='home'>
            <Header/>
            <DesktopMenu/>
            <Feed/>
        </div>
    )
}

export default Home