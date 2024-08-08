import React, { useEffect, useState } from 'react'
import { ScreenProps } from '../../interfaces/interfaces'
import { DatasInterfaces } from '../../interfaces/datasInterfaces'
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
    // string:{
    //     username:string
    //     profilePicture:string
    // }
    username:string
    profilePicture:string
}

const ProfileButton:React.FC<ScreenProps & ProfileButtonProps & HandleClickHeaderMenuButtonsInterface> = ({
    screenFormat, 
    locationContext, 
    handleClick, 
    setCurrentInnerSection, 
    currentInnerSection, 
    postUsername
}) => {

    // storing informations about the user from the fetch
    const [userData, setUserData] = useState<usersMinimalInfosTypes>()

    // const for when in different context
    const inHeaderMenuContext = locationContext === 'headerMenu'
    const inPostContext = locationContext === 'post'
    const inFeedSelectorContext = locationContext === 'feedSelector'

    // fetching the datas from the json file
    useEffect(() => {

        const fetchingProfileImage = async () => {

            // let routes = inPostContext ? './assets/jsons/user/usersMinimalInfos.json' : './assets/jsons/user/connectedUser.jsons'

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

        // fetch('src/assets/bdd.json')
        //     .then(response => response.json())
        //     .then(datas => setUserData(datas))
        //     .catch(error => console.error('Error:', error))

    }, [])

    // function to handle the actions when click on the button
    // - in header menu, it will trigger handleClick which is gonna change the section of the headerMenu, with the 'user' section
    // - in post it will stop the propagation on the element itself, to avoid the effect on the parent element, post
    // - in feedSelector, it will change the innerSection to 'profile'
    const handleClickActions = (e: { stopPropagation: () => any }) => {

        // below, just wondering whether I should use switch or single line operation

        switch (locationContext) {
            case 'feedSelector':setCurrentInnerSection && setCurrentInnerSection('profile')
                break
            case 'headerMenu':handleClick && handleClick('user')
                break
            case 'post':e.stopPropagation()
                break
        }

        // inHeaderMenuContext && handleClick && handleClick('user')
        // inPostContext && e.stopPropagation()
        // inFeedSelectorContext && setCurrentInnerSection && setCurrentInnerSection('profile')
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

        switch (locationContext) {
            case 'feedSelector': text ='profile'
                break
            // case 'post': if (postUsername && userData) text = userData[postUsername].username
            case 'post': if (userData) text = userData.username
                break
            // case 'headerMenu': if (userData && screenFormat != 'mobile') text = userData
            //     break;
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

        // if (inHeaderMenuContext && userData?.users) 
        //     if (!inFeedSelectorContext) image = userData.users[0].userAdditionalInformations.profilePicture
        //     else image = 'profile_icon_white2.svg'
        // else if (inPostContext) 
        // else {
        //     image = 'error'
        //     console.log('error while trying to load profile image',image,userData,locationContext)
        // }

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