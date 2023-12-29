import React, { useEffect, useState } from 'react'
import TrendSection from './TrendSection'
import SuggestionSection from './SuggestionSection'
import jsonData from '../../assets/bdd.json'
import { DatasInterfaces } from '../../interfaces/datasInterfaces'

const RightPanel = () => {

    const [datas, setDatas] = useState<DatasInterfaces | null>(null)

    useEffect(() => {
        setDatas(jsonData.rightPanelContent[0])
        console.log('-----niania-----', datas)
    },[])

    return (
        <div className='rightPanel'>
            <TrendSection datas={datas}/>
            <SuggestionSection datas={datas}/>
        </div>
    )
}

export default RightPanel