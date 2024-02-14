import React from 'react'
import { BackgroundLayerProps } from '../interfaces/pagesInterfaces'

const BackgroundLayer:React.FC<BackgroundLayerProps> = ({isVisible}) => {
    return (
        <div className={`backgroundLayer ${isVisible && 'backgroundLayer-visible'}`}>
            
        </div>
    )
}

export default BackgroundLayer