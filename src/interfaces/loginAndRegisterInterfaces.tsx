export interface LoginAndRegisterProps{
    haveAnAccount: true | false | null
}

export interface LoginAndRegisterButtonProps{
    buttonText: string
    // haveAnAccount:boolean | null
    setHaveAnAccount?: React.Dispatch<React.SetStateAction<LoginAndRegisterProps['haveAnAccount']>>
}

export interface LoginAndRegisterAskPanelProps{
    setHaveAnAccount:LoginAndRegisterButtonProps['setHaveAnAccount']
}