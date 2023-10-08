import React from 'react'
import { UpDownVoteElementsProps } from '../../../interfaces/interfaces'
import Counter from './Counter'
import ArrowButton from '../../buttons/ArrowButton'

const UpDownVoteElements: React.FC<UpDownVoteElementsProps> = ({interactionType}) => {

    return (
        <div className='UpDownVoteElements'>
            <ArrowButton interactionType={interactionType}/>
            <Counter/>
        </div>
    )
}

export default UpDownVoteElements