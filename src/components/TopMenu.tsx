import React, { useEffect, useRef } from 'react'
import SearchField from './header/SearchField'
import FeedSelector from './FeedSelector'
import { ScreenProps, TopMenuProps } from '../interfaces/interfaces'

const TopMenu:React.FC<TopMenuProps & ScreenProps> = ({setIsSticky, isSticky, screenFormat}) => {
    
    // the reference used to define whether the TopMenu have to be sticky or not
    const ref = useRef<HTMLDivElement>(null)

    // console.log(ref)

    // the function used to handle the scroll, and then use its value as part of the function to define if the TopMenu is sticky or not
    const handleScroll = () => {
        if (ref.current) {
            if (window.scrollY === 0) {
                setIsSticky(false)
            }
            else {
                // setIsSticky(ref.current.getBoundingClientRect().top <= 64)
                setIsSticky(window.scrollY >= 110)
            }
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
        <div className='topMenu' ref={ref} style={{ 
            position: isSticky ? 'fixed' : 'relative', 
            top: isSticky ? '.5rem' : '-1rem', 
            margin: screenFormat==='mobile' && isSticky ? '0rem .5rem' : '',
            // fontSize: isSticky ? '.95rem' : '1rem'
            // gap: isSticky ? '1rem' : '3rem',
            animation: isSticky ? 'bounce .3s ease-in-out' : 'unset'
        }}>
            {screenFormat !=='mobile' && <SearchField/>}
            <FeedSelector screenFormat={screenFormat} isSticky={isSticky}/>
        </div>
    )

}

export default TopMenu