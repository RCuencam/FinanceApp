import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import { UserContext } from '../context/userContext';
import { Login } from '../views/auth/Login';
import { Register } from '../views/auth/Register';
import { FinanceRoute } from './FinanceRoute';
import { PrivateRoute } from './PrivateRouter';
import { PublicRoute } from './PublicRouter';

export const AppRouter = () => {
    const {state}=useContext(UserContext)
    return (
        <div>
            <Router>
                <Switch>
                    <PublicRoute  exact path="/auth/login" isAuthenticated={state.logged} component={Login}/>
                    <PublicRoute  exact path="/auth/register" isAuthenticated={state.logged} component={Register}/>
                    <PrivateRoute path="/" isAuthenticated={state.logged} component={FinanceRoute} />
                </Switch>
            </Router>
        </div>
    )
}
