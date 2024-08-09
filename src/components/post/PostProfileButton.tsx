import { Suspense, useEffect, useState } from "react"
import ProfileButton from "../buttons/ProfileButton"
import ButtonWithIcon from "../buttons/ButtonWithIcon"
import ButtonWithImage from "../buttons/ButtonWithImage"
import { useFetchData } from "../../utils/api/useFetch"
import { fetchPostProfileUserData } from "../../utils/api/postFetches"

export interface PostProfileButtonProps {
    postUsername:string
}

interface usersMinimalInfosTypes {
    username:string
    profilePicture:string
}

const PostProfileButton:React.FC<PostProfileButtonProps> = ({postUsername}) => {

    // storing informations about the user from the fetch
    // const [userData, setUserData] = useState<usersMinimalInfosTypes>()

    // fetching the datas to get the user's name and profile image
    // useEffect(() => {

    //     const fetchingUserData = async () => {

    //         try {
    //             const response = await fetch('./assets/jsons/user/usersMinimalInfos.json')
    //             if (!response.ok) throw new Error('Problem while attempting to fetch')
    //             const fetchedDatas = await response.json()
    //             console.log(`fetched datas profileButton : ${fetchedDatas[postUsername].username}`)

    //             try {
    //                 setUserData(fetchedDatas[postUsername])
    //             }
    //             catch (error) {
    //                 console.error('issue in attempt to index user using postUsername props', error)
    //             }
    //         } 
    //         catch (error) {
    //             console.error('error while fetching data', error)
    //         }
    //     }

    //     fetchingUserData()
    // }, [])

    // console.log('-----postProfileButton', useFetchData('./assets/jsons/user/usersMinimalInfos.json').data)
    // console.log('-----postProfileButton', fetchPostProfileUserData().data)

    const userData:usersMinimalInfosTypes = fetchPostProfileUserData().data[postUsername]
    // console.log('---------PostProfileButton',userData)

    return (
        <div className="postProfileButton">
            <ButtonWithImage imageName={userData.profilePicture} buttonText={userData.username}/>
        </div>
    )
}

export default PostProfileButton