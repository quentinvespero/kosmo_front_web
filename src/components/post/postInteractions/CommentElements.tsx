import React from 'react'
import ButtonType1 from '../../buttons/ButtonType1'
import Counter from './Counter'

const CommentElements = () => {
    return (
        <div className='commentElements'>
            <ButtonType1 buttonText='comment'/>
            <Counter/>
        </div>
    )
}

export default CommentElements