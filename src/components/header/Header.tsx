import React from 'react'
import PointCounter from './PointCounter'
import { ScreenProps } from '../../interfaces/interfaces'
import SearchField from './SearchField'
import ButtonType1 from '../buttons/ButtonType1'
import { HeaderProps } from '../../interfaces/headerInterfaces'
import HeaderMenu from './HeaderMenu'

const Header:React.FC<HeaderProps & ScreenProps> = ({ headerScreen, screenFormat, selectedFeed }) => {
    return (
        <div className={`header ${headerScreen === 'entryPage' && 'header-entryPage'}`}>

            {headerScreen === 'home' && 
                <div 
                    className="innerHeader-home" 
                    style={{
                        flexDirection: screenFormat === 'mobile' ? 'column' : 'row',
                        rowGap: screenFormat === 'mobile' ? '3rem' : '',
                        alignItems: screenFormat === 'mobile' ? 'normal' : 'center',
                        justifyContent: screenFormat !== 'mobile' ? 'center' : '',
                        marginTop: screenFormat === 'mobile' ? '2rem' : ''
                    }}
                >
                    {/* {screenFormat !== 'mobile' && <h1>Kosmo Project.</h1>} */}
                    <h1 style={{alignSelf:'center'}}>Kosmo Project.</h1>
                    <div className="innerHeader-section1">
                        {screenFormat === 'mobile' && <SearchField/>}
                        {/* {selectedFeed && selectedFeed.includes('feed') && screenFormat === 'mobile' && <PointCounter/>} */}
                        {screenFormat !== 'mobile' && <HeaderMenu screenFormat={screenFormat}/>}
                    </div>
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