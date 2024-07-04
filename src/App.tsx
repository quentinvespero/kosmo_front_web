import React, { Suspense, useEffect, useState } from 'react'
import Home from './pages/Home'
import EntryPage from './pages/EntryPage'
import BackgroundLayer from './pages/BackgroundLayer'

const App = () => {
    // state to follow the current page displayed
    const [currentPage, setCurrentPage] = useState('home')

    // defining the screen format
    const [screenFormat, setScreenFormat] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

    // defining animation when switching to a different screens of the app
    const [animation, setAnimation] = useState(false)

    // variable to follow if the device is in dark or light mode
    const [isDeviceInDarkMode, setIsDeviceInDarkMode] = useState(true)

    // variable to follow the state of BackgroundLayer
    const [isBackgroundLayerVIsible, setIsBackgroundLayerVIsible] = useState(false)
    
    // function to handle the change of the current page component to render
    const handlePageChange = () => {
        setAnimation(true)
        setTimeout(() => {
            setCurrentPage('home')
        }, 650)
    }

    // function to set the value of screenFormat based on the width of the window
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 700) {
                setScreenFormat('mobile')
            }
            else if (window.innerWidth < 1100) {
                setScreenFormat('tablet')
            }
            else {
                setScreenFormat('desktop')
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // function to "track" if the device is in dark mode or not, and change the value of isDeviceInDarkMode accordingly
    // ---- 29/12/23 ---- for now, this function and the related variables aren't used yet
    // In a second time, it will be used  in childs components
    useEffect(() => {
        const match = window.matchMedia('(prefers-color-scheme: dark)')
        
        setIsDeviceInDarkMode(match.matches)

        // Adding an event listener to update state if preference changes
        const handler = (event:MediaQueryListEvent) => setIsDeviceInDarkMode(event.matches)
        match.addEventListener('change', handler)

        // Cleanup function to remove the event listener
        return () => match.removeEventListener('change', handler)
    }, [])

    return (
        <div className='app'>
            {/* <p>{import.meta.env.VITE_APP_TITLE}</p> */}
            <Suspense fallback={<h1>loading</h1>}>
                <BackgroundLayer isVisible={isBackgroundLayerVIsible}/>
                {currentPage === 'entry' &&
                    <EntryPage pageSelection={handlePageChange} animation={animation} screenFormat={screenFormat} currentPage={currentPage}/>
                }
                {currentPage === 'home' && 
                    <Home screenFormat={screenFormat} animation={animation} setAnimation={setAnimation} currentPage={currentPage}/>
                }
            </Suspense>
        </div>
    )
}

export default App