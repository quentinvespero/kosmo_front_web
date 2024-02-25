import React from 'react'
import { FeedDetailsPanelProps } from '../../../../interfaces/feedViewsInterfaces'

const FeedDetailsPanel:React.FC<FeedDetailsPanelProps> = ({idSelectedPost}) => {

    fetch

    return (
        <div className='feedDetailsPanel'>
            {idSelectedPost}
        </div>
    )
}

export default FeedDetailsPanel