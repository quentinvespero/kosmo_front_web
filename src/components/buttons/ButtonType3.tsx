import React from 'react'
import { ButtonType3Props } from '../../interfaces/buttonsInterfaces'

const ButtonType3:React.FC<ButtonType3Props> = ({ buttonText, buttonImageSrc, buttonType}) => {
    return (
        <div 
            className='buttonType3'
            style={{
                width: buttonType==='button-feeds' ? 'unset' : '4rem',
                height: buttonType==='button-feeds' ? 'unset' : '4rem',
                borderRadius: buttonType==='button-feeds' ? '.5rem' : '.7rem',
                padding: buttonType==='button-feeds' ? '1rem' : '.7rem',
                fontSize: buttonType==='button-feeds' ? '.9rem' : '.7rem'
            }}
        >
            <p>{buttonText}</p>
            {buttonImageSrc && <img src={buttonImageSrc} alt=''></img>}
        </div>
    )
}

export default ButtonType3