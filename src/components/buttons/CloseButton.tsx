import React from 'react'
import closeIcon from '../../assets/icons/icon_close_white2.svg'

const CloseButton = () => {
    return (
        <div className='closeButton'>
            <img src={closeIcon} alt="button close" />
        </div>
    )
}

export default CloseButton