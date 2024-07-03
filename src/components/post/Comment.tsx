import React from 'react'
import { CommentProps } from '../../interfaces/postInterfaces'

const Comment:React.FC<CommentProps> = ({parentElementId}) => {

    return (
        <div className='comment'>
            <div className="comment-text"></div>
            {parentElementId}
        </div>
    )
}

export default Comment