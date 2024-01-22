import React, { useEffect, useState } from 'react'
import { ScreenProps } from '../../interfaces/interfaces'
import { ProfileButtonProps } from '../../interfaces/buttonsInterfaces'
import { DatasInterfaces } from '../../interfaces/datasInterfaces'
import ProfilePhoto from '../imageComponents/ProfilePhoto'

const ProfileButton:React.FC<ScreenProps & ProfileButtonProps> = ({screenFormat, locationContext, selectedFeed, setSelectedFeed}) => {

    // storing the path of the image
    const [imageData, setImageData] = useState<DatasInterfaces | null>(null)

    // fetching the datas from the json file
    useEffect(() => {
        fetch('src/assets/bdd.json')
            .then(response => response.json())
            .then(datas => setImageData(datas))
            .catch(error => console.error('Error:', error))
    }, [])

    // in the context of profileButton being in the feedSelector, can be used to change the value of selectedFeed
    const handleFeedChoice = (feedId: string) => {
        if (setSelectedFeed) {
            setSelectedFeed(feedId)
        }
    }

    // function that will be used to display a menu under it in the headerMenu, that will display some quick parameters/others. Such as toggling night/light mode, and all..
    const showingPanelMenu = () => {

    }

    return (
        <div 
            className={`profileButton
                ${locationContext === 'feedSelector' && `feedElements feedElements-profile ${selectedFeed === 'profile' ? 'feedElements-profile-selected' : ''}`}
                ${locationContext === 'headerMenu' && 'profileButton'}
            `}
            onClick={() => (locationContext ==='feedSelector' ? handleFeedChoice('profile') : showingPanelMenu() )}
        >
            {imageData && 
            locationContext === 'headerMenu' && 
            <ProfilePhoto 
                imagePath={imageData.users && imageData.users[0].userAdditionalInformations.profilePicture || ''}
            />
            }
            {screenFormat != 'mobile' && 'Profile'}
        </div>
    )
}

export default ProfileButton