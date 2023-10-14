import React from 'react'
import { UpDownVoteElementsProps } from '../../../interfaces/interfaces'
import Counter from './Counter'
import ButtonType1 from '../../buttons/ButtonType1'

const UpDownVoteElements: React.FC<UpDownVoteElementsProps> = ({interactionType, setInteractionChoice, interactionChoice}) => {

    const [isCounterVisible, setIsCounterVisible] = React.useState(false)

    const handleInteractionChoice = () => {
        if (interactionType === interactionChoice) {
            setInteractionChoice('none')
            setIsCounterVisible(false)
        }
        else {
            setInteractionChoice(interactionType)
            setIsCounterVisible(true)
        }
    }

    return (
        <div className='upDownVoteElements'>
            <ButtonType1 interactionType={interactionType} onClick={handleInteractionChoice} isActive={interactionType === interactionChoice}/>
            {isCounterVisible && <Counter/>}
        </div>
    )
}

export default UpDownVoteElements
