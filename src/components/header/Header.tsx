import React from 'react'
import PointCounter from './PointCounter'
import { HeaderProps } from '../../interfaces/interfaces'
import SearchField from './SearchField'
import ButtonType1 from '../buttons/ButtonType1'

const Header:React.FC<HeaderProps> = ({ headerScreen, mobileLayout }) => {
    return (
        <div className={`header ${headerScreen === 'entryPage' && 'header-entryPage'}`}>

            {headerScreen === 'home' && 
                <div className="innerHeader-home">
                    {!mobileLayout && <h1>Home</h1>}
                    {mobileLayout && <SearchField/>}
                    <PointCounter/>
                </div>
            }

            {headerScreen === 'entryPage' && 
                <div className="innerHeader-entryPage">
                    <h1 className="header-entryPage-title">Kosmo Project.</h1>
                    {/* <div className="header-entryPage-connectSection">
                        <ButtonType1 buttonText='login' interactionType='login'/>
                        <ButtonType1 buttonText='register' interactionType='register'/>
                    </div> */}
                </div>
            }
        </div>
    )
}

export default Header