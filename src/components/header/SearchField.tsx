import React from 'react'
import SearchFieldButton from './SearchFieldButton'

const SearchField = () => {
    return (
        <div className="searchField">
            <input type='search' placeholder='search' />
            <SearchFieldButton/>
        </div>
    )
}

export default SearchField