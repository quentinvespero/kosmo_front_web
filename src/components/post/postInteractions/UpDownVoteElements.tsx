import React from 'react'
import { UpDownVoteElementsProps } from '../../../interfaces/postInterfaces'
import Counter from './Counter'
import ButtonType1 from '../../buttons/ButtonType1'

const UpDownVoteElements: React.FC<UpDownVoteElementsProps> = ({
    interactionType, 
    interactionChoice, 
    setInteractionChoice, 
    isCountersVisible, 
    setIsCountersVisible, 
    isCountersBeingHide, 
    setIsCountersBeingHide
}) => {

    const handleInteractionChoice = () => {
        if (interactionType === interactionChoice) {
            setInteractionChoice('none')
            setIsCountersBeingHide(true)
            setTimeout(() => setIsCountersVisible(false), 100)
        }
        else {
            setInteractionChoice(interactionType)
            setIsCountersBeingHide(false)
            setIsCountersVisible(true)
        }
    }

    return (
        <div className='upDownVoteElements'>
            <ButtonType1 
                interactionType={interactionType} 
                onClick={handleInteractionChoice} 
                isActive={interactionType === interactionChoice}
            />
            {/* {isCountersVisible && <Counter 
                isCountersVisible={isCountersVisible} 
                setIsCountersVisible={setIsCountersVisible} 
                isCountersBeingHide={isCountersBeingHide} 
                setIsCountersBeingHide={setIsCountersBeingHide}
            />} */}
            <Counter 
                isCountersVisible={isCountersVisible} 
                setIsCountersVisible={setIsCountersVisible} 
                isCountersBeingHide={isCountersBeingHide} 
                setIsCountersBeingHide={setIsCountersBeingHide}
            />
        </div>
    )
}

export default UpDownVoteElements