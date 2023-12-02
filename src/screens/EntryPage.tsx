import ButtonType1 from "../components/buttons/ButtonType1"
import Header from "../components/header/Header"

const EntryPage = () => {

    // used to follow if the "enter kosmo" button is being hovered or not
    // const [isButtonHovered, setButtonIsHovered] = useState(false)

    // const handleButtonHovering = () => {
    //     setButtonIsHovered(true)
    // }

    // const handleButtonLeaving = () => {
    //     setButtonIsHovered(false)
    // }

    return (
        <div className="entryPage">
            <div className='entryPage-colorLight'></div>
            <div className="entryPage-backgroundLayer">
                <div className="entryPage-innerElements">
                    <Header headerScreen="entryPage"/>
                    <div className="entryPage-centerSection">
                        <div className="entryPage-sideSection">
                            <p>Get into the Field.</p>
                            <br />
                            <p>Kosmo aims to be a quality-focused social network, providing a comfortable and enriching space.</p>
                            <p>A space where your time would feel well-spent.</p>
                            <br />
                            <p>Our features are centered on human psychology to reduce online influence and hatred, and enhance post quality.</p>
                        </div>
                        <div 
                            className='entryPage-buttonSection' 
                            // onMouseEnter={handleButtonHovering} 
                            // onMouseLeave={handleButtonLeaving}
                        >
                            <ButtonType1 buttonText='Enter Kosmo_' interactionType="entryButton"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EntryPage