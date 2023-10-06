import React from 'react'

const SearchField = () => {
    return (
        <div className="searchField">
            <input type='search' placeholder='search' />
            <button>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0001 6.99981H1.00012H15.0001ZM9.00012 12.9998L15.0001 6.99981L9.00012 12.9998ZM9.00012 0.999809L15.0001 6.99981L9.00012 0.999809Z" fill="#7CB1FF" />
                    <path d="M15.0001 6.99981H1.00012M15.0001 6.99981L9.00012 12.9998M15.0001 6.99981L9.00012 0.999809" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    )
}

export default SearchField