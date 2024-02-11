import React from 'react'
import { PostContentProps } from '../../interfaces/postInterfaces'

const PostContent:React.FC<PostContentProps> = ({isPostSelected}) => {
    return (
        <div className={`postContent ${isPostSelected ? 'postContent-selected' : ''}`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio consequatur non recusandae? Mollitia reprehenderit magni ekfjalf sdjkfhlkjdfh qjkdsflkjdsf dfn sdfn sdfjnskjf</p>
        </div>
    )
}

export default PostContent