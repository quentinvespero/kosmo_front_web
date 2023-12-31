import React from 'react'
import Feed from '../Feed'
import FollowButton from '../buttons/FollowButton'

const Profile = () => {
    return (
        <div className='profile'>
            {/* <PointCounter/> */}
            <div className="profile-section1">
                <div className="profile-innerSection1">
                    {/* <img src="" alt="" srcset="" /> */}
                    <div className="profile-name">
                        <p className='profile-username'>Username</p>
                        <p className='profile-handle'>@username</p>
                    </div>
                    <div className="profile-followButtons">
                        <FollowButton buttonText='followers'/>
                        <FollowButton buttonText='following'/>
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
                <Feed/>
            </div>
        </div>
    )
}

export default Profile