import React from 'react'
import { CounterProps } from '../../../interfaces/interfaces'

const Counter:React.FC<CounterProps> = ({isCounterVisible, hiddingCounter}) => {
    return (
        <div 
            className='counter'
            style={{
                // animation: isCounterVisible && hiddingCounter ? 'slideFromRight .15s ease-in-out' : ''
            }}
        >
            <p>10k</p>
        </div>
    )
}

export default Counter