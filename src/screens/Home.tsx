import React from 'react'
import Header from '../components/header/Header'
import FeedSelector from '../components/FeedSelector'
import Feed from '../components/Feed'

const Home = () => {
    return (
        <div className='homeScreen'>
            <h1>Home</h1>
            <Header/>
            <FeedSelector/>
            <Feed/>
        </div>
    )
}

export default Home