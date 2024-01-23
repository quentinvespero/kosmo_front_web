import React from 'react'
import { AddPostButton2Props } from '../../interfaces/buttonsInterfaces'

const AddPostButton2:React.FC<AddPostButton2Props> = ({handleClick}) => {
    return (
        <div className='addPostButton2' onClick={() => handleClick && handleClick('addPost')}>
            
        </div>
    )
}

export default AddPostButton2