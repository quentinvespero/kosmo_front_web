import React, { useEffect, useState } from 'react'
import { ScreenProps } from '../../interfaces/interfaces'
import { DatasInterfaces } from '../../interfaces/datasInterfaces'
import ProfilePhoto from '../imageComponents/ProfilePhoto'
import { HandleClickHeaderMenuButtonsInterface } from '../../interfaces/headerMenuInterfaces'
import { InnerSectionProps } from '../../interfaces/innerSectionsInterfaces'

export interface ProfileButtonProps {
    handleFeedChoice?: () => void
    locationContext: 'feedSelector' | 'headerMenu' | 'post'
    handleClick?: HandleClickHeaderMenuButtonsInterface['handleClick']
    setCurrentInnerSection?:InnerSectionProps['setCurrentInnerSection']
    currentInnerSection?:InnerSectionProps['currentInnerSection']
}

const ProfileButton:React.FC<ScreenProps & ProfileButtonProps & HandleClickHeaderMenuButtonsInterface> = ({screenFormat, locationContext, handleClick, setCurrentInnerSection, currentInnerSection}) => {

    // storing the path of the image
    const [userData, setUserData] = useState<DatasInterfaces | null>(null)

    // const for when in different context
    const inHeaderMenuContext = locationContext === 'headerMenu'
    const inPostContext = locationContext === 'post'
    const inFeedSelectorContext = locationContext === 'feedSelector'

    // fetching the datas from the json file
    useEffect(() => {
        fetch('src/assets/bdd.json')
            .then(response => response.json())
            .then(datas => setUserData(datas))
            .catch(error => console.error('Error:', error))
    }, [])

    // function to handle the actions when click on the button
    // - in header menu, it will trigger handleClick which is gonna change the section of the headerMenu, with the 'user' section
    // - in post it will stop the propagation on the element itself, to avoid the effect on the parent element, post
    // - in feedSelector, it will change the innerSection to 'profile'
    const handleClickActions = (e: { stopPropagation: () => any }) => {
        inHeaderMenuContext && handleClick && handleClick('user')
        inPostContext && e.stopPropagation()
        inFeedSelectorContext && setCurrentInnerSection && setCurrentInnerSection('profile')
    }

    // determining the class to give to the component
    const profileButtonClasses = () => {
        let classNames = 'profileButton'

        if (inFeedSelectorContext) {
            classNames += ' profileButton-feedSelector'
            if (currentInnerSection === 'profile') classNames += ' profileButton-feedSelector-selected'
        }
        else if (inHeaderMenuContext) classNames += ' profileButton-headerMenu'
        else if (inPostContext) classNames += ' profileButton-post'
        
        return classNames
    }

    // determining the text to give to the component
    const profileButtonText = () => {
        let text = ''

        if (inHeaderMenuContext && userData && userData.users && screenFormat != 'mobile') text = userData.users[0].userBaseInformations.username
        else if (inFeedSelectorContext) text ='profile'
        else if (inPostContext) text = 'userTest'

        return text
    }

    // determining the image to give to the component
    const profileButtonImage = () => {
        let image = ''

        if (userData && userData.users) 
            if (!inFeedSelectorContext) image = userData.users[0].userAdditionalInformations.profilePicture
            else image = 'profile_icon_white2.svg'
        else {
            image = 'error'
            console.log('error while trying to load profile image')
        }

        return image
    }

    return (
        <div className={profileButtonClasses()} onClick={handleClickActions} aria-label='profile button'>
            <ProfilePhoto imageName={profileButtonImage()} />
            <p>{profileButtonText()}</p>
        </div>
    )
}

export default ProfileButton