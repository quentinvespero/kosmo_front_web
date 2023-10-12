import React from 'react'
import { UpDownVoteElementsProps } from '../../../interfaces/interfaces'
import Counter from './Counter'
import ButtonType1 from '../../buttons/ButtonType1'

const UpDownVoteElements: React.FC<UpDownVoteElementsProps> = ({interactionType}) => {

    return (
        <div className='upDownVoteElements'>
            <ButtonType1 interactionType={interactionType}/>
            <Counter/>
        </div>
    )
}

export default UpDownVoteElements