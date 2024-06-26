import React from 'react'
import ButtonType1 from '../../buttons/ButtonType1'
import Counter from './Counter'
import { CommentElementsProps } from '../../../interfaces/postInterfaces'
import { ScreenProps } from '../../../interfaces/interfaces'

const CommentElements: React.FC<CommentElementsProps & ScreenProps> = ({ isCountersVisible, screenFormat, isCountersBeingHide, setIsCountersVisible }) => {
    return (
        <div className='commentElements' style={{
            // left: screenFormat== 'tablet' || 'mobile' ? '9.5rem' : '13rem'
        }}>
            <ButtonType1 buttonText='comment' interactionType='comment'/>
            {/* {isCountersVisible && <Counter 
                isCountersVisible={isCountersVisible} 
                setIsCountersVisible={setIsCountersVisible}
                isCountersBeingHide={isCountersBeingHide} 
            />} */}
            <Counter 
                isCountersVisible={isCountersVisible} 
                setIsCountersVisible={setIsCountersVisible}
                isCountersBeingHide={isCountersBeingHide} 
            />
        </div>
    )
}

export default CommentElements