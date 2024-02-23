export interface LoginAndRegisterProps{
    // selectedPanel: 'register'|'login'|'ask'
    pageSelection: () => void
}

export interface LoginAndRegisterButtonProps{
    buttonText: string
    setSelectedPanel?:LoginAndRegisterPanelsProps['setSelectedPanel']
    pageSelection?: LoginAndRegisterProps['pageSelection']
}

export interface LoginAndRegisterPanelsProps {
    setSelectedPanel:React.Dispatch<React.SetStateAction<'register'|'login'|'ask'>>
}

export interface LoginAndRegisterFieldProps {
    fieldType: 'text' | 'password'
    placeHolderValue:string
    textDescription:string
}