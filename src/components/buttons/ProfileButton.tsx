import React from 'react'
import { ScreenProps } from '../../interfaces/interfaces'
import { ProfileButtonProps } from '../../interfaces/buttonsInterfaces'

const ProfileButton:React.FC<ScreenProps & ProfileButtonProps> = ({screenFormat, locationContext, selectedFeed, setSelectedFeed}) => {

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
            {screenFormat != 'mobile' && 'Profile'}
        </div>
    )
}

export default ProfileButton