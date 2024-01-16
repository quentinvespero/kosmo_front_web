import React, { useState } from 'react'
import ButtonType1 from '../buttons/ButtonType1'
import TextField from '../textComponents/TextField'
import { SearchFieldProps } from '../../interfaces/headerInterfaces'

const SearchField:React.FC<SearchFieldProps> = ({ setIsSearchFieldSelectedOnMobile, isSearchFieldSelectedOnMobile }) => {

    const handleClickOnSearchField = () => {
        if (setIsSearchFieldSelectedOnMobile) {
            setIsSearchFieldSelectedOnMobile(!isSearchFieldSelectedOnMobile)
        }
    }

    return (
        <div className="searchField">
            <input type='search' placeholder='search' onClick={handleClickOnSearchField}/>
            {/* <TextField placeholder='search'/> */}
            {/* <textarea name="" id="" cols={15} rows={1} placeholder='search'></textarea> */}
            <ButtonType1 interactionType='search'/>
        </div>
    )
}

export default SearchField