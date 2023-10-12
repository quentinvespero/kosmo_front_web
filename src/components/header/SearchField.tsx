import React from 'react'
import ButtonType1 from '../buttons/ButtonType1'

const SearchField = () => {
    return (
        <div className="searchField">
            <input type='search' placeholder='search' />
            <ButtonType1 interactionType='search'/>
        </div>
    )
}

export default SearchField