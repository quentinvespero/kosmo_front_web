import { LoginAndRegisterPanelsProps } from '../../interfaces/loginAndRegisterInterfaces'

// function to store the value of the fields in the prop fieldsValues using setFieldsValues
export const handleFieldChange = (e:React.ChangeEvent<HTMLInputElement>, setFieldsValues:LoginAndRegisterPanelsProps['setFieldsValues']) => {
        
    // here, name and value are "e.target.name" and "e.target.value"
    const { name, value } = e.target

    // console.log(e.target.name, e.target.value)
    // console.log([name],value)

    // Skip password2 from being added to fieldsValues
    if (name === 'password2') {
        return
    }

    // Update the fieldsValues state by spreading the previous values and updating the changed value
    if (setFieldsValues) {
        
        // here, previousValueOfFieldsValues is the value of fieldsValues's state, before storing some new elements in it
        // if a property of the same name as [name] exist, its value will be updated by the new value
        // [name] is the name of the field (input) | value is the value of that field
        setFieldsValues(previousValueOfFieldsValues => ({
            // 1 - we get the values of current values in fieldsValues --> "...previousValueOfFieldsValues"
            // 2 - we add/update the new value to the previously gathered fieldsValues --> ", [name]: value"
            // the ... are spreading, used to gather the values of fieldsValues
            ...previousValueOfFieldsValues,[name]: value
        }))
    }
}