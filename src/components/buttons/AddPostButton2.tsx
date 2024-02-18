import React from 'react'
import { AddPostButton2Props } from '../../interfaces/buttonsInterfaces'
import { HandleClickHeaderMenuButtonsInterface } from '../../interfaces/headerMenuInterfaces'

const AddPostButton2:React.FC<AddPostButton2Props & HandleClickHeaderMenuButtonsInterface> = ({handleClick}) => {
    return (
        <div className='addPostButton2' onClick={() => handleClick && handleClick('addPost')}>
            <img src='/src/assets/icons/icon_plus_grey2.svg' alt="plus" />
            <p>Post</p>
        </div>
    )
}

export default AddPostButton2