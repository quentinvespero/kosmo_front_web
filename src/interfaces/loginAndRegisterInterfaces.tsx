export interface LoginAndRegisterProps{
    selectedPanel: 'register'|'login'|'ask'
}

export interface LoginAndRegisterButtonProps{
    buttonText: string
    setSelectedPanel?:LoginAndRegisterPanelsProps['setSelectedPanel']
}

export interface LoginAndRegisterPanelsProps {
    setSelectedPanel:React.Dispatch<React.SetStateAction<LoginAndRegisterProps['selectedPanel']>>
}

export interface LoginAndRegisterFieldProps {
    fieldType: 'text' | 'password'
    placeHolderValue:string
    textDescription:string
}