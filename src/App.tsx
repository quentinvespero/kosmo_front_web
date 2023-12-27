import React, { useEffect, useState } from 'react'
import Home from './screens/Home'
import EntryPage from './screens/EntryPage'

const App = () => {
    // state to determine which component to show
    const [currentPage, setCurrentPage] = useState('entry')

    // defining if we are in mobile or desktop mode
    // const [mobileLayout, setMobileLayout] = useState(false)
    const [mobileLayout, setMobileLayout] = useState('')
    const [screenFormat, setScreenFormat] = useState('')

    // defining animation between different screens
    const [animation, setAnimation] = useState(false)
    
    // function to handle the change of the current screen component to render
    const handlePageChange = () => {
        setAnimation(true)
        setTimeout(() => {
            setCurrentPage('home')
        }, 500)
    }

    // function to set the value of mobileLayout based on the width of the window. 
    //(if the screen is smaller than 700px, then the mobile layout will be true)
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

    return (
        <div className='app'>
            {currentPage === 'entry' &&
                <EntryPage pageSelection={handlePageChange} animation={animation}/>
            }
            {currentPage === 'home' && 
                <Home screenFormat={screenFormat} animation={animation} setAnimation={setAnimation}/>
            }
        </div>
    )
}

export default App