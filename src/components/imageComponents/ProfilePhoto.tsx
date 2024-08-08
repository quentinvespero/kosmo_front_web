import { useEffect, useState } from "react"

export interface ProfilePhotoProps {
    imageName:string
}

// show the profile photo of the connected user.
// image name have to be given with its name+ extension (in .png, .jpg or .svg). Exemple : image1.png
const ProfilePhoto:React.FC<ProfilePhotoProps> = ({imageName}) => {

    // // the image name gathered from the fetch
    // const [profilePhoto, setProfilePhoto] = useState<string>()

    // // fetching the profile photo
    // useEffect(() => {

    //     const fetchingProfileImage = async () => {
    //         try {
    //             const response = await fetch('src/assets/bdd.json')
    //             if (!response.ok) throw new Error('Problem while attempting to fetch')
    //             const datas = await response.json()
    //             // console.log('fetched datas :',datas.users[0].userAdditionalInformations.profilePicture)

    //             setProfilePhoto(datas.users[0].userAdditionalInformations.profilePicture)
    //         } 
    //         catch (error) {
    //             console.error('error while fetching data', error)
    //         }
    //     }

    //     fetchingProfileImage()
    // }, [])

    // function to adapt the path, depending on the extension given in the prop imageName
    const profilePhotoPath = () => {
        const imgPath = './assets/imgs/'
        const svgIconsPath = './assets/icons/'

        if (imageName && !imageName.includes('error') && imageName.includes('.png') || imageName.includes('.jpg')) return imgPath+imageName
        else if (imageName && !imageName.includes('error') && imageName.includes('.svg')) return svgIconsPath+imageName
        else return svgIconsPath+'profile_icon_white2.svg'
        // if (profilePhoto && !profilePhoto.includes('error') && profilePhoto.includes('.png') || profilePhoto && profilePhoto.includes('.jpg')) return imgPath+profilePhoto
        // else if (profilePhoto && !profilePhoto.includes('error') && profilePhoto.includes('.svg')) return svgIconsPath+profilePhoto
        // else return svgIconsPath+'profile_icon_white2.svg'
    }

    return (
        <div className='profilePhoto'>
            <img src={profilePhotoPath()} alt={imageName ? imageName.includes('.png') ? 'profile image' : 'default image' : 'error while loading image'} />
        </div>
    )
}

export default ProfilePhoto