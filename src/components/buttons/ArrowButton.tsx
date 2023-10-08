import { UpDownVoteElementsProps } from "../../interfaces/interfaces"

const ArrowButton: React.FC<UpDownVoteElementsProps> = ({interactionType}) => {

    // we map the class that will take effect, depending on the value of interactionType props
    const interactionTypeClassMap = {
        upvote: 'arrowButton-upvote',
        downvote: 'arrowButton-downvote',
        search: 'arrowButton-search'
    }

    // defining the classes that will take effect for the arrow button div, with arrowButton by default, and then, depending on the given props, a class that will be searched in the interactionTypeClassMap object
    const interactionTypeClass = `arrowButton ${interactionType && interactionTypeClassMap[interactionType]}`

    return (
        <div className={interactionTypeClass}>
            <svg width="17" height="17" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 1.33331V17.6666M8.5 1.33331L15.5 8.33331M8.5 1.33331L1.5 8.33331" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    )
}
 
export default ArrowButton