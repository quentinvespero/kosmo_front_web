import ButtonWithImage from "../buttons/ButtonWithImage"

const FallbackLoading = () => {
    return (
        <div className="fallbackLoading">
            {/* <p>Loading...</p> */}
            <ButtonWithImage imageName="loading_white2.svg" text="loading..." />
        </div>
    )
}

export default FallbackLoading