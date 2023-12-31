import React from 'react'
import { FollowButtonProps } from '../../interfaces/buttonsInterfaces'

const FollowButton: React.FC<FollowButtonProps> = ({buttonText}) => {
    return (
        <div className='followButton'>
            <p>{buttonText}</p>
            <p className='followButton-counter'>2M</p>
        </div>
    )
}

export default FollowButton