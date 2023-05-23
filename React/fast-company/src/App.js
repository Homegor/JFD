import React from 'react'
import NavBar from './components/navBar'
import { Route, Switch } from 'react-router-dom'
import Main from './layouts/main'
import Users from './layouts/users'
import Login from './layouts/login'

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path={'/'} exact component={Users} />
                <Route path={'/users/:userId?'} component={Users} />
                <Route path={'/main'} component={Main} />
                <Route path={'/login'} component={Login} />
            </Switch>
        </div>
    )
}

export default App
