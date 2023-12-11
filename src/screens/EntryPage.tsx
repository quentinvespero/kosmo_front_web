import React from "react"
import ButtonType1 from "../components/buttons/ButtonType1"
import Header from "../components/header/Header"
import { EntryPageProps, ScreenProps } from "../interfaces/interfaces"

const EntryPage: React.FC<EntryPageProps & ScreenProps> = ({ pageSelection, animation }) => {

    // used to follow if the "enter kosmo" button is being hovered or not
    // const [isButtonHovered, setButtonIsHovered] = useState(false)

    // const handleButtonHovering = () => {
    //     setButtonIsHovered(true)
    // }

    // const handleButtonLeaving = () => {
    //     setButtonIsHovered(false)
    // }

    return (
        <div className={`entryPage ${animation ? 'screenAnimation-fadeOut' : ''}`}>
            {/* <div className='entryPage-colorLight'></div> */}
            <div className={`entryPage-colorLight ${animation && 'colorLight-off'}`}></div>
            <div className="entryPage-backgroundLayer">
                <div className="entryPage-innerElements">
                    <Header headerScreen="entryPage"/>
                    <div className="entryPage-centerSection">
                        <div 
                            className='entryPage-buttonSection' 
                            // onMouseEnter={handleButtonHovering} 
                            // onMouseLeave={handleButtonLeaving}
                            onClick={pageSelection}
                        >
                            <ButtonType1 buttonText='Enter Kosmo_' interactionType="entryButton"/>
                        </div>
                    </div>
                    <div className="entryPage-description">
                        <p>Get into the Field.</p>
                        <br />
                        <p>Kosmo aims to be a quality-focused social network, providing a comfortable and enriching space.</p>
                        <p>A space where your time would feel well-spent.</p>
                        <br />
                        <p>By putting humans first in our reflections, I designed the features to promote online civility and reduce online influence and hatred.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntryPage