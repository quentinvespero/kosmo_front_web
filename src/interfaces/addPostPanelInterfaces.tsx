import { ButtonWithIconProps } from "./buttonsInterfaces"

export interface AddPostPanelInnerSectionProps {
    addPostPanelSelectedInnerSection: 'media'|'text'|'poll'|'draft'
    // below, we indicate that setAddPostPanelSelectedInnerSection is of type react setStateAction and can take the values enumerated in addPostPanelSelectedInnerSection
    setAddPostPanelSelectedInnerSection?: React.Dispatch<React.SetStateAction<AddPostPanelInnerSectionProps['addPostPanelSelectedInnerSection']>>
}

export interface AddPostPanelButtonProps {
    buttonIcon:ButtonWithIconProps['buttonIcon']
    buttonText:ButtonWithIconProps['buttonText']
    addPostPanelSelectedInnerSection?:AddPostPanelInnerSectionProps['addPostPanelSelectedInnerSection']
    setAddPostPanelSelectedInnerSection: AddPostPanelInnerSectionProps['setAddPostPanelSelectedInnerSection']
    buttonPurpose: AddPostPanelInnerSectionProps['addPostPanelSelectedInnerSection']
}