import React,{useContext, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from "validator"
import { UserContext } from '../../context/userContext'
import { types } from '../../types/types'

const initialState={
    email:'',
    password:''
}

export const Login = () => {

    const {dispatch}=useContext(UserContext)

    const [values,handleChange]=useForm(initialState)
    const {email,password}=values

    const [error,setError]=useState('')
    const [isError,SetIsError]=useState(false)

    const history=useHistory()

    
    const ConfirmError=(message)=>
    {

        SetIsError(true)
        setError(message)

    }

    const handleSubmit=e=>
    {
        e.preventDefault()
        if(validator.isEmpty(email) || validator.isEmpty(password)){

            ConfirmError('Rellene los campos vacíos')

        }else if(!validator.isEmail(email)){

            ConfirmError('Ingrese el email con el formato correcto')

        }else if(validator.isLength(password,{max:6})){

            ConfirmError('La constraseña debe ser mayor a 6 caracteres')
        }
        else{

            SetIsError(false)
        }

        if(email==="admin@admin.com" && password==="admin123"){
            dispatch({
                type:types.login,
                payload:{
                    name:'Admin',
                    email
                }
            })
            history.replace("/")
        }
                
    }
    return (
        <div className="form__main">
            <div className="form__content">
                <h1 className="form__content-title">LOGIN</h1>
                <p className="form__content-p">Ingrese sus datos</p>
                { isError && 
                <div className="error__alert">
                    {error}
                </div> 
                }
                <form className="form__content-form" onSubmit={handleSubmit}>
                    <input name="email" className="input form__content-input" type="text" placeholder="Email" onChange={handleChange} value={email} autoComplete="off"/>
                    <br/>
                    <input name="password" className="input form__content-input" type="password" placeholder="Contraseña" onChange={handleChange} value={password}/>
                    <br/>
                    <div className="form__content-button">
                        <button className="btna btn-primary" type="submit">INGRESAR</button>
                    </div>
                    <br/>
                    <Link to="/auth/register" className="form__content-link">Registrate</Link>
                </form>
            </div>
        </div>
    )
}
