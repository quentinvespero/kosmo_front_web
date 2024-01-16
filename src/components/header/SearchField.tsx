import React, { useState, useRef } from 'react'
import ButtonType1 from '../buttons/ButtonType1'
import TextField from '../textComponents/TextField'
import { SearchFieldProps } from '../../interfaces/headerInterfaces'

const SearchField: React.FC<SearchFieldProps> = ({ setIsSearchFieldSelectedOnMobile, isSearchFieldSelectedOnMobile }) => {

    const ref = useRef<HTMLDivElement>(null)

    const handleClickOnSearchField = () => {
        if (setIsSearchFieldSelectedOnMobile) {
            setIsSearchFieldSelectedOnMobile(true)
        }
    }

    React.useEffect(() => {
        const handleDocumentClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target) && setIsSearchFieldSelectedOnMobile) {
                console.log('nia nia nia')
                setIsSearchFieldSelectedOnMobile(false)
            }
        }

        document.addEventListener("click", handleDocumentClick)

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleDocumentClick)
        }
    }, [setIsSearchFieldSelectedOnMobile])

    return (
        <div className="searchField">
            <input type='search' placeholder='search' onClick={handleClickOnSearchField} />
            {/* <TextField placeholder='search'/> */}
            {/* <textarea name="" id="" cols={15} rows={1} placeholder='search'></textarea> */}
            <ButtonType1 interactionType='search' />
        </div>
    )
}

export default SearchField