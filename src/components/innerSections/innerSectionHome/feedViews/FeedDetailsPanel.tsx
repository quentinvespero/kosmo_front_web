import React, { useEffect, useState } from 'react'
import { FeedDetailsPanelProps } from '../../../../interfaces/feedViewsInterfaces'
import Post from '../../../post/Post'
import { DatasInterfaces } from '../../../../interfaces/datasInterfaces'

const FeedDetailsPanel:React.FC<FeedDetailsPanelProps> = ({idSelectedPost}) => {

    const [selectedPostDetails, setSelectedPostDetails] = useState<DatasInterfaces|null>(null)

    // fetching the post with the id of idSelectedPost
    useEffect(() => {
        fetch('src/assets/bdd.json')
            .then(response => response.json())
            .then(datas => setSelectedPostDetails(datas[0].posts))
            .catch(error => console.error('Error:', error))
    }, [])

    

    return (
        <div className='feedDetailsPanel'>
            <Post 
                // postId={} 
                postId='5f36dccf9bfr7694b4653c6a2'
                idSelectedPost={idSelectedPost}
                postLayout='detail'
            />
            {idSelectedPost}
        </div>
    )
}

export default FeedDetailsPanel