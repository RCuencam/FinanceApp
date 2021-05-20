import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { HistoryScreen } from '../views/app/HistoryScreen'
import { HomeScreen } from '../views/app/HomeScreen'
import { Navbar } from '../views/app/Navbar'

export const FinanceRoute = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomeScreen}/>
                <Route path="/history" component={HistoryScreen}/>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}
