import React from 'react'
import { ButtonType2Props } from '../../interfaces/interfaces'

const ButtonType2:React.FC<ButtonType2Props> = ({buttonText, buttonType}) => {
    return (
        <div className={buttonType}>
            <p>{buttonText}</p>
        </div>
    )
}

export default ButtonType2