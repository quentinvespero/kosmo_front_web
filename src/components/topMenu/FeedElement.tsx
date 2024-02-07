import React from 'react'
import { FeedElementProps } from '../../interfaces/topMenuInterfaces'

const FeedElement:React.FC<FeedElementProps> = ({handleClick, selectedFeed}) => {
    return (
        <div className={`feedElement ${selectedFeed && 'test'}`}>
            
        </div>
    )
}

export default FeedElement