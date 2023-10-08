import React from 'react'
import { ButtonType1Props } from '../../interfaces/interfaces'

const ButtonType1: React.FC<ButtonType1Props> = ({buttonText}) => {
    return (
        <div className='buttonType1'>{buttonText}</div>
    )
}

export default ButtonType1