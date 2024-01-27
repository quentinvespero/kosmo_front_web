import React, { useEffect, useState } from 'react'
import TrendSection from './TrendSection'
import SuggestionSection from './SuggestionSection'
import jsonData from '../../assets/bdd.json'
import { RightPanelContent } from '../../interfaces/datasInterfaces'
import { RightPanelProps } from '../../interfaces/rightPanelInterfaces'
import HideRightPanelButton from '../buttons/HideRightPanelButton'
import { delayHidingElementDisplayProperty } from '../../functions/delayedToggle'

const RightPanel:React.FC<RightPanelProps> = ({}) => {

    const [datas, setDatas] = useState<RightPanelContent | null>(null)

    const [isRightPanelVisible, setIsRightPanelVisible] = useState(true)

    const displayProperty = delayHidingElementDisplayProperty(isRightPanelVisible, 210)

    useEffect(() => {
        setDatas(jsonData.rightPanelContent[0])
    },[])

    return (
        <div className='rightPanel'>
            <HideRightPanelButton isRightPanelVisible={isRightPanelVisible} setIsRightPanelVisible={setIsRightPanelVisible}/>
            <div 
                className={`rightPanel-elements ${isRightPanelVisible ? 'rightPanel-elements-visible' : 'rightPanel-elements-hidden'}`}
                style={{
                    display: displayProperty
                }}
            >
                {datas && <TrendSection datas={datas}/>}
                {datas && <SuggestionSection datas={datas}/>}
            </div>
        </div>
    )
}

export default RightPanel