import React, { useEffect, useState } from 'react'
import PostThemeElements from './PostThemeElements'
import PostContent from './PostContent'
import PostInteractions from './postInteractions/PostInteractions'
import { ScreenProps } from '../../interfaces/interfaces'
import { PostProps } from '../../interfaces/postInterfaces'
import ProfileButton from '../buttons/ProfileButton'

const Post:React.FC<ScreenProps & PostProps> = ({ screenFormat, postId, idSelectedPost, setIdSelectedPost }) => {

    // ⬇ 31/12/23 - example of fetches to use when backend will be ready ⬇

    // const [post, setPost] = useState(null)
    // const [comments, setComments] = useState([])
    // const [interaction, setInteraction] = useState(null)

    // useEffect(() => {
    //     // fetch(`https://api.example.com/posts/${postId}`)
    //         .then(response => response.json())
    //         .then(data => setPost(data))

    //     // fetch(`https://api.example.com/posts/${postId}/comments`)
    //         .then(response => response.json())
    //         .then(data => setComments(data))

    //     // fetch(`https://api.example.com/posts/${postId}/interaction`)
    //         .then(response => response.json())
    //         .then(data => setInteraction(data))
    // }, [postId])

    // ⬆ 31/12/23 - example of fetches to use when backend will be ready ⬆

    // temporary fetch
    // useEffect(() => {
    //     fetch('src/assets/bdd.json')
    //         .then(response => response.json())
    //         .then()
    // })

    // follow state of the post being selected to show details of it
    const [isPostSelected, setIsPostSelected] = useState(false)

    const handleClick = () => {
        if (idSelectedPost === '') {
            setIsPostSelected(true)
            setIdSelectedPost(postId)
        }
        else {
            if (idSelectedPost !== postId) {
                setIdSelectedPost(postId)
                setIsPostSelected(true)
            }
            else{
                setIsPostSelected(false)
                setIdSelectedPost('')
            }
        }
    }

    return (
        <div 
            className={`post ${idSelectedPost === postId ? 'post-selected' : ''}`}
            onClick={handleClick}
        >
            <div className="innerPost" style={{
                maxWidth: screenFormat!='desktop' ? '19rem' : '22rem'
            }}>
                <ProfileButton locationContext='post'/>
                <div className="innerPost-content">
                    <PostContent isPostSelected={isPostSelected}/>
                    <PostThemeElements/>
                </div>
            </div>
            <PostInteractions screenFormat={ screenFormat }/>
        </div>
    )
}

export default Post