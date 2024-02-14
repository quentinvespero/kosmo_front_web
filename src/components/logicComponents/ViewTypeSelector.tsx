import React from 'react'
import { ViewTypeSelectorProps } from '../../interfaces/logicComponents'
import ButtonWithIcon from '../buttons/ButtonWithIcon'

const ViewTypeSelector:React.FC<ViewTypeSelectorProps> = ({viewType, setViewType}) => {

    const handleClick = () => {
        // setViewType()
    }

    return (
        <div className='viewTypeSelector'>
            <div className={`viewTypeSelector-element `}>
                <img src="" alt="" />
            </div>
            <ButtonWithIcon buttonText='' buttonIcon='./src/assets/icons/icon_arrowBottom_white2.svg'/>
        </div>
    )
}

export default ViewTypeSelector