import React from 'react'
import { FeedSelectorProps, ScreenProps } from '../interfaces/interfaces'

const FeedSelector:React.FC<FeedSelectorProps & ScreenProps> = ({ screenFormat, isSticky }) => {
    return (
        // <div className='feedSelector' style={{ flexWrap: screenFormat==='mobile' && isSticky ? 'unset' : 'wrap'}}>
        <div className='feedSelector' style={{ 
            flexWrap: screenFormat==='mobile' && isSticky ? 'unset' : 'wrap',
            gap: isSticky ? '.2rem' : '.7rem'
        }}>
            <div className="feedElements feedElements-profile">{screenFormat != 'mobile' && 'Profile'}</div>
            <div className="feedElements feedElements-1 feedElements-selected">Feed 1</div>
            <div className="feedElements feedElements-2">Feed 2</div>
            <div className="feedElements feedElements-3">Feed 3</div>
        </div>
    )
}

export default FeedSelector