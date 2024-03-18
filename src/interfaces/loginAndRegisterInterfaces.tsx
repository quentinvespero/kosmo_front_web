import { DatasInterfaces } from "./datasInterfaces"

export interface LoginAndRegisterProps{
    // selectedPanel: 'register'|'login'|'ask'
    pageSelection: () => void
}

export interface LoginAndRegisterButtonProps{
    buttonText: string
    setSelectedPanel?:LoginAndRegisterPanelsProps['setSelectedPanel']
    pageSelection?: LoginAndRegisterProps['pageSelection']
    selectedPanel?: 'register'|'login'|'ask'
    fieldsValues?:LoginAndRegisterPanelsProps['fieldsValues']
}

export interface LoginAndRegisterPanelsProps {
    setSelectedPanel:React.Dispatch<React.SetStateAction<'register'|'login'|'ask'>>
    fieldsValues?:DatasInterfaces['users']|null
    // setFieldsValues?:(type:DatasInterfaces['users']) => void
    setFieldsValues?:(type:DatasInterfaces['users']) => void
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