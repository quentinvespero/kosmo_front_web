import React, { useEffect, useState } from 'react'
import { ScreenProps } from '../../interfaces/interfaces'
import { PointCounterProps } from '../../interfaces/headerInterfaces'
import { delayHidingElementDisplayProperty } from '../../functions/delayedToggle'

const PointCounter:React.FC<PointCounterProps & ScreenProps> = ({screenFormat, isHidden}) => {

    // const [displayProperty, setDisplayProperty] = useState('flex')

    // useEffect(() => {
    //     if (isHidden) {
    //         setTimeout(() => {
    //             setDisplayProperty('none')
    //         }, 170)
    //     }
    //     else {
    //         setDisplayProperty('flex')
    //     }
    // }, [isHidden])

    const displayProperty = delayHidingElementDisplayProperty(!isHidden, 170)

    return (
        <div 
            className={`pointCounter ${isHidden ? 'pointCounter-hidden' : 'pointCounter-visible'}`}
            style={{
                alignSelf: screenFormat === 'mobile' ? 'center' : '',
                display: displayProperty
                // animation: screenFormat === 'mobile' && isSearchFieldSelectedOnMobile ? 'slideFromRight2 .7s ease-in-out' : ''
                // animation: screenFormat === 'mobile' && isVisible ? 'slideFromRight2 .7s ease-in-out' : ''
            }}    
        >
            <p><strong>10</strong> pts</p>
        </div>
    )
}

export default PointCounter