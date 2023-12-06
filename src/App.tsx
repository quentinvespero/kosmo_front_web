import React, { useEffect, useState } from 'react'
import Home from './screens/Home'
import EntryPage from './screens/EntryPage'

const App = () => {
    // state to determine which component to show
    const [currentPage, setCurrentPage] = useState('entry')

    // defining if we are in mobile or desktop mode
    const [mobileLayout, setMobileLayout] = useState(false)
    
    // function to handle the change of the current page to render
    const handlePageChange = () => {
        setCurrentPage('home')
    }

    // function to set the value of mobileLayout based on the width of the window. 
    //(if the screen is smaller than 700px, then the mobile layout will be true)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 700) {
                setMobileLayout(true)
            }
            else {
                setMobileLayout(false)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className='app'>
            {currentPage === 'entry' ? (
                // Pass the handlePageChange function as a prop to EntryPage
                <EntryPage pageSelection={handlePageChange}/>
            ) : (
                // Render Home component when currentPage is 'home'
                <Home mobileLayout={mobileLayout}/>
            )}
        </div>
    )
}

export default App