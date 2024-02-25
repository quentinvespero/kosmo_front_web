import React, { useEffect, useRef, useState } from 'react'
import PostThemeElements from './PostThemeElements'
import PostContent from './PostContent'
import PostInteractions from './postInteractions/PostInteractions'
import { ScreenProps } from '../../interfaces/interfaces'
import { PostProps } from '../../interfaces/postInterfaces'
import ProfileButton from '../buttons/ProfileButton'

const Post:React.FC<ScreenProps & PostProps> = ({ screenFormat, postId, idSelectedPost, setIdSelectedPost, selectedViewType }) => {

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
                ${selectedViewType && selectedViewType === 'detailsView' || selectedViewType === 'columnsView' ? 'post-compactFormat' : 'post-regularFormat'}
            `}
            onClick={handleClick}
        >
            <div 
                className={`innerPost
                    ${screenFormat != 'desktop' && selectedViewType ==='regularView' ? 'innerPost-smallScreen' : ''}
                `}
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