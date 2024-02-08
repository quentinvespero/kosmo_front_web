import { useEffect, MutableRefObject } from 'react'

// this function aim to detect if a click is performed outside of the actual component that use it OR if the escape key is pressed.
// used in : SearchField
// used in : HeaderMenu

// it takes two parameters : 
// - ref : the element that is defined in the component that will use this function as a reference
// - callback() : the function that will be executed if a click is detected outside of the reference element
const outsideClick = (ref: MutableRefObject<HTMLElement | null>, callback: () => void) => {
    
    useEffect(() => {
        
        // handle the click outside the ref
        const handleClickOutside = (event: MouseEvent) => {

            // here, it checks if the click event’s target (the element that was clicked) is outside of the ref element. If so, it executes the callback function
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback()
            }
        }

        // handle the escape key pressure
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                callback()
            }
        }
        
        // mousedown is when a mouse's click is pressed
        document.addEventListener('mousedown', handleClickOutside)
        
        // keydown is when a key is pressed
        document.addEventListener('keydown', handleEscapeKey)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscapeKey)
        }
    }, [ref, callback])
}

export default outsideClick