import React, { useEffect, useState } from 'react'
import TrendSection from './TrendSection'
import SuggestionSection from './SuggestionSection'
import jsonData from '../../assets/bdd.json'
import { RightPanelContent } from '../../interfaces/datasInterfaces'

const RightPanel = () => {

    const [datas, setDatas] = useState<RightPanelContent | null>(null)

    useEffect(() => {
        setDatas(jsonData.rightPanelContent[0])
    },[])

    return (
        <div className='rightPanel'>
            {datas && <TrendSection datas={datas}/>}
            {datas && <SuggestionSection datas={datas}/>}
        </div>
    )
}

export default RightPanel