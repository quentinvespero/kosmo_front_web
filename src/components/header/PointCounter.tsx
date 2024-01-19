import React from 'react'
import { ScreenProps } from '../../interfaces/interfaces'
import { PointCounterProps } from '../../interfaces/headerInterfaces'

const PointCounter:React.FC<PointCounterProps & ScreenProps> = ({screenFormat, isSearchFieldSelectedOnMobile}) => {
    return (
        <div 
            className='pointCounter'
            style={{
                alignSelf: screenFormat === 'mobile' ? 'center' : 'start',
                display: screenFormat === 'mobile' && isSearchFieldSelectedOnMobile ? 'none' : 'flex',
                animation: screenFormat === 'mobile' && isSearchFieldSelectedOnMobile ? 'slideFromRight2 .7s ease-in-out;' : ''
            }}    
        >
            <p><strong>10</strong> pts</p>
        </div>
    )
}

export default PointCounter