import React from 'react'
import { ProfilePhotoProps } from '../../interfaces/imageComponentsInterfaces'

const ProfilePhoto:React.FC<ProfilePhotoProps> = ({imagePath}) => {
    return (
        <div className='profilePhoto'>
            {imagePath 
            ? 
                <img src={imagePath} alt="profile photo" />
            :
                <img src='./assets/icons/profile_icon_grey2.svg' alt='default image'/>
            }
        </div>
    )
}

export default ProfilePhoto