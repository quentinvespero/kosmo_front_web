import React from 'react'
import ButtonType3 from '../buttons/ButtonType3'

const SuggestionSection = () => {
    return (
        <div className='suggestionSection'>
            <h2>Suggestions</h2>
            <div className="suggestionSection-people">
                <p>friends</p>
                <div className="suggestionSection-peopleElements">
                    <ButtonType3 buttonText='lorem ipsum'/>
                    <ButtonType3 buttonText='lorem ipsum'/>
                    <ButtonType3 buttonText='lorem ipsum'/>
                </div>
            </div>
            <div className="suggestionSection-feed">
                <p>feed</p>
                <div className="suggestionSection-feedElements">
                    <ButtonType3 buttonText=''/>
                    <ButtonType3 buttonText=''/>
                    <ButtonType3 buttonText=''/>
                    <ButtonType3 buttonText=''/>
                </div>
            </div>
        </div>
    )
}

export default SuggestionSection