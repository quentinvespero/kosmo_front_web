import React from 'react'
import { CommentProps } from '../../interfaces/postInterfaces'

const Comment:React.FC<CommentProps> = ({parentElementId}) => {

    // fetching the comment with the id of idSelectedPost
    // useEffect(() => {
    //     fetch('src/assets/bdd.json')
    //         .then(response => response.json())
    //         .then(datas => setSelectedPostDetails(datas[0].posts))
    //         .catch(error => console.error('Error:', error))
    // }, [])

    return (
        <div className='comment'>
            <div className="comment-text"></div>
            {parentElementId}
        </div>
    )
}

export default Comment