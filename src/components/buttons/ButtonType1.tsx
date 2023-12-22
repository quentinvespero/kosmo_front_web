import React from 'react'
import { ButtonType1Props } from '../../interfaces/interfaces'

const ButtonType1: React.FC<ButtonType1Props> = ({buttonText, interactionType, isActive, onClick, mobileLayout}) => {

    // mapping the different svg version and classes to use depending on the value of the props interactionType
    const interactionTypeMap = {
        upvote:{
            class:'buttonType1-upvote',
            svg:<svg width="17" height="17" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 1.33331V17.6666M8.5 1.33331L15.5 8.33331M8.5 1.33331L1.5 8.33331" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        },
        downvote:{
            class:'buttonType1-downvote',
            svg:<svg width="17" height="17" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 1.33331V17.6666M8.5 1.33331L15.5 8.33331M8.5 1.33331L1.5 8.33331" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(180, 8.5, 8.5)" /></svg>
        },
        search:{
            class:'buttonType1-search',
            svg:<svg width="17" height="17" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 1.33331V17.6666M8.5 1.33331L15.5 8.33331M8.5 1.33331L1.5 8.33331" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="rotate(90, 8.5, 8.5)" /></svg>
        },
        comment:{
            class:'buttonType1-comment',
            svg:<svg width="17" height="17" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 20C12.78 20 14.5201 19.4722 16.0001 18.4832C17.4802 17.4943 18.6337 16.0887 19.3149 14.4442C19.9961 12.7996 20.1743 10.99 19.8271 9.24419C19.4798 7.49836 18.6226 5.89472 17.364 4.63604C16.1053 3.37737 14.5016 2.5202 12.7558 2.17294C11.01 1.82567 9.20038 2.0039 7.55585 2.68509C5.91131 3.36628 4.50571 4.51983 3.51677 5.99987C2.52784 7.47991 2 9.21997 2 11C2 12.488 2.36 13.891 3 15.127L2 20L6.873 19C8.109 19.64 9.513 20 11 20Z" stroke="#DDDDDD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        },
        theme:{
            class:'buttonType1-theme',
            svg:null
        },
        usual:{
            class:'buttonType1-usual',
            svg:null
        },
        login:{
            class:'buttonType1-login',
            svg:null
        },
        register:{
            class:'buttonType1-register',
            svg:null
        },
        entryButton:{
            class:'buttonType1-entryButton',
            svg:null
        }
    }

    // defining the classes that will take effect for the buttonType1 div
    const interactionTypeClass = `buttonType1 ${interactionType && interactionTypeMap[interactionType].class} ${isActive ? 'buttonType1-active' : ''}`

    return (
        <div className={interactionTypeClass} onClick={onClick}>
            
            {/* p element will show up only if buttonText has a value */}
            {buttonText && buttonText === 'Enter Kosmo_' 
                ? 
                <p>Enter Kosmo<span className="blinkingUnderscore">_</span></p>
                :
                <p>{buttonText}</p> 
            }

            {/* the image div will show up only if the object has a svg that is not null in interactionTypeMap */}
            {interactionType && interactionTypeMap[interactionType].svg && 
            <div className='buttonType1-image'>
                {interactionTypeMap[interactionType].svg}
            </div>}
        </div>
    )
}

export default ButtonType1