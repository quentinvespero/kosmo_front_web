import React, { useEffect, useState } from 'react'
import { ScreenProps } from '../../interfaces/interfaces'
// import { HandleClickHeaderMenuButtonsInterface, ProfileButtonProps } from '../../interfaces/buttonsInterfaces'
import { DatasInterfaces } from '../../interfaces/datasInterfaces'
import ProfilePhoto from '../imageComponents/ProfilePhoto'
import { ProfileButtonProps } from '../../interfaces/buttonsInterfaces'
import { HandleClickHeaderMenuButtonsInterface } from '../../interfaces/headerMenuInterfaces'

const ProfileButton:React.FC<ScreenProps & ProfileButtonProps & HandleClickHeaderMenuButtonsInterface> = ({screenFormat, locationContext, selectedFeed, setSelectedFeed, handleClick}) => {

    // storing the path of the image
    const [userData, setUserData] = useState<DatasInterfaces | null>(null)

    // fetching the datas from the json file
    useEffect(() => {
        fetch('src/assets/bdd.json')
            .then(response => response.json())
            .then(datas => setUserData(datas))
            .catch(error => console.error('Error:', error))
    }, [])

    // in the context of profileButton being in the feedSelector, can be used to change the value of selectedFeed
    // const handleFeedChoice = (feedId: string) => {
    //     if (setSelectedFeed) {
    //         setSelectedFeed(feedId)
    //     }
    // }

    // function that will be used to display a menu under it in the headerMenu, that will display some quick parameters/others. Such as toggling night/light mode, and all..
    // const showingPanelMenu = () => {

    // }

    return (
        <div 
            className={`profileButton
                ${locationContext === 'feedSelector' && `feedElements profileButton-feedSelector feedElements-profile ${selectedFeed === 'profile' ? 'feedElements-profile-selected' : ''}`}
                ${locationContext === 'headerMenu' && 'profileButton-headerMenu'}
                ${locationContext === 'post' && 'profileButton-post'}
            `}
            // onClick={() => (locationContext ==='feedSelector' ? handleFeedChoice('profile') : showingPanelMenu() )}
            onClick={
                // () => handleClick && locationContext === 'headerMenu' && handleClick('user')
                () => handleClick && locationContext === 'headerMenu' ? handleClick('user') : handleClick('user')
            }
        >
            {locationContext !== 'feedSelector' &&
            <ProfilePhoto 
                imagePath={userData && userData.users && userData.users[0].userAdditionalInformations.profilePicture || ''}
            />
            }
            
            {locationContext === 'headerMenu' 
                ?
                    userData &&
                    userData.users &&
                    screenFormat != 'mobile' && 
                    userData.users[0].userBaseInformations.username
                :
                    locationContext === 'post' && 'userTest'
            }
        </div>
    )
}

export default ProfileButton