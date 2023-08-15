import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import NavBar from './components/ui/navBar'
import ProtectedRoute from './components/common/protectedRoute'

import Main from './layouts/main'
import Users from './layouts/users'
import Login from './layouts/login'
import LogOut from './layouts/logOut'

import { ProfessionProvider } from './hooks/useProfession'
import AuthProvider from './hooks/useAuth'

import { loadQualitiesList } from './store/qualities'

// import EditUserPage from './components/page/editUserPage/editUserPage'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadQualitiesList())
  }, [])
  return (
    <div className={'container'}>
      <AuthProvider>
        <NavBar />
        <ProfessionProvider>
          <Switch>
            {/* <Route path={'/users/:userId?/edit'} component={EditUserPage} /> */}
            <ProtectedRoute path={'/users/:userId?/:edit?'} component={Users} />
            <Route path={'/login/:type?'} component={Login} />
            <Route path={'/logout'} component={LogOut} />
            <Route path={'/'} exact component={Main} />
            <Redirect to={'/'} />
          </Switch>
        </ProfessionProvider>
      </AuthProvider>
      <ToastContainer />
    </div>
  )
}

export default App
