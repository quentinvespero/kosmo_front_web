import React, { useEffect } from 'react'
import SearchField from '../header/SearchField'
import FeedSelector from './FeedSelector'
import { ScreenProps, TopMenuProps } from '../../interfaces/interfaces'

const TopMenu:React.FC<TopMenuProps & ScreenProps> = ({setTopmenuIsSticky, topmenuIsSticky, screenFormat, selectedFeed, setSelectedFeed}) => {

    // the function used to handle the scroll, and then use its value as part of the function to define if the TopMenu is sticky or not
    const handleScroll = () => {
        if (window.scrollY === 0) {
            setTopmenuIsSticky(false)
        }
        else {
            setTopmenuIsSticky(window.scrollY >= 185)
        }
    }

    // get the value of the scroll
    useEffect(() =>{
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            className={`topMenu ${topmenuIsSticky ? 'topMenu-sticky' : ''}`} 
            style={{
                margin: screenFormat==='mobile' && topmenuIsSticky ? '0rem .5rem' : '',
                maxWidth: topmenuIsSticky && screenFormat === 'mobile' ? '90%' : '',
                borderRadius: screenFormat ==='mobile' ? '1rem' : '4rem',
                padding: screenFormat ==='mobile' ? '.7rem' : '.25rem'
            }}
        >
            {screenFormat !=='mobile' && <SearchField/>}
            <FeedSelector 
                screenFormat={screenFormat} 
                topmenuIsSticky={topmenuIsSticky} 
                selectedFeed={selectedFeed} 
                setSelectedFeed={setSelectedFeed}
            />
        </div>
    )

}

export default TopMenu