import React from 'react'
import ButtonType2 from '../buttons/ButtonType2'

const TrendSection = () => {
    return (
        <div className='trendSection'>
            <h2>Trending at the moment</h2>
            <div className="trendButtons">
                <ButtonType2 buttonType='button-trend' buttonText='#trend1'/>
                <ButtonType2 buttonType='button-trend' buttonText='#trend2'/>
                <ButtonType2 buttonType='button-trend' buttonText='#trend3'/>
            </div>
        </div>
    )
}

export default TrendSection