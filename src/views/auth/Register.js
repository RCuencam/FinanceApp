import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

const initialState={
    ruc:'',
    password:'',
    address:'',
    name:'',
    number:'',
    email:''
}
export const Register = () => {

    const [values,handleChange]=useForm(initialState);

    const {ruc,password,address,name,number,email}=values;

    const handleSubmit=e=>
    {
        e.preventDefault();
        console.log(ruc);
        console.log(password);
        console.log(address);
        console.log(name);
        console.log(number);
        console.log(email);
    }

    return (
        <div className="form__main">
            <div className="form__content form-register">
                <h1 className="form__content-title">REGISTER</h1>
                <p className="form__content-p">Ingrese sus datos</p>
                <form className="form__content-form-register" onSubmit={handleSubmit}>
                    <div className="form__content-form-container">
                        <div className="form__content-form-section">

                            <input name="ruc" onChange={handleChange} value={ruc} className="input form__content-input" type="text" placeholder="RUC" autoComplete="off"/>
                            <br/>
                            <input name="password" onChange={handleChange} value={password} className="input form__content-input" type="password" placeholder="Contraseña"/>
                            <br/>
                            <input name="address" onChange={handleChange} value={address} className="input form__content-input" type="text" placeholder="Dirección" autoComplete="off"/>
                            <br/>
                        </div>
                        <div className="form__content-form-section">
                            <input name="name" onChange={handleChange} value={name} className="input form__content-input" type="text" placeholder="Nombre" autoComplete="off"/>
                            <br/>
                            <input name="number" onChange={handleChange} value={number} className="input form__content-input" type="number" placeholder="Teléfono"/>
                            <br/>
                            <input name="email" onChange={handleChange} value={email} className="input form__content-input" type="text" placeholder="Correo Electrónico" autoComplete="off"/>
                            <br/>    
                        </div>
                    </div>
                    <div className="form__content-button">
                        <button className="btna btn-primary" type="submit">REGISTRARSE</button>
                    </div>
                    <br/>
                    <Link to="/auth/login" className="form__content-link">Login</Link>
                </form>
            </div>
        </div>
    )
}
