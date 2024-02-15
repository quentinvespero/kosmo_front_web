import React from 'react'
import { HoveringDescriptionProps } from '../../interfaces/textComponentsInterfaces'

// component that aims to be used pretty much everywhere, to add some context/comment on hovered elements
const HoveringDescription:React.FC<HoveringDescriptionProps> = ({text}) => {
    return (
        <div className='hoveringDescription'>
            <p className='hoveringDescription-text'>{text}</p>
        </div>
    )
}

export default HoveringDescription