import React from 'react'
// import { ProfilePhotoProps } from '../../interfaces/imageComponentsInterfaces'

export interface ProfilePhotoProps {
    imageName:string
}

// show the profile photo of the connected user.
// image name have to be given with its name+ extension (in .png, .jpg or .svg). Exemple : image1.png
const ProfilePhoto:React.FC<ProfilePhotoProps> = ({imageName}) => {

    // function to adapt the path, depending on the extension given in the prop imageName
    const assetsFolder = () => {
        const imgPath = './src/assets/img/'
        const svgIconsPath = './assets/icons/'

        if (imageName && !imageName.includes('error') && imageName.includes('.png') || imageName.includes('.jpg')) return imgPath+imageName
        else if (imageName && !imageName.includes('error') && imageName.includes('.svg')) return svgIconsPath+imageName
        else return svgIconsPath+'profile_icon_white2.svg'
    }

    return (
        <div className='profilePhoto'>
            {/* {imagePath 
            ? 
                <img src={imagePath.includes('.png') ? assetsFolderPath+imagePath : imagePath} alt="profile photo" />
            :
                <img src='./assets/icons/profile_icon_white2.svg' alt='default image'/>
            } */}
            <img src={assetsFolder()} alt={imageName ? imageName.includes('.png') ? 'profile image' : 'default image' : 'error while loading image'} />
        </div>
    )
}

export default ProfilePhoto