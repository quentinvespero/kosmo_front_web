import React from 'react'
import ButtonWithIcon from '../../buttons/ButtonWithIcon'
import { HeaderMenuPanelProps } from '../../../interfaces/headerMenuInterfaces'

const UserSettingsPanel:React.FC<HeaderMenuPanelProps> = ({headerMenuPanelSelectedElement}) => {
    return (
        <div className='userSettingsPanel'>
            <ButtonWithIcon buttonText='userSettings-manage_feeds' buttonIcon='icon_manageFeeds_white2'/>
            <ButtonWithIcon buttonText='userSettings-bookmarks' buttonIcon='icon_bookmarks_white2'/>
            <ButtonWithIcon buttonText='userSettings-settings' buttonIcon='icon_settings_white2'/>
        </div>
    )
}

export default UserSettingsPanel