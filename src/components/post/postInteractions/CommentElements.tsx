import React from 'react'
import ButtonType1 from '../../buttons/ButtonType1'
import Counter from './Counter'
import { CommentElementsProps, ScreenProps } from '../../../interfaces/interfaces'

const CommentElements: React.FC<CommentElementsProps & ScreenProps> = ({ isCountersVisible, screenFormat }) => {
    return (
        <div className='commentElements' style={{
            left: screenFormat==='mobile' ? '9rem' : '13rem'
        }}>
            <ButtonType1 buttonText='comment' interactionType='comment'/>
            {isCountersVisible && <Counter/>}
        </div>
    )
}

export default CommentElements