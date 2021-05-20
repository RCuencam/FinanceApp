import React, { useContext,useState } from 'react'
import {UserContext} from "../../context/userContext"
import {Collapse} from "reactstrap"
import { types } from '../../types/types'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const {state,dispatch}=useContext(UserContext)

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    const handleClick=()=>
    {
        dispatch({
            type:types.logout
        })
    }
    return (
        <div className="navbar">
            <Collapse isOpen={isOpen} className="w-100">
                <div className="containers navbar__content py-3">
                    <div className="navbar__content-title">
                        <Link to="/">
                            <h3>Finance App</h3>
                        </Link>
                    </div>
                    <div className="navbar__content-user">
                        <Link to="/history">
                            <div className="px-5"><h5>Historial</h5></div>
                        </Link>
                        <h5 className="m-0">{state.name}</h5>
                        <button className="btn__danger" onClick={handleClick}>Logout</button>
                    </div>
                </div>
                <button onClick={toggle} className="navbar__button"></button>
            </Collapse>
        </div>
    )
}
