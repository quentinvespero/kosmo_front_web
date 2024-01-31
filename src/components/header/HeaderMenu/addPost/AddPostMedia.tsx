import React from 'react'
import { AddPostInnerSectionProps } from '../../../../interfaces/addPostInterfaces'

const AddPostMedia:React.FC<AddPostInnerSectionProps> = ({addPostSelectedInnerSection}) => {
    return (
        <div className='addPostMedia'>
            <p>Drop a file here, or click to import a file ;)</p>
        </div>
    )
}

export default AddPostMedia