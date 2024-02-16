import React from 'react'
import { CounterProps } from '../../../interfaces/postInterfaces'

const Counter:React.FC<CounterProps> = ({isCountersVisible, isCountersBeingHide, setIsCountersVisible}) => {
    return (
        <div 
            // className={`counter 
            //     ${isCountersVisible && isCountersBeingHide ? 'counter-hidden' : ''}
            // `}
            className={`counter 
                ${isCountersVisible ? 'counter-visible' : 'counter-hidden'}
                ${isCountersBeingHide ? 'counter-beingHide' : ''}
            `}
            // onTransitionEnd={() =>{
            //     if (isCountersBeingHide) {
            //         setIsCountersVisible(false)
            //     }
            // }}
        >
            <p>10k</p>
        </div>
    )
}

export default Counter