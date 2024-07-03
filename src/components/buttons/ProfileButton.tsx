import React, { useEffect, useState } from 'react'
import { ScreenProps } from '../../interfaces/interfaces'
// import { HandleClickHeaderMenuButtonsInterface, ProfileButtonProps } from '../../interfaces/buttonsInterfaces'
import { DatasInterfaces } from '../../interfaces/datasInterfaces'
import ProfilePhoto from '../imageComponents/ProfilePhoto'
// import { ProfileButtonProps } from '../../interfaces/buttonsInterfaces'
import { HandleClickHeaderMenuButtonsInterface } from '../../interfaces/headerMenuInterfaces'
import { InnerSectionProps } from '../../interfaces/innerSectionsInterfaces'
// import { FeedSelectorProps } from '../../interfaces/topMenuInterfaces'

export interface ProfileButtonProps {
    // selectedFeed?:FeedSelectorProps['selectedFeed']
    // setSelectedFeed?:FeedSelectorProps['setSelectedFeed']
    handleFeedChoice?: () => void
    locationContext: 'feedSelector' | 'headerMenu' | 'post'
    // handleClick?: (selectedElement:HeaderMenuPanelProps['headerMenuPanelSelectedElement']) => void
    handleClick?: HandleClickHeaderMenuButtonsInterface['handleClick']
    setCurrentInnerSection?:InnerSectionProps['setCurrentInnerSection']
    currentInnerSection?:InnerSectionProps['currentInnerSection']
}

const ProfileButton:React.FC<ScreenProps & ProfileButtonProps & HandleClickHeaderMenuButtonsInterface> = ({screenFormat, locationContext, handleClick, setCurrentInnerSection, currentInnerSection}) => {

    // storing the path of the image
    const [userData, setUserData] = useState<DatasInterfaces | null>(null)

    // fetching the datas from the json file
    useEffect(() => {
        fetch('src/assets/bdd.json')
            .then(response => response.json())
            .then(datas => setUserData(datas))
            .catch(error => console.error('Error:', error))
    }, [])

    // function to handle the actions when click on the button
    // - in header menu, it will trigger handleClick which is gonna change the section of the headerMenu, with the 'user' section
    // - in post it will stop the propagation on the element itself
    // - in feedSelector, it will change the innerSection to 'profile'
    const handleClickActions = (e: { stopPropagation: () => any }) => {
        locationContext === 'headerMenu' && handleClick && handleClick('user')
        locationContext === 'post' && e.stopPropagation()
        locationContext === 'feedSelector' && setCurrentInnerSection && setCurrentInnerSection('profile')
    }

    const profileButtonClasses = () => {
        let classNames = 'profileButton'

        if (locationContext === 'feedSelector') {
            classNames += ' profileButton-feedSelector'
            if (currentInnerSection === 'profile') {
                classNames += ' profileButton-feedSelector-selected'
            }
        }
        else if (locationContext === 'headerMenu') {
            classNames += ' profileButton-headerMenu'
        }
        else if (locationContext === 'post') {
            classNames += ' profileButton-post'
        }
        return classNames
    }

    return (
        <div 
            // className={`profileButton
            //     ${locationContext === 'feedSelector' ? 'profileButton-feedSelector' : ''}
            //     ${locationContext === 'feedSelector' && currentInnerSection === 'profile' ? 'profileButton-feedSelector-selected' : ''}
            //     ${locationContext === 'headerMenu' ? 'profileButton-headerMenu' : ''}
            //     ${locationContext === 'post' ? 'profileButton-post' : ''}
            // `}
            className={profileButtonClasses()}
            onClick={handleClickActions}
            aria-label='profile button'
        >

                <ProfilePhoto 
                    imagePath={
                        userData && 
                        locationContext !== 'feedSelector' 
                            ? userData.users && userData.users[0].userAdditionalInformations.profilePicture || './assets/icons/profile_icon_white2.svg' 
                            : './assets/icons/profile_icon_white2.svg'
                    }
                />

            
            {/* ↓ below are the different texts to display, depending on the context (locationContext) ↓ */}
            {locationContext === 'headerMenu' && 
                userData &&
                userData.users &&
                screenFormat != 'mobile' && 
                userData.users[0].userBaseInformations.username
            }
            {locationContext === 'feedSelector' && 'profile'}
            {locationContext === 'post' && 'userTest'}
        </div>
    )
}

export default ProfileButton