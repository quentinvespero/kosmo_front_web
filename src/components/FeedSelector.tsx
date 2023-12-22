import React from 'react'
import { FeedSelectorProps } from '../interfaces/interfaces'

const FeedSelector:React.FC<FeedSelectorProps> = ({ mobileLayout, isSticky }) => {
    return (
        // <div className='feedSelector' style={{ flexWrap: mobileLayout==='mobile' && isSticky ? 'unset' : 'wrap'}}>
        <div className='feedSelector' style={{ 
            flexWrap: mobileLayout==='mobile' && isSticky ? 'unset' : 'wrap',
            gap: mobileLayout==='mobile' && isSticky ? '0rem' : '.5rem'
        }}>
            <div className="feedElements feedElements-profile">{mobileLayout != 'mobile' && 'Profile'}</div>
            <div className="feedElements feedElements-1 feedElements-selected">Feed 1</div>
            <div className="feedElements feedElements-2">Feed 2</div>
            <div className="feedElements feedElements-3">Feed 3</div>
        </div>
    )
}

export default FeedSelector