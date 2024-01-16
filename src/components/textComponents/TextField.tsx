import React, { useState } from 'react'
import { TextFieldProps } from '../../interfaces/textComponentsInterfaces'

const TextField:React.FC<TextFieldProps> = ({ placeholder }) => {

    const [value, setValue] = useState('')
    // const [isFocused, setIsFocused] = useState(false)

    return (
        <div 
            className='textField'
            // onClick={()=> setIsFocused(true)}
            style={{
                
            }}
            contentEditable 
        >
            {value === '' ? <span className="placeholder">{placeholder}</span> : null}
            {value}
        </div>
    )
}

export default TextField