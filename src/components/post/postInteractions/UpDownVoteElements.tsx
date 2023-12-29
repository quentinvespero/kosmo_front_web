import React from 'react'
import { UpDownVoteElementsProps } from '../../../interfaces/interfaces'
import Counter from './Counter'
import ButtonType1 from '../../buttons/ButtonType1'

const UpDownVoteElements: React.FC<UpDownVoteElementsProps> = ({interactionType, setInteractionChoice, interactionChoice, isCountersVisible, setIsCountersVisible}) => {

    const [isCountersBeingHide, setIsCountersBeingHide] = React.useState(false)

    const handleInteractionChoice = () => {
        if (interactionType === interactionChoice) {
            
            setInteractionChoice('none')
            setIsCountersBeingHide(true)
            setTimeout(() => {
                setIsCountersVisible(false)
            }, 300)
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
            {isCountersVisible && <Counter isCountersVisible={isCountersVisible} isCountersBeingHide={isCountersBeingHide} setIsCountersVisible={setIsCountersVisible}/>}
        </div>
    )
}

export default UpDownVoteElements