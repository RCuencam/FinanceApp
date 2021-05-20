import React,{useReducer,useEffect} from 'react'
import { OperationContext } from './OperationContext'
import { OperationReducer } from './OperationReducer'

const init=()=>
{
    return JSON.parse(localStorage.getItem('operations'))||[]
}

export const OperationProvider = ({children}) => {
    
    const [data,dispatch]=useReducer(OperationReducer,[],init)

    useEffect(()=>
    {
        localStorage.setItem('operations',JSON.stringify(data));
    },[data])
    
    return (
        <OperationContext.Provider value={{data,dispatch}}>
            {children}
        </OperationContext.Provider>
    )
}
