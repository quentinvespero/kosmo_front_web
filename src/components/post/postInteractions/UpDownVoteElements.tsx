import React from 'react'
import { UpDownVoteElementsProps } from '../../../interfaces/interfaces'
import Counter from './Counter'
import ButtonType1 from '../../buttons/ButtonType1'

const UpDownVoteElements: React.FC<UpDownVoteElementsProps> = ({interactionType, setInteractionChoice, interactionChoice, isCountersVisible, setIsCountersVisible}) => {

    const [hiddingCounter, setHiddingCounter] = React.useState(false)

    const handleInteractionChoice = () => {
        if (interactionType === interactionChoice) {
            
            setHiddingCounter(true)
            setInteractionChoice('none')
            setIsCountersVisible(false)
        }
        else {
            setInteractionChoice(interactionType)
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
            {isCountersVisible && <Counter isCounterVisible={isCountersVisible} hiddingCounter={hiddingCounter}/>}
        </div>
    )
}

export default UpDownVoteElements