import { ButtonWithIconProps } from "./buttonsInterfaces"

export interface AddPostInnerSectionProps {
    addPostSelectedInnerSection: 'media'|'text'|'poll'|'draft'
    // below, we indicate that setAddPostSelectedInnerSection is of type react setStateAction and can take the values enumerated in addPostSelectedInnerSection
    setAddPostSelectedInnerSection?: React.Dispatch<React.SetStateAction<AddPostInnerSectionProps['addPostSelectedInnerSection']>>
}

export interface AddPostSectionButtonProps {
    buttonIcon:ButtonWithIconProps['buttonIcon']
    buttonText:ButtonWithIconProps['buttonText']
    addPostSelectedInnerSection?:AddPostInnerSectionProps['addPostSelectedInnerSection']
    setAddPostSelectedInnerSection: AddPostInnerSectionProps['setAddPostSelectedInnerSection']
    buttonPurpose: AddPostInnerSectionProps['addPostSelectedInnerSection']
}