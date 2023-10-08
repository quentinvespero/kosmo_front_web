import React from 'react'
import { UpDownVoteElementsProps } from '../../../interfaces/interfaces'
import Counter from './Counter'
import ArrowButton from '../../buttons/ArrowButton'

const UpDownVoteElements: React.FC<UpDownVoteElementsProps> = ({direction}) => {

    const directionClassMap = {
        up: 'UpDownVoteElements-up',
        down: 'UpDownVoteElements-down',
        right: 'UpDownVoteElements-right'
    }

    const directionClass = `UpDownVoteElements ${direction && directionClassMap[direction]}`

    return (
        <div className={directionClass}>
            <ArrowButton/>
            <Counter/>
        </div>
    )
}

export default UpDownVoteElements