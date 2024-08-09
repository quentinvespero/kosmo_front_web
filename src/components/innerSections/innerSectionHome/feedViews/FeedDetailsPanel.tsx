import React, { useEffect, useState } from 'react'
import { FeedDetailsPanelProps } from '../../../../interfaces/feedViewsInterfaces'
import { fetchPostGetAll } from '../../../../utils/api/postFetches'
import { PostInterfaces } from '../../../../interfaces/datas/postsDataInterfaces'

const FeedDetailsPanel:React.FC<FeedDetailsPanelProps> = ({idSelectedPost}) => {

    // const [selectedPostDetails, setSelectedPostDetails] = useState<DatasInterfaces|null>(null)

    // fetching the post with the id of idSelectedPost
    // useEffect(() => {
    //     fetch('src/assets/bdd.json')
    //         .then(response => response.json())
    //         .then(datas => setSelectedPostDetails(datas[0].posts))
    //         .catch(error => console.error('Error:', error))
    // }, [])

    const allPosts = fetchPostGetAll().data.posts
    const selectedPost:PostInterfaces = allPosts.find(post => post._id === idSelectedPost)

    // console.log('---------FeedDetailsPanel',allPosts)
    console.log('---------FeedDetailsPanel',selectedPost)

    return (
        <div className='feedDetailsPanel'>
            {/* <Post 
                postId='5f36dccf9bfr7694b4653c6a2'
                idSelectedPost={idSelectedPost}
                postLayout='detail'
                postUsername={}
            /> */}
            
            <p>{idSelectedPost}</p>
        </div>
    )
}

export default FeedDetailsPanel