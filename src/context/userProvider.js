import React,{useEffect, useReducer} from 'react'
import { UserContext } from './userContext'
import { UserReducer } from './userReducer'


const init=()=>
{
    return JSON.parse(localStorage.getItem('user'))|| {logged:false}
}
export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(UserReducer,{},init)

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state))
    },[state])
    return (
        <UserContext.Provider value={{state,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}
