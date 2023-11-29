import React, { useEffect, useRef } from 'react'
import SearchField from './header/SearchField'
import FeedSelector from './FeedSelector'
import { TopMenuProps } from '../interfaces/interfaces'

const TopMenu:React.FC<TopMenuProps> = ({setIsSticky, isSticky, mobileLayout}) => {
    
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
                setIsSticky(window.scrollY >= 120)
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
        <div className='topMenu' ref={ref} style={{ position: isSticky ? 'fixed' : 'relative', top: isSticky ? '.5rem' : '-1rem' }}>
            {!mobileLayout && <SearchField/>}
            <FeedSelector/>
        </div>
    )

}

export default TopMenu