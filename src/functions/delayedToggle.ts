import { useState, useEffect } from 'react'

// the purpose of this function is to be used with display property to delay the hidding of an element, when returning 'none'. So within this delay, we can show up an animation
// if the boolean variable given as a parameter is true, then it directly return 'flex'. Else, it return 'none' AFTER the given delay
// ! be sure to always set the delay of this function shorter than the delay of the animation, to avoid animation to show up before it receive the 'none' !
// - booleanVariable : a boolean variable that should trigger the hidding
// - delay : the delay time in ms
// - returnResponse : used to indicate the function to return a boolean instead of 'flex' : 'none'
export const delayHidingElementDisplayProperty = (booleanVariable: boolean, delay: number, returnResponse?:boolean): 'flex' | 'none' => {

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

    // if (returnResponse) return displayValue ? true : false
    return displayValue ? 'flex' : 'none'
}

export const delayBooleanResponse = (booleanVariable:boolean, delay:number) : boolean => {
    
    const [booleanValue, setBooleanValue] = useState<boolean>(booleanVariable)

    useEffect(() => {
        let timeoutDelay: number | null

        if (booleanVariable) setBooleanValue(true)
        else timeoutDelay = window.setTimeout(() => setBooleanValue(false), delay)

        return () => {
            if (timeoutDelay) clearTimeout(timeoutDelay)
        }
    },[booleanVariable, delay])

    return booleanValue
}