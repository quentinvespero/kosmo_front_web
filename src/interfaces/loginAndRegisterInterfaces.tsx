import { DatasInterfaces, UserBaseInformations } from "./datasInterfaces"

export interface LoginAndRegisterProps{
    // selectedPanel: 'register'|'login'|'ask'
    pageSelection: () => void
}

export interface LoginAndRegisterButtonProps{
    // buttonText: string
    buttonText: 'enter' | 'return' | 'yes' | 'no' | 'register' | 'login'
    setSelectedPanel?:LoginAndRegisterPanelsProps['setSelectedPanel']
    pageSelection?: LoginAndRegisterProps['pageSelection']
    selectedPanel?: 'register'|'login'|'ask'
    fieldsValues?:LoginAndRegisterPanelsProps['fieldsValues']
}

export interface LoginAndRegisterPanelsProps {
    setSelectedPanel:React.Dispatch<React.SetStateAction<'register'|'login'|'ask'>>
    fieldsValues?:Partial<UserBaseInformations | null>
    // setFieldsValues?:(type:UserBaseInformations | null) => void
    setFieldsValues?:React.Dispatch<React.SetStateAction<Partial<UserBaseInformations | null>>>
}

export interface LoginAndRegisterFieldProps {
    fieldType: 'text' | 'password' | 'date'
    placeHolderValue:string
    textDescription:string
    // fieldsValues?:LoginAndRegisterPanelsProps['fieldsValues']
    // setFieldsValues?:LoginAndRegisterPanelsProps['setFieldsValues']
    onChange: React.ChangeEventHandler<HTMLElement>
    name: 'username' | 'mailAddress' | 'password' | 'password2' | 'birthdate'
}