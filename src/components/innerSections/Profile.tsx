import React from 'react'
import Feed from './innerSectionHome/Feed'
import FollowButton from '../buttons/FollowButton'
import PointCounter from '../header/PointCounter'
import jsondata from '../../assets/bdd.json'
import { ScreenProps } from '../../interfaces/interfaces'
import ProfilePhoto from '../imageComponents/ProfilePhoto'

const Profile:React.FC<ScreenProps> = ({screenFormat}) => {

    const profilePictureUrl = jsondata.users[0].userAdditionalInformations.profilePicture

    return (
        <div className='profile'>
            <div 
                className="profile-section1"
                style={{
                    maxWidth: screenFormat !== 'mobile' ? '50%' : ''
                }}
            >
                <div className="profile-innerSection1">
                    <div className="profile-innerSection1-top">
                        <div className="profile-innerSection1-imageAndCounter">
                            {/* <img src={profilePictureUrl} alt="profilePicture" /> */}
                            <ProfilePhoto imageName={profilePictureUrl}/>
                            <PointCounter/>
                        </div>
                        <div className="profile-name">
                            <p className='profile-username'>Username</p>
                            <p className='profile-handle'>@username</p>
                        </div>
                    </div>
                    <div className="profile-followButtons">
                        <FollowButton buttonText='Followers'/>
                        <FollowButton buttonText='Following'/>
                    </div>
                    <div className="profile-bio">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis distinctio, unde quaerat accusamus voluptatum porro maiores a reprehenderit ut voluptatibus.</p>
                    </div>
                </div>
                <div className="profile-editProfileButton">Edit profile</div>
            </div>
            <div className="profile-section2">

            </div>
            <div className="profile-section3">
                {/* <Feed/> */}
            </div>
        </div>
    )
}

export default Profile