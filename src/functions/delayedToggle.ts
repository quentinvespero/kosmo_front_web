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

// function that receive a boolean variable as a parameter, as well as a delay in ms. When the given variable is set to false, this function will return false, but after the given delay
// - booleanVariable : the boolean variable, that is going to change
// - delay : the delay after which the false should be returned by the function
export const delayBooleanResponse = (booleanVariable:boolean, delayBeforeReturningFalse:number) : boolean => {
    
    const [booleanValue, setBooleanValue] = useState<boolean>(booleanVariable)

    useEffect(() => {
        let timeoutDelay: number | null

        if (booleanVariable) setBooleanValue(true)
        else timeoutDelay = window.setTimeout(() => setBooleanValue(false), delayBeforeReturningFalse)

        // cleanup function to prevent memory leaks
        return () => {
            if (timeoutDelay) clearTimeout(timeoutDelay)
        }
    },[booleanVariable, delayBeforeReturningFalse])

    return booleanValue
}

// function to return a given value, according to the value of a given boolean variable, after a given delay in ms, if the given variable is set to true
// - booleanVariable : the boolean variable that will trigger the function if true
// - delayBeforeReturningValue : the delay before returning the given value if the given boolean variable is true
// - valueToReturn : the value that the function has to return. Can be any types.
export const delayResponse = (booleanVariable:boolean, delayBeforeReturningValue:number, valueToReturn:any) : boolean => {
    
    const [value, setValue] = useState<any>()

    useEffect(() => {
        let timeoutDelay: number | null

        if (booleanVariable) timeoutDelay = window.setTimeout(() => setValue(valueToReturn), delayBeforeReturningValue)

        // cleanup function to prevent memory leaks
        return () => {
            if (timeoutDelay) clearTimeout(timeoutDelay)
        }
    },[booleanVariable, delayBeforeReturningValue])

    return value
}