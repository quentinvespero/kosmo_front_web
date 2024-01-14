import React from 'react'
import { CounterProps } from '../../../interfaces/postInterfaces'

const Counter:React.FC<CounterProps> = ({isCountersVisible, isCountersBeingHide, setIsCountersVisible}) => {
    return (
        <div 
            className={isCountersVisible && isCountersBeingHide ? 'counter counter-hidden' : 'counter'}
            onTransitionEnd={() =>{
                if (isCountersBeingHide) {
                    setIsCountersVisible(false)
                }
            }}
        >
            <p>10k</p>
        </div>
    )
}

export default Counter