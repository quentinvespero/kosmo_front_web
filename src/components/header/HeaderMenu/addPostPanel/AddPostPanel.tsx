import React, { useState } from 'react'
import ButtonWithIcon from '../../../buttons/ButtonWithIcon'
import AddPostPanelInnerSection from './AddPostPanelInnerSection'
import AddPostPanelSectionButton from './AddPostPanelButton'
import { AddPostPanelInnerSectionProps } from '../../../../interfaces/addPostPanelInterfaces'

const AddPostPanel = () => {

    const [addPostPanelSelectedInnerSection, setAddPostPanelSelectedInnerSection] = useState<AddPostPanelInnerSectionProps['addPostPanelSelectedInnerSection']>('text')

    return (
        <div className='addPostPanel'>
            <div className="addPostPanel-section1">
                <div className="addPostPanel-mediaButtons">
                    <AddPostPanelSectionButton 
                        buttonIcon='icon_photo_white2' 
                        buttonText='addPostPanelSectionButton-photo' 
                        setAddPostPanelSelectedInnerSection={setAddPostPanelSelectedInnerSection}
                        buttonPurpose='media'
                    />
                    <AddPostPanelSectionButton 
                        buttonIcon='icon_video_white2' 
                        buttonText='addPostPanelSectionButton-video' 
                        setAddPostPanelSelectedInnerSection={setAddPostPanelSelectedInnerSection}
                        buttonPurpose='media'
                    />
                    <AddPostPanelSectionButton 
                        buttonIcon='icon_poll_white2' 
                        buttonText='addPostPanelSectionButton-poll' 
                        setAddPostPanelSelectedInnerSection={setAddPostPanelSelectedInnerSection}
                        buttonPurpose='poll'
                    />
                </div>
                <AddPostPanelInnerSection addPostPanelSelectedInnerSection={addPostPanelSelectedInnerSection} setAddPostPanelSelectedInnerSection={setAddPostPanelSelectedInnerSection}/>
            </div>
            <div className="addPostPanel-section2">
                <div className="addPostPanel-elements-buttons">
                    <AddPostPanelSectionButton 
                        buttonIcon='icon_drafts_white2' 
                        buttonText='addPostPanelSectionBottomDraft-drafts' 
                        setAddPostPanelSelectedInnerSection={setAddPostPanelSelectedInnerSection}
                        buttonPurpose='draft'
                    />
                    {/* <AddPostPanelSectionButton buttonIcon='icon_arrow3_white2' buttonText='addPostPanelSectionBottomPost-Post' addPostPanelSelectedInnerSection={addPostPanelSelectedInnerSection} setAddPostPanelSelectedInnerSection={setAddPostPanelSelectedInnerSection}/> */}
                    {/* <ButtonWithIcon buttonIcon='icon_drafts_white2' buttonText='addPostPanelSectionBottomDraft-drafts'/> */}
                    <ButtonWithIcon buttonIcon='icon_arrow3_white2' buttonText='addPostPanelSectionBottomPost-Post'/>
                </div>
            </div>
        </div>
    )
}

export default AddPostPanel