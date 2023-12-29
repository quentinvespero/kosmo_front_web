import React, { useEffect, useRef } from 'react'
import SearchField from './header/SearchField'
import FeedSelector from './FeedSelector'
import { ScreenProps, TopMenuProps } from '../interfaces/interfaces'

const TopMenu:React.FC<TopMenuProps & ScreenProps> = ({setTopmenuIsSticky, topmenuIsSticky, screenFormat}) => {

    // the function used to handle the scroll, and then use its value as part of the function to define if the TopMenu is sticky or not
    const handleScroll = () => {
            if (window.scrollY === 0) {
                setTopmenuIsSticky(false)
            }
            else {
                setTopmenuIsSticky(window.scrollY >= 115)
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
            className='topMenu' 
            style={{ 
                position: topmenuIsSticky ? 'fixed' : 'relative', 
                top: topmenuIsSticky ? '.5rem' : '-1rem', 
                margin: screenFormat==='mobile' && topmenuIsSticky ? '0rem .5rem' : '',
                animation: topmenuIsSticky ? 'bounce .4s ease-in-out' : 'unset',
                boxShadow: topmenuIsSticky ? '0rem 0rem 3rem #2C2C2C' : ''
            }}
        >
            {screenFormat !=='mobile' && <SearchField/>}
            <FeedSelector screenFormat={screenFormat} topmenuIsSticky={topmenuIsSticky}/>
        </div>
    )

}

export default TopMenu