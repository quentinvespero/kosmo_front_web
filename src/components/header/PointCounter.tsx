import React from 'react'
import { ScreenProps } from '../../interfaces/interfaces'

const PointCounter:React.FC<ScreenProps> = ({screenFormat}) => {
    return (
        <div 
            className='pointCounter'
            style={{
                alignSelf: screenFormat === 'mobile' ? 'center' : 'start'
            }}    
        >
            <p><strong>10</strong> pts</p>
        </div>
    )
}

export default PointCounter