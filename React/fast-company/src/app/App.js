import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import NavBar from './components/ui/navBar'
import Main from './layouts/main'
import Users from './layouts/users'
import Login from './layouts/login'
// import EditUserPage from './components/page/editUserPage/editUserPage'
import { ToastContainer } from 'react-toastify'
import { ProfessionProvider } from './hooks/useProfession'
import { QualitiesProvider } from './hooks/useQualities'
import AuthProvider from './hooks/useAuth'
import ProtectedRoute from './components/common/protectedRoute'
import LogOut from './layouts/logOut'

function App() {
  return (
    <div className={'container'}>
      <AuthProvider>
        <NavBar />
        <ProfessionProvider>
          <QualitiesProvider>
            <Switch>
              {/* <Route path={'/users/:userId?/edit'} component={EditUserPage} /> */}
              <ProtectedRoute
                path={'/users/:userId?/:edit?'}
                component={Users}
              />
              <Route path={'/login/:type?'} component={Login} />
              <Route path={'/logout'} component={LogOut} />
              <Route path={'/'} exact component={Main} />
              <Redirect to={'/'} />
            </Switch>
          </QualitiesProvider>
        </ProfessionProvider>
      </AuthProvider>
      <ToastContainer />
    </div>
  )
}

export default App
