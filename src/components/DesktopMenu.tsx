import React, { useEffect, useRef, useState } from 'react'
import SearchField from './header/SearchField'
import FeedSelector from './FeedSelector'

const DesktopMenu = () => {

    // defining if desktop menu is sticky or not
    const [isSticky, setIsSticky] = useState(false)
    
    // the reference used to define whether the desktopMenu have to be sticky or not
    const ref = useRef<HTMLDivElement>(null)

    console.log(ref)

    // the function used to handle the scroll, and then use its value as part of the function to define if the desktopMenu is sticky or not
    const handleScroll = () => {
        if (ref.current) {
            if (window.scrollY === 0) {
                setIsSticky(false)
            }
            else {
                setIsSticky(ref.current.getBoundingClientRect().top <= 8)
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
        <div className='desktopMenu' ref={ref} style={{ position: isSticky ? 'fixed' : 'relative' }}>
            <SearchField/>
            <FeedSelector/>
        </div>
    )

}

export default DesktopMenu