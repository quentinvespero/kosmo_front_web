import React from 'react'
import ButtonType1 from '../../buttons/ButtonType1'
import Counter from './Counter'
import { CommentElementsProps } from '../../../interfaces/interfaces'

const CommentElements: React.FC<CommentElementsProps> = ({isCountersVisible, mobileLayout}) => {
    return (
        <div className='commentElements' style={{
            left: mobileLayout==='mobile' ? '9rem' : '13rem'
        }}>
            <ButtonType1 buttonText='comment' interactionType='comment'/>
            {isCountersVisible && <Counter/>}
        </div>
    )
}

export default CommentElements