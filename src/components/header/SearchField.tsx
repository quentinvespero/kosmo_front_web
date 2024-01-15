import React from 'react'
import ButtonType1 from '../buttons/ButtonType1'

const SearchField = () => {
    return (
        <div className="searchField">
            {/* <input type='search' placeholder='search' /> */}
            <textarea name="" id="" placeholder='search'></textarea>
            <ButtonType1 interactionType='search'/>
        </div>
    )
}

export default SearchField