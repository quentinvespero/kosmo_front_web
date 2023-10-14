import React from 'react'
import { UpDownVoteElementsProps } from '../../../interfaces/interfaces'
import Counter from './Counter'
import ButtonType1 from '../../buttons/ButtonType1'

const UpDownVoteElements: React.FC<UpDownVoteElementsProps> = ({interactionType, setInteractionChoice, interactionChoice}) => {

    // handling the click on upvote/downote
    const handleInteractionChoice = () => {
        if (interactionType === interactionChoice) {
            setInteractionChoice('none')
        }
        else {
            setInteractionChoice(interactionType)
            console.log(interactionType)
        }
    }

    return (
        <div className='upDownVoteElements'>
            <ButtonType1 interactionType={interactionType} onClick={handleInteractionChoice}/>
            <Counter/>
        </div>
    )
}

export default UpDownVoteElements