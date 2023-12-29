import React from 'react'
import ButtonType3 from '../buttons/ButtonType3'
import { SuggestionSectionProps } from '../../interfaces/rightPanelInterfaces'
import { DatasInterfaces } from '../../interfaces/datasInterfaces'

const SuggestionSection:React.FC<SuggestionSectionProps & DatasInterfaces> = ({datas}) => {

    return (
        <div className='suggestionSection'>
            <h2>Suggestions</h2>
            <div className="suggestionSection-people">
                <p>friends</p>
                <div className="suggestionSection-peopleElements">
                    {datas && datas.suggestions.friends.map((friend, index) => (
                        <ButtonType3 key={index} buttonText={friend.friendName} />
                    ))}
                </div>
            </div>
            <div className="suggestionSection-feed">
                <p>feed</p>
                <div className="suggestionSection-feedElements">
                    {datas && datas.suggestions.feeds.map((feed, index) => (
                        <ButtonType3 key={index} buttonText={feed.feedName} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SuggestionSection