import React from 'react'
import { ButtonType3Props } from '../../interfaces/interfaces'

const ButtonType3:React.FC<ButtonType3Props> = ({ buttonText, buttonImageSrc}) => {
    return (
        <div className='buttonType3'>
            <p>{buttonText}</p>
            {buttonImageSrc && <img src={buttonImageSrc} alt=''></img>}
        </div>
    )
}

export default ButtonType3