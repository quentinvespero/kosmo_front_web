import React from 'react'
import { ScreenProps } from '../../interfaces/interfaces'
import { ProfileButtonProps } from '../../interfaces/buttonsInterfaces'

const ProfileButton:React.FC<ScreenProps & ProfileButtonProps> = ({screenFormat, locationContext}) => {
    return (
        <div 
            className={`profileButton`}
        >
            
        </div>
    )
}

export default ProfileButton