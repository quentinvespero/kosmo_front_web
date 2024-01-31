import React, { useState } from 'react'
import ButtonWithIcon from '../../../buttons/ButtonWithIcon'
import AddPostInnerSection from './AddPostInnerSection'
import AddPostSectionButton from '../../../buttons/AddPostSectionButton'
import { AddPostInnerSectionProps } from '../../../../interfaces/addPostInterfaces'

const AddPost = () => {

    const [addPostSelectedInnerSection, setAddPostSelectedInnerSection] = useState<AddPostInnerSectionProps['addPostSelectedInnerSection']>('text')

    return (
        <div className='addPost'>
            <div className="addPost-section1">
                <div className="addPost-mediaButtons">
                    <AddPostSectionButton 
                        buttonIcon='icon_photo_white2' 
                        buttonText='addPostSectionButton-photo' 
                        setAddPostSelectedInnerSection={setAddPostSelectedInnerSection}
                        buttonPurpose='media'
                    />
                    <AddPostSectionButton 
                        buttonIcon='icon_video_white2' 
                        buttonText='addPostSectionButton-video' 
                        setAddPostSelectedInnerSection={setAddPostSelectedInnerSection}
                        buttonPurpose='media'
                    />
                    <AddPostSectionButton 
                        buttonIcon='icon_poll_white2' 
                        buttonText='addPostSectionButton-poll' 
                        setAddPostSelectedInnerSection={setAddPostSelectedInnerSection}
                        buttonPurpose='poll'
                    />
                </div>
                <AddPostInnerSection addPostSelectedInnerSection={addPostSelectedInnerSection} setAddPostSelectedInnerSection={setAddPostSelectedInnerSection}/>
            </div>
            <div className="addPost-section2">
                <div className="addPost-elements-buttons">
                    <AddPostSectionButton 
                        buttonIcon='icon_drafts_white2' 
                        buttonText='addPostSectionBottomDraft-drafts' 
                        setAddPostSelectedInnerSection={setAddPostSelectedInnerSection}
                        buttonPurpose='draft'
                    />
                    {/* <AddPostSectionButton buttonIcon='icon_arrow3_white2' buttonText='addPostSectionBottomPost-Post' addPostSelectedInnerSection={addPostSelectedInnerSection} setAddPostSelectedInnerSection={setAddPostSelectedInnerSection}/> */}
                    {/* <ButtonWithIcon buttonIcon='icon_drafts_white2' buttonText='addPostSectionBottomDraft-drafts'/> */}
                    <ButtonWithIcon buttonIcon='icon_arrow3_white2' buttonText='addPostSectionBottomPost-Post'/>
                </div>
            </div>
        </div>
    )
}

export default AddPost