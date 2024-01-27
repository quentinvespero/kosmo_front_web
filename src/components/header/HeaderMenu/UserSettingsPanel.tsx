import React from 'react'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'

const UserSettingsPanel = () => {
    return (
        <div className='userSettingsPanel'>
            <ButtonWithIcon buttonText='manage_feeds' buttonIcon='icon_manageFeeds_white2'/>
            <ButtonWithIcon buttonText='bookmarks' buttonIcon='icon_bookmarks_white2'/>
            <ButtonWithIcon buttonText='settings' buttonIcon='icon_settings_white2'/>
        </div>
    )
}

export default UserSettingsPanel