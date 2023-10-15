import React from 'react'
import { UpDownVoteElementsProps } from '../../../interfaces/interfaces'
import Counter from './Counter'
import ButtonType1 from '../../buttons/ButtonType1'

const UpDownVoteElements: React.FC<UpDownVoteElementsProps> = ({interactionType, setInteractionChoice, interactionChoice, isCountersVisible, setIsCountersVisible}) => {

    const handleInteractionChoice = () => {
        if (interactionType === interactionChoice) {
            setInteractionChoice('none')
            setIsCountersVisible(false)
        }
        else {
            setInteractionChoice(interactionType)
            setIsCountersVisible(true)
        }
    }

    return (
        <div className='upDownVoteElements' style={interactionType === 'downvote' && interactionChoice === 'none' ? {marginLeft:'1rem'} : {}}>
            <ButtonType1 interactionType={interactionType} onClick={handleInteractionChoice} isActive={interactionType === interactionChoice}/>
            {isCountersVisible && <Counter/>}
        </div>
    )
}

export default UpDownVoteElements
