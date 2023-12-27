import React from 'react'
import PointCounter from './PointCounter'
import { HeaderProps, ScreenProps } from '../../interfaces/interfaces'
import SearchField from './SearchField'
import ButtonType1 from '../buttons/ButtonType1'

const Header:React.FC<HeaderProps & ScreenProps> = ({ headerScreen, screenFormat }) => {
    return (
        <div className={`header ${headerScreen === 'entryPage' && 'header-entryPage'}`}>

            {headerScreen === 'home' && 
                <div className="innerHeader-home">
                    {screenFormat !== 'mobile' && <h1>Home</h1>}
                    {screenFormat === 'mobile' && <SearchField/>}
                    <PointCounter/>
                </div>
            }

            {headerScreen === 'entryPage' && 
                <div className="innerHeader-entryPage">
                    <h1 className="header-entryPage-title">Kosmo Project.</h1>
                </div>
            }
        </div>
    )
}

export default Header