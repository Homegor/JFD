import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import NavBar from './components/ui/navBar'
import ProtectedRoute from './components/common/protectedRoute'

import Main from './layouts/main'
import Users from './layouts/users'
import Login from './layouts/login'
import LogOut from './layouts/logOut'

import AppLoader from './components/ui/hoc/appLoader'

// import EditUserPage from './components/page/editUserPage/editUserPage'

function App() {
  return (
    <div className={'container'}>
      <AppLoader>
        <NavBar />
        <Switch>
          {/* <Route path={'/users/:userId?/edit'} component={EditUserPage} /> */}
          <ProtectedRoute path={'/users/:userId?/:edit?'} component={Users} />
          <Route path={'/login/:type?'} component={Login} />
          <Route path={'/logout'} component={LogOut} />
          <Route path={'/'} exact component={Main} />
          <Redirect to={'/'} />
        </Switch>
      </AppLoader>

      <ToastContainer />
    </div>
  )
}

export default App
