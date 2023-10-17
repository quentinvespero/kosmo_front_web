import React from 'react'
import ButtonType1 from '../../buttons/ButtonType1'
import Counter from './Counter'
import { CommentElementsProps } from '../../../interfaces/interfaces'

const CommentElements: React.FC<CommentElementsProps> = ({isCountersVisible}) => {
    return (
        // <div className='commentElements' style={isCountersVisible === false ? {marginLeft:'5.15rem'} : {}}>
        // <div className='commentElements' style={isCountersVisible === false ? {marginRight:'20%',marginLeft:'20%'} : {}}>
        <div className='commentElements'>
            <ButtonType1 buttonText='comment' interactionType='comment'/>
            {isCountersVisible && <Counter/>}
        </div>
    )
}

export default CommentElements