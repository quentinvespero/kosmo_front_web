import React, { useState } from 'react'
import PointCounter from './PointCounter'
import { ScreenProps } from '../../interfaces/interfaces'
import SearchField from './SearchField'
import { HeaderProps } from '../../interfaces/headerInterfaces'
import HeaderMenu from './HeaderMenu'

const Header:React.FC<HeaderProps & ScreenProps> = ({ screenFormat, selectedFeed, currentPage }) => {

    // following the state of the search field. When the user select the search field while being on mobile format, it should hide the counter component, so that way the search field can go wider
    const [isSearchFieldSelectedOnMobile, setIsSearchFieldSelectedOnMobile] = useState(false)

    return (
        <div 
            className={`header ${currentPage === 'entry' ? 'header-entryPage' : ''}`}
            style={
                currentPage ==='entry' ? {marginTop: currentPage === 'entry' && screenFormat === 'mobile' ? '5rem' : '2.5rem'} : {}
            }
        >

            {currentPage === 'home' && 
                <div 
                    className="innerHeader-home" 
                    style={{
                        flexDirection: screenFormat === 'mobile' ? 'column' : 'row',
                        rowGap: screenFormat === 'mobile' ? '3rem' : '',
                        alignItems: screenFormat === 'mobile' ? 'normal' : 'center',
                        justifyContent: screenFormat !== 'mobile' ? 'space-between' : '',
                        marginTop: screenFormat === 'mobile' ? '2rem' : '',
                        margin: screenFormat !== 'mobile' ? '0 3rem 0 3rem' : '2rem 0rem 0 0rem'
                    }}
                >
                    <h1 className='projectTitle'>Kosmo Project.</h1>
                    <div 
                        className="innerHeader-section1"
                        style={{
                            alignSelf: screenFormat !=='mobile' ? 'flex-end' : 'auto',
                            // justifyContent: screenFormat ==='mobile' && isSearchFieldSelectedOnMobile ? 'center' : 'space-between'
                        }}
                    >
                        {screenFormat === 'mobile' && 
                            <SearchField 
                                setIsSearchFieldSelectedOnMobile={setIsSearchFieldSelectedOnMobile} 
                                screenFormat={screenFormat}
                                isSearchFieldSelectedOnMobile={isSearchFieldSelectedOnMobile}
                            />
                        }
                        
                        {selectedFeed && 
                            selectedFeed.includes('feed') &&
                            screenFormat === 'mobile' &&
                            // isSearchFieldSelectedOnMobile === false &&
                            <PointCounter 
                                screenFormat={screenFormat} 
                                isSearchFieldSelectedOnMobile={isSearchFieldSelectedOnMobile}/>
                        }
                        
                        {screenFormat !== 'mobile' && <HeaderMenu screenFormat={screenFormat}/>}
                    </div>
                </div>
            }

            {currentPage === 'entry' && 
                <div 
                    className="innerHeader-entryPage"
                    style={{
                        marginLeft: screenFormat !== 'mobile' ? '2rem' : '0rem',
                        justifyContent: screenFormat === 'mobile' ? 'center' : ''
                    }}
                >
                    <h1 className="header-entryPage-title">Kosmo Project.</h1>
                </div>
            }
        </div>
    )
}

export default Header