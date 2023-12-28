import React, { useEffect, useRef } from 'react'
import SearchField from './header/SearchField'
import FeedSelector from './FeedSelector'
import { ScreenProps, TopMenuProps } from '../interfaces/interfaces'

const TopMenu:React.FC<TopMenuProps & ScreenProps> = ({setTopmenuIsSticky, topmenuIsSticky, screenFormat}) => {
    
    // the reference used to define whether the TopMenu have to be sticky or not
    // const ref = useRef<HTMLDivElement>(null)

    // console.log(ref)

    // the function used to handle the scroll, and then use its value as part of the function to define if the TopMenu is sticky or not
    const handleScroll = () => {
            if (window.scrollY === 0) {
                setTopmenuIsSticky(false)
            }
            else {
                // setTopmenuIsSticky(ref.current.getBoundingClientRect().top <= 64)
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
            // ref={ref} 
            style={{ 
                position: topmenuIsSticky ? 'fixed' : 'relative', 
                top: topmenuIsSticky ? '.5rem' : '-1rem', 
                margin: screenFormat==='mobile' && topmenuIsSticky ? '0rem .5rem' : '',
                animation: topmenuIsSticky ? 'bounce .4s ease-in-out' : 'unset'
            }}
        >
            {screenFormat !=='mobile' && <SearchField/>}
            <FeedSelector screenFormat={screenFormat} topmenuIsSticky={topmenuIsSticky}/>
        </div>
    )

}

export default TopMenu