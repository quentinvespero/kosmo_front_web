import React, { useRef } from 'react'
import ButtonType1 from '../buttons/ButtonType1'
import TextField from '../textComponents/TextField'
import { SearchFieldProps } from '../../interfaces/headerInterfaces'
import outsideClick from '../../functions/outsideClick'
import { ScreenProps } from '../../interfaces/interfaces'

const SearchField: React.FC<SearchFieldProps & ScreenProps> = ({ setIsSearchFieldSelectedOnMobile, screenFormat, isSearchFieldSelectedOnMobile }) => {

    const ref = useRef<HTMLDivElement>(null)

    // here, outsideClick function takes two parameters, the ref, and a callback, which means everything that is after "ref," here, will be executed if outsideClick() execute the instruction "callback()" 
    outsideClick(ref, () => {
        if (setIsSearchFieldSelectedOnMobile) {
            setIsSearchFieldSelectedOnMobile(false)
        }
    })

    const handleClickOnSearchField = () => {
        if (setIsSearchFieldSelectedOnMobile) {
            setIsSearchFieldSelectedOnMobile(true)
        }
    }

    return (
        <div 
            className="searchField" 
            ref={ref}
            style={ 
                screenFormat && screenFormat === 'mobile' 
                ? {
                    width: isSearchFieldSelectedOnMobile ? '85%' : '50%',
                    placeContent: isSearchFieldSelectedOnMobile ? 'space-between' : 'space-between',
                    // border: isSearchFieldSelectedOnMobile ? 'solid .2rem #5c5c5ca8' : ''
                    boxShadow: isSearchFieldSelectedOnMobile ? 'inset 0 0 0 .15rem #5c5c5ca8' : ''
                } 
                : {}
            }
        >
            <input 
                type='search' 
                placeholder='search' 
                onClick={handleClickOnSearchField} 
                style={
                    screenFormat && screenFormat === 'mobile' 
                    ? {
                        maxWidth: isSearchFieldSelectedOnMobile ? '80%' : '75%'
                    }
                    : {}
                }
            />
            {/* <TextField placeholder='search'/> */}
            {/* <textarea name="" id="" cols={15} rows={1} placeholder='search'></textarea> */}
            <ButtonType1 interactionType='search' />
        </div>
    )
}

export default SearchField