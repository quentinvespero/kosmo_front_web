import React from 'react'
import ButtonType3 from '../buttons/ButtonType3'
import { SuggestionSectionProps } from '../../interfaces/rightPanelInterfaces'

const SuggestionSection: React.FC<SuggestionSectionProps> = ({ datas }) => {
    return (
        <div className='suggestionSection'>
            <h2>Suggestions</h2>
            <div className="suggestionSection-friends">
                <p>friends</p>
                <div className="suggestionSection-friendsElements">
                    {datas &&
                        datas.suggestions.length > 0 &&
                        datas.suggestions[0].friends &&
                        datas.suggestions[0].friends.map((friend, index) => (
                            <ButtonType3 key={index} buttonText={friend.friendName} buttonType='button-friends'/>
                        ))}
                </div>
            </div>
            <div className="suggestionSection-feed">
                <p>feed</p>
                <div className="suggestionSection-feedElements">
                    {datas &&
                        datas.suggestions.length > 0 &&
                        datas.suggestions[1].feeds &&
                        datas.suggestions[1].feeds.map((feed, index) => (
                            <ButtonType3 key={index} buttonText={feed.feedName} buttonType='button-feeds'/>
                        ))}
                </div>
            </div>
        </div>
    )
}


export default SuggestionSection