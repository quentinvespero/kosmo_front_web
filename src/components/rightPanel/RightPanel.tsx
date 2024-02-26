import React, { useEffect, useState } from 'react'
import TrendSection from './TrendSection'
import SuggestionSection from './SuggestionSection'
import jsonData from '../../assets/bdd.json'
import { RightPanelContent } from '../../interfaces/datasInterfaces'
import { RightPanelProps } from '../../interfaces/rightPanelInterfaces'
import HideRightPanelButton from '../buttons/HideRightPanelButton'
import { delayHidingElementDisplayProperty } from '../../functions/delayedToggle'
import Post from '../post/Post'

const RightPanel:React.FC<RightPanelProps> = ({isToggled, idSelectedPost, selectedViewType }) => {

    const [datas, setDatas] = useState<RightPanelContent | null>(null)

    const [isRightPanelVisible, setIsRightPanelVisible] = useState(true)

    const displayProperty = delayHidingElementDisplayProperty(isRightPanelVisible, 210)

    useEffect(() => {
        setDatas(jsonData.rightPanelContent[0])
    },[])

    return (
        <div 
            className={`rightPanel 
                ${idSelectedPost ? 'rightPanel-postDetails' : ''}
                ${selectedViewType === 'detailsView' ? 'rightPanel-detailsView' : ''}
            `}
        >
            <HideRightPanelButton isRightPanelVisible={isRightPanelVisible} setIsRightPanelVisible={setIsRightPanelVisible}/>
            <div 
                className={`rightPanel-elements ${isRightPanelVisible ? 'rightPanel-elements-visible' : 'rightPanel-elements-hidden'}`}
                style={{display: displayProperty}}
            >
                {idSelectedPost && <Post postId={idSelectedPost}/>}
                {!idSelectedPost && datas && <TrendSection datas={datas}/>}
                {!idSelectedPost && datas && <SuggestionSection datas={datas}/>}
            </div>
        </div>
    )
}

export default RightPanel