import { useState, useEffect } from 'react'

// the goal of this function is to be used for delaying the hidding of an element, so within that time we can add an animation to look smoother
// if the given booleanVariable is true, then it directly return 'flex'. Else, it return 'none' after the given delay
// ! be sure to always set the delay of this function shorter than the delay of the animation, to avoid animation to look bad !
export const delayHidingElementDisplayProperty = (booleanVariable: boolean, delay: number): string => {

    const [displayValue, setDisplayValue] = useState<boolean>(booleanVariable)

    useEffect(() => {

        let timeoutDelay: number | null = null
        
        if (booleanVariable) {
            setDisplayValue(true)
        }
        else {
            timeoutDelay = window.setTimeout(() => setDisplayValue(false), delay)
        }
        return () => {
            if (timeoutDelay) {
                clearTimeout(timeoutDelay)
            }
        }
    }, [booleanVariable, delay])

    return displayValue ? 'flex' : 'none'
}    