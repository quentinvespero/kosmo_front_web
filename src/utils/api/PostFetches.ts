import useSWR from "swr"
import { useFetchData } from "./useFetch"

// get all posts
export const fetchPostGetAll = () => useFetchData('/assets/jsons/posts.json')

// create a post
export const fetchCreatePost = () => {
    const {data, error} = useSWR('/')
}

// getting few informations about the user to populate the user name and image profile in Post/PostProfileButton
export const fetchPostProfileUserData = () => useFetchData('/assets/jsons/user/usersMinimalInfos.json')