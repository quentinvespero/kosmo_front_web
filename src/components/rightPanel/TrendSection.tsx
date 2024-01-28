import React from 'react'
import ButtonType2 from '../buttons/ButtonType2'
import { TrendSectionProps } from '../../interfaces/rightPanelInterfaces'

const TrendSection:React.FC<TrendSectionProps> = ({datas}) => {
    return (
        <div className='trendSection'>
            <h2>Trending at the moment</h2>
            <div className="trendSection-elements">
                {datas && 
                datas.trending.length > 0 &&
                datas.trending.map((trend, index) => (
                    <ButtonType2 key={index} buttonType='button-trend' buttonText={trend.trendName}/>
                ))}
            </div>
        </div>
    )
}

export default TrendSection