import React, { useEffect, useRef, useState } from 'react'
import PostThemeElements from './PostThemeElements'
import PostContent from './PostContent'
import PostInteractions from './postInteractions/PostInteractions'
import { ScreenProps } from '../../interfaces/interfaces'
import { PostProps } from '../../interfaces/postInterfaces'
import ProfileButton from '../buttons/ProfileButton'

const Post:React.FC<ScreenProps & PostProps> = ({ screenFormat, postId, idSelectedPost, setIdSelectedPost, selectedViewType }) => {

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
    // const [isPostSelected, setIsPostSelected] = useState(false)
    const isPostSelected = idSelectedPost === postId

    // below, this will be used to identify the Post when clicking on it, and avoid triggering the function handleClick when clicking on its inner components
    const postRef = useRef<HTMLDivElement>(null)

    // function to handle the click on the post and make it selected
    const handleClick = (event:React.MouseEvent<HTMLDivElement>) => {
        
        console.log(event.target)
        console.log(postRef)

        if (postRef.current && postRef.current === event.target) {
            console.log(event.target)
            if (setIdSelectedPost) {
                setIdSelectedPost(idSelectedPost !== postId ? postId : '')
            }
        }
    }

    return (
        <div 
            ref={postRef}
            className={`post 
                ${isPostSelected ? 'post-selected' : ''}
                ${selectedViewType && selectedViewType === 'detailsView' || selectedViewType === 'columnsView' ? 'post-compactFormat' : 'post-regularFormat'}
            `}
            // onClick={handleClick}
        >
            <div 
                className={`innerPost
                    ${screenFormat != 'desktop' && selectedViewType ==='regularView' ? 'innerPost-smallScreen' : ''}
                `} 
                // style={{
                //     maxWidth: screenFormat!='desktop' ? '19rem' : '22rem'
                // }}
            >
                <div className="innerPost-topSection">
                    <ProfileButton locationContext='post'/>
                    <PostThemeElements/>
                </div>
                <div className="innerPost-content">
                    <PostContent isPostSelected={isPostSelected}/>
                </div>
            </div>
            <PostInteractions screenFormat={ screenFormat } selectedViewType={selectedViewType}/>
        </div>
    )
}

export default Post