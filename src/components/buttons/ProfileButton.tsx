import React, { useEffect, useState } from 'react'
// import { ScreenProps } from '../../interfaces/interfaces'
// import { DatasInterfaces } from '../../interfaces/datasInterfaces'
import ProfilePhoto from '../imageComponents/ProfilePhoto'
import { HandleClickHeaderMenuButtonsInterface } from '../../interfaces/headerMenuInterfaces'
import { InnerSectionProps } from '../innerSections/InnerSection'
// import { InnerSectionProps } from '../../interfaces/innerSectionsInterfaces'

export interface ProfileButtonProps {
    handleFeedChoice?: () => void
    locationContext: 'feedSelector' | 'headerMenu' | 'post'
    handleClick?: HandleClickHeaderMenuButtonsInterface['handleClick']
    setCurrentInnerSection?:InnerSectionProps['setCurrentInnerSection']
    currentInnerSection?:InnerSectionProps['currentInnerSection']
    postUsername:string
}

interface usersMinimalInfosTypes {
    username:string
    profilePicture:string
}

const ProfileButton:React.FC<ProfileButtonProps & HandleClickHeaderMenuButtonsInterface> = ({
    locationContext, 
    handleClick, 
    setCurrentInnerSection, 
    currentInnerSection, 
    postUsername
}) => {

    // storing informations about the user from the fetch
    const [userData, setUserData] = useState<usersMinimalInfosTypes>()

    // fetching the datas to get the user's name and profile image
    useEffect(() => {

        const fetchingProfileImage = async () => {

            try {
                const response = await fetch('./assets/jsons/user/usersMinimalInfos.json')
                if (!response.ok) throw new Error('Problem while attempting to fetch')
                const fetchedDatas = await response.json()
                console.log(`fetched datas profileButton : ${fetchedDatas[postUsername].username} 'in the context : ' ${locationContext}`)

                try {
                    setUserData(fetchedDatas[postUsername])
                }
                catch (error) {
                    console.error('issue in attempt to index user using postUsername props', error, locationContext)
                }
            } 
            catch (error) {
                console.error('error while fetching data', error, locationContext)
            }
        }

        fetchingProfileImage()
    }, [])

    // function to handle the actions when click on the button
    // - in header menu, it will trigger handleClick which is gonna change the section of the headerMenu, with the 'user' section
    // - in post it will stop the propagation on the element itself, to avoid the effect on the parent element, post
    // - in feedSelector, it will change the innerSection to 'profile'
    const handleClickActions = (e: { stopPropagation: () => any }) => {

        switch (locationContext) {
            case 'feedSelector':setCurrentInnerSection && setCurrentInnerSection('profile')
                break
            case 'headerMenu':handleClick && handleClick('user')
                break
            case 'post':e.stopPropagation()
                break
        }
    }

    // determining the class to give to the component
    const profileButtonClasses = () => {
        
        let classNames = 'profileButton'

        switch (locationContext) {
            case 'feedSelector':
                classNames += ' profileButton-feedSelector'
                if (currentInnerSection === 'profile') classNames += ' profileButton-feedSelector-selected'    
                break
            case 'headerMenu':classNames += ' profileButton-headerMenu'
                break
            case 'post':classNames += ' profileButton-post'
                break
        }
        
        return classNames
    }

    // determining the text to give to the component
    const profileButtonText = () => {
        let text = ''

        switch (locationContext) {
            case 'feedSelector': text ='profile'
                break
            case 'post': if (userData) text = userData.username
                break
        }

        return text
    }

    // determining the image to give to the component
    const profileButtonImage = () => {
        let image = ''

        switch (locationContext) {
            case 'feedSelector': image = 'profile_icon_white2.svg'
                break
            // case 'headerMenu': if (userData) image = userData[0].userAdditionalInformations
            //     break
            case 'post': if (userData) image = userData.profilePicture
                break
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