import React from "react"

export interface ButtonWithImageProps {
    buttonText?: string
    buttonImage?: string
    className?:string
    description?:string
}

////////////////////////////////////////////
// Guide Props
////////////////////////////////////////////
// buttonImage : give full name of file. Exemple : image1.png
// buttonText : 
// description : if not given, will use buttonText value
// className : can give the name of the component in which it is, so it will be named as such "buttonWithImage-componentName"

const ButtonWithImage:React.FC<ButtonWithImageProps> = ({buttonImage, buttonText, description, className}) => {

    // path of the assets
    const assetPath = './assets/'

    // defining the classes to apply
    const classesToApply = () => {
        
        let classes = 'buttonWithImage'

        if (className) classes += ` buttonWithImage-${className}`

        return classes
    }

    // determining which path to give to the assets depending on whether it is an icon (svg) or image (other formats)
    const pathToApply = () => {
        let path = assetPath

        if (buttonImage) {
            if (buttonImage.includes('svg')) path += 'icons/'
            else path += 'imgs/'
        }

        return path
    }
    
    return (
        <div className={classesToApply()} title={description ? description : buttonText}>
            {buttonImage && 
                <img 
                    src={`${pathToApply()}${buttonImage}`} 
                    alt={`${description ? description : buttonText}`}
                />
            }
            {buttonText && <p>{buttonText}</p>}
        </div>
    )
}

export default ButtonWithImage