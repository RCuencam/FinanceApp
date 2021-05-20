import {useState} from "react"

export const useForm=(state={})=>
{
    const [values,setValues]=useState(state)

    const handleInputChange=({target})=>
    {
        setValues({
            ...values,
            [target.name]:target.value
        })
    }

    const reset=()=>
    {
        setValues(state);
    }

    return [values,handleInputChange,reset];
}