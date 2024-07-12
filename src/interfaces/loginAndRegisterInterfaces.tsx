// import { DatasInterfaces, UserBaseInformations } from "./datasInterfaces"
// import { ScreenProps } from "./interfaces"

// export interface LoginAndRegisterProps{
//     // selectedPanel: 'register'|'login'|'ask'
//     setCurrentPage: 
// }

// export interface LoginAndRegisterButtonProps{
//     // buttonText: string
//     buttonText: 'enter' | 'return' | 'yes' | 'no' | 'register' | 'login'
//     setSelectedPanel?:LoginAndRegisterPanelsProps['setSelectedPanel']
//     setCurrentPage?: LoginAndRegisterProps['setCurrentPage']
//     selectedPanel?: 'register'|'login'|'ask'
//     fieldsValues?:LoginAndRegisterPanelsProps['fieldsValues']
// }

// export interface LoginAndRegisterPanelsProps {
//     setSelectedPanel:React.Dispatch<React.SetStateAction<'register'|'login'|'ask'>>
//     fieldsValues?:Partial<UserBaseInformations | null>
//     setFieldsValues?:React.Dispatch<React.SetStateAction<Partial<UserBaseInformations | null>>>
//     screenFormat?: ScreenProps['screenFormat']
// }

// export interface LoginAndRegisterFieldProps {
//     fieldType: 'text' | 'password' | 'date'
//     placeHolderValue:string
//     textDescription:string
//     onChange: React.ChangeEventHandler<HTMLElement>
//     name: 'username' | 'mailAddress' | 'password' | 'password2' | 'birthdate'
// }