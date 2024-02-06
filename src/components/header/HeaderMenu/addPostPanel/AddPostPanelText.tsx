import React, { ChangeEvent, useEffect, useState } from 'react'
import { AddPostPanelInnerSectionProps } from '../../../../interfaces/addPostPanelInterfaces'

const AddPostPanelText:React.FC<AddPostPanelInnerSectionProps> = ({addPostPanelSelectedInnerSection}) => {

    // the amount of characters tat can be used to make a post
    const maxCharacter = 500

    // the text content of the post
    const [postText, setPostText] = useState('')

    // the remaining characters
    const [usedCharacters, setUsedCharacters] = useState(maxCharacter)

    // setting the value of the amount of characters used
    useEffect(() => {
        setUsedCharacters(postText.length)
    }, [postText])

    // setting the text value inside postText
    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostText(e.target.value)
    }

    return (
        <div className='addPostPanelText'>
            <textarea
                name="test"
                placeholder='express yourself here..'
                value={postText}
                maxLength={maxCharacter}
                onChange={handleTextChange}
                style={{paddingBottom: usedCharacters > 449 ? '1.8rem' : ''}}
            ></textarea>
            {usedCharacters > 449 && 
                <div 
                    className="characterCount"
                    style={{background: usedCharacters === 500 ? '#972d3b' : ''}}
                >
                    {usedCharacters === 500 && <div className="characterCount-text">limit reached :</div>}
                    <div className="characterCount-countdown">{usedCharacters} / {maxCharacter}</div>
                </div>
            }
        </div>
    )
}

export default AddPostPanelText