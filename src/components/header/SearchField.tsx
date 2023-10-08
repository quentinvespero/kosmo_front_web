import React from 'react'
import ArrowButton from '../buttons/ArrowButton'

const SearchField = () => {
    return (
        <div className="searchField">
            <input type='search' placeholder='search' />
            <ArrowButton interactionType='search'/>
        </div>
    )
}

export default SearchField