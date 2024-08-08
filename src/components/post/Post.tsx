import React, { useEffect, useRef, useState } from 'react'
import PostThemeElements from './PostThemeElements'
import PostContent from './PostContent'
import PostInteractions from './postInteractions/PostInteractions'
import { ScreenProps } from '../../interfaces/interfaces'
// import { PostProps } from '../../interfaces/postInterfaces'
import ProfileButton from '../buttons/ProfileButton'
import { PostInterfaces } from '../../interfaces/datas/postsDataInterfaces'
import { ViewTypeSelectorProps } from '../../interfaces/logicComponents'
import PostProfileButton from './PostProfileButton'

export interface PostProps {
    postId: string
    // isPostSelected?: boolean
    
    // props to prepare the usage of the id to check whether the id of the post is the same as the one already selected or not before changing the value of isPostSelected
    idSelectedPost?: PostInterfaces['_id']
    setIdSelectedPost?: (type:string) => void
    selectedViewType?: ViewTypeSelectorProps['selectedViewType']
    postLayout?: 'regular' | 'compact' | 'detail'
    postUsername: string
}

const Post:React.FC<ScreenProps & PostProps> = ({ screenFormat, postId, idSelectedPost, setIdSelectedPost, selectedViewType, postLayout, postUsername }) => {

    // follow state of the post being selected to show details of it
    const isPostSelected = idSelectedPost === postId

    // below, this will be used to identify the Post when clicking on it, and avoid triggering the function handleClick when clicking on its inner components
    // const postRef = useRef<HTMLDivElement>(null)

    // function to handle the click on the post and make it selected
    const handleClick = (event:React.MouseEvent<HTMLDivElement>) => {
        
        console.log(event.target)

        if (event.target === event.currentTarget) {
            
            console.log(event.target)
            console.log(event.currentTarget)
            
            if (setIdSelectedPost) {
                setIdSelectedPost(idSelectedPost !== postId ? postId : '')
            }
        }
    }

    return (
        <div 
            className={`post 
                ${isPostSelected ? 'post-selected' : ''}
                
                ${postLayout && postLayout === 'compact' ? 'post-compactFormat' : '' }
                ${postLayout && postLayout === 'regular' ? 'post-regularFormat' : '' }
                ${postLayout && postLayout === 'detail' ? 'post-detailFormat' : '' }
            `}
            onClick={handleClick}
        >
            <div 
                className={`innerPost
                    ${screenFormat != 'desktop' && selectedViewType ==='regularView' ? 'innerPost-smallScreen' : ''}
                `}
            >
                <div className="innerPost-topSection">
                    {/* <ProfileButton locationContext='post' postUsername={postUsername} /> */}
                    <PostProfileButton postUsername={postUsername}/>
                    <PostThemeElements/>
                </div>
                <div className="innerPost-content">
                    <PostContent isPostSelected={isPostSelected}/>
                </div>
            </div>
            <PostInteractions screenFormat={ screenFormat } selectedViewType={selectedViewType} postLayout={postLayout}/>
        </div>
    )
}

export default Post